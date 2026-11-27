"""Add an article to src/lib/data/journo.json by calling add_article() directly,
e.g. from a REPL or `python -i add_journo_article.py`:

    add_article(
        url="https://www.abc.net.au/news/...",
        headline="...",
        standfirst="...",
        published_date="2026-11-28T06:00:00Z",
        text="<html>... paste the whole page source here ...</html>",
    )

`text` can be pasted as either plain text or a full HTML page dump - if it
looks like HTML it's automatically stripped down to the article body text.

Rebuilds the search index automatically unless rebuild_index=False is passed.
"""
import json
import pathlib
import re
import subprocess

import pandas as pd
from bs4 import BeautifulSoup

script_dir = pathlib.Path(__file__).parent
project_root = script_dir.parent
journo_path = project_root / 'src' / 'lib' / 'data' / 'journo.json'

COLUMNS = ['url', 'headline', 'standfirst', 'tags', 'published_date', 'text', 'Site']


def extract_article_text(raw):
    """Strip a pasted HTML page dump down to its article body text.

    Passes plain text straight through unchanged.
    """
    if not raw or not re.search(r'<[a-zA-Z][^>]*>', raw):
        return raw or ''

    soup = BeautifulSoup(raw, 'html.parser')

    for tag in soup(['script', 'style', 'nav', 'header', 'footer', 'aside', 'noscript', 'form', 'button', 'figcaption']):
        tag.decompose()

    container = soup.find('article') or soup.body or soup

    paragraphs = [p.get_text(' ', strip=True) for p in container.find_all('p')]
    paragraphs = [p for p in paragraphs if p]

    if paragraphs:
        return '\n\n'.join(paragraphs)

    # No <p> tags found (unexpected markup) - fall back to all visible text.
    return re.sub(r'\n{3,}', '\n\n', container.get_text('\n', strip=True))


def add_article(
    url,
    headline,
    standfirst='',
    tags='',
    published_date='',
    text='',
    site='ABC News',
    rebuild_index=True,
):
    with open(journo_path) as f:
        existing = json.load(f)

    df = pd.DataFrame.from_dict(existing, orient='index')
    df.index = df.index.astype(int)

    if (df['url'] == url).any():
        print(f"Already have an article with this URL, not adding: {url}")
        return

    new_id = (df.index.max() + 1) if len(df) else 0
    row = pd.DataFrame(
        [{
            'url': url,
            'headline': headline,
            'standfirst': standfirst,
            'tags': tags,
            'published_date': published_date,
            'text': extract_article_text(text),
            'Site': site,
        }],
        index=[new_id],
    )

    df = pd.concat([df, row[COLUMNS]])

    with open(journo_path, 'w') as f:
        df.to_json(f, orient='index')

    print(f"Added article {new_id}: {headline}")

    if rebuild_index:
        subprocess.run(
            ['node', 'scripts/build-journo-index.mjs'],
            cwd=project_root,
            check=True,
        )
