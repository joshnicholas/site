import os
import pathlib
import json
import pandas as pd

pathos = pathlib.Path(__file__).parent
project_root = pathos.parent
os.chdir(pathos)


# import bsky_archiver

import put_together

import fetch_from_redis

# Deduplicate: drop rows that match another on any two of (Title, Date, img_path).
# Handles the same image submitted to Redis multiple times under different IDs.
scribbles_paths = [
    project_root / 'src' / 'lib' / 'data' / 'scribbles.json',
    project_root / 'src' / 'lib' / 'scribbles.json',
    project_root / 'scribbles.json',
]

with open(scribbles_paths[0]) as f:
    df = pd.DataFrame(json.load(f))

before = len(df)
df.drop_duplicates(subset=['Title', 'Date'], keep='first', inplace=True)
df.drop_duplicates(subset=['Title', 'img_path'], keep='first', inplace=True)
df.drop_duplicates(subset=['Date', 'img_path'], keep='first', inplace=True)
after = len(df)

if before != after:
    print(f"\nDeduplication removed {before - after} entries")
    for path in scribbles_paths:
        with open(path, 'w') as f:
            df.to_json(f, orient='records')


