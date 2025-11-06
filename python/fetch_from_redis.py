import os
import redis
import json
import base64
import pandas as pd
from pathlib import Path
from dotenv import load_dotenv
from sudulunu.helpers import dumper, pp

# Load environment variables
load_dotenv()

# Get paths relative to script location
script_dir = Path(__file__).parent
project_root = script_dir.parent

os.chdir(script_dir)

print(f"Working directory: {os.getcwd()}\n")

# Connect to Redis
redis_url = os.getenv('REDIS_URL')

print("Connecting to Redis...")
r = redis.from_url(redis_url, decode_responses=True)

# Load existing scribbles.json to check what we already have
scribbles_path = project_root / 'scribbles.json'
if scribbles_path.exists():
    with open(scribbles_path, 'r') as f:
        existing_data = json.load(f)
    existing_df = pd.DataFrame(existing_data)
    existing_img_paths = set(existing_df['img_path'].tolist())
    print(f"Loaded {len(existing_df)} existing scribbles")
else:
    existing_df = pd.DataFrame()
    existing_img_paths = set()
    print("No existing scribbles.json found - starting fresh")

# Load tracking CSV if it exists
tracking_csv_path = script_dir / 'scrap' / 'redis_fetched.csv'
if tracking_csv_path.exists():
    tracking_df = pd.read_csv(tracking_csv_path)
    fetched_post_ids = set(tracking_df['post_id'].tolist())
    print(f"Already fetched {len(fetched_post_ids)} posts from Redis")
else:
    tracking_df = pd.DataFrame(columns=['post_id', 'img_path', 'fetch_date', 'title'])
    fetched_post_ids = set()
    print("No tracking CSV found - starting fresh")

# Get all post IDs from Redis
post_ids = r.smembers('posts:all')
print(f"\nFound {len(post_ids)} post IDs in Redis 'posts:all'")

new_posts = []
new_tracking = []
images_dir = project_root / 'static' / 'images'
images_dir.mkdir(exist_ok=True, parents=True)

# Fetch posts
for i, post_id in enumerate(post_ids, 1):
    # Skip if already fetched
    if post_id in fetched_post_ids:
        continue

    post_key = f'post:{post_id}'
    post_data_str = r.get(post_key)

    if not post_data_str:
        print(f"Warning: No data for {post_key}")
        continue

    try:
        post_data = json.loads(post_data_str)

        # Check if we already have this image
        img_path = post_data.get('img_path', '')
        if img_path in existing_img_paths:
            print(f"  [{i}/{len(post_ids)}] Skipping {post_id[:8]}... - already have {img_path}")
            continue

        # Decode and save WebP image
        webp_base64 = post_data.get('webp_base64')
        if webp_base64:
            try:
                # Remove data URL prefix if present
                if ',' in webp_base64 and webp_base64.startswith('data:'):
                    webp_base64 = webp_base64.split(',', 1)[1]

                # Decode base64
                image_data = base64.b64decode(webp_base64)

                # Save WebP
                webp_filename = post_data.get('webp_path', f'{post_id}.webp')
                webp_full_path = images_dir / webp_filename

                with open(webp_full_path, 'wb') as f:
                    f.write(image_data)

                print(f"  [{i}/{len(post_ids)}] Saved {post_id[:8]}... -> {webp_filename}")

                # Prepare post data (remove webp_base64 from final data)
                post_clean = {k: v for k, v in post_data.items() if k != 'webp_base64'}
                post_clean['Category'] = 'Redis'

                new_posts.append(post_clean)

                # Track this fetch
                new_tracking.append({
                    'post_id': post_id,
                    'img_path': img_path,
                    'fetch_date': pd.Timestamp.now().isoformat(),
                    'title': post_data.get('Title', '')
                })

            except Exception as e:
                print(f"  [{i}/{len(post_ids)}] Error processing image for {post_id[:8]}...: {e}")
                continue
        else:
            print(f"  [{i}/{len(post_ids)}] No webp_base64 for {post_id[:8]}...")

    except json.JSONDecodeError as e:
        print(f"Error parsing JSON for {post_key}: {e}")
        continue

print(f"\n{'='*60}")
print(f"Fetched {len(new_posts)} new posts from Redis")
print(f"{'='*60}\n")

if new_posts:
    # Create DataFrame from new posts
    new_df = pd.DataFrame(new_posts)

    # Combine with existing data
    if not existing_df.empty:
        combined_df = pd.concat([existing_df, new_df], ignore_index=True)
    else:
        combined_df = new_df

    # Sort by date descending
    combined_df.sort_values(by=['Date'], ascending=False, inplace=True)

    # Remove duplicates based on img_path
    combined_df.drop_duplicates(subset=['img_path'], keep='first', inplace=True)

    print(f"Total scribbles after merge: {len(combined_df)}")

    # Save to scribbles.json in all 3 locations (like put_together.py)
    with open(project_root / 'src' / 'lib' / 'data' / 'scribbles.json', 'w') as f:
        combined_df.to_json(f, orient='records')

    with open(project_root / 'src' / 'lib' / 'scribbles.json', 'w') as f:
        combined_df.to_json(f, orient='records')

    with open(project_root / 'scribbles.json', 'w') as f:
        combined_df.to_json(f, orient='records')

    print("✓ Updated scribbles.json in 3 locations")

    # Save to CSV
    dumper('scrap', 'redis_combined', combined_df)
    dumper('scrap', 'redis_new', new_df)
    print("✓ Saved CSV files")

    # Update tracking CSV
    if new_tracking:
        new_tracking_df = pd.DataFrame(new_tracking)
        updated_tracking = pd.concat([tracking_df, new_tracking_df], ignore_index=True)
        dumper('scrap', 'redis_fetched', updated_tracking)
        print(f"✓ Updated tracking CSV ({len(updated_tracking)} total tracked posts)")

    print(f"\n{'='*60}")
    print("Summary of new posts:")
    print(f"{'='*60}")
    pp(new_df[['Date', 'Title', 'img_path', 'webp_path']])

else:
    print("No new posts to fetch!")
