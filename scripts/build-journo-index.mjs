// Preprocesses src/lib/data/journo.json into a search index + trimmed metadata,
// so the site never has to ship the full article text/standfirst to the browser.
// Run automatically as part of `npm run build`; safe to re-run any time journo.json changes.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import MiniSearch from 'minisearch';
import { journoSearchOptions } from '../src/lib/journoSearchOptions.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = join(__dirname, '../src/lib/data');

const journo = JSON.parse(readFileSync(join(dataDir, 'journo.json'), 'utf-8'));

const rows = Object.entries(journo).map(([id, row]) => ({
	id,
	headline: row.headline ?? '',
	Site: row.Site ?? '',
	published_date: row.published_date ?? '',
	url: row.url ?? '',
	standfirst: row.standfirst ?? '',
	text: row.text ?? ''
}));

const miniSearch = new MiniSearch(journoSearchOptions);
miniSearch.addAll(rows);

writeFileSync(join(dataDir, 'journo-index.json'), JSON.stringify(miniSearch));

const meta = rows
	.map(({ id, headline, Site, published_date, url }) => ({ id, headline, Site, published_date, url }))
	.sort((a, b) => new Date(b.published_date) - new Date(a.published_date));

writeFileSync(join(dataDir, 'journo-meta.json'), JSON.stringify(meta));

console.log(`Built journo search index: ${rows.length} articles.`);
