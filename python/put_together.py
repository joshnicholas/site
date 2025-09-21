# %%

from atproto import Client

import datetime
import pytz
import time 
import pandas as pd 
import json 
from PIL import Image

import requests
today = datetime.datetime.now().astimezone(pytz.timezone("Australia/Brisbane"))

from sudulunu.helpers import dumper, pp

import os
import pathlib
from pathlib import Path

# Get paths relative to script location
script_dir = Path(__file__).parent
project_root = script_dir.parent

os.chdir(script_dir)

print(os.getcwd())

# %%

new_bscrib = pd.read_csv('scrap/bsky_scribbles.csv')
# ['Date', 'Title', 'Uri', 'img_path', 'Caption', 'Colours',
# 'Style', 'Subject', 'Keywords', 'Images']

new_bscrib.drop(columns={'Uri', 'Images'}, inplace=True)
new_bscrib['Category'] = 'Bsky'

# pp(new_bscrib)

# print(new_bscrib['Images'])

old_b_scrib = pd.read_csv('scrap/copied_bsky.csv')
# ['Para', 'Date', 'Title', 'img_path', 'img_alt', 'md_path', 
# 'Category', 'Caption', 'Colours', 'Style', 'Subject', 'Keywords']

old_b_scrib.drop(columns={'Para', 'md_path', }, inplace=True)
old_b_scrib['Category'] = 'Bsky'

bscrib = pd.concat([new_bscrib, old_b_scrib])
# ['Date', 'Title', 'img_path', 'Caption', 'Colours', 'Style', 'Subject', 
# 'Keywords', 'Category']
# bscrib.sort_values(by=['Date'], ascending=False, inplace=True)

# pp(bscrib)

# %%

# %%


blog = pd.read_csv('scrap/copied.csv')
# ['Para', 'Date', 'Title', 'img_path', 'img_alt', 'md_path', 
# 'Category', 'Caption', 'Colours', 'Style', 'Subject', 'Keywords']

blog.drop(columns={'Para'}, inplace=True)

blog = blog[['Date', 'Title', 'img_path', 'Caption', 'Colours', 'Style', 'Subject', 
'Keywords', 'Category']]

# %%

### Process images and get sizes etc.

import smaller_images

import get_sizes

sizes = pd.read_csv('scrap/image_sizes.csv')



# %%


combo = pd.concat([blog, bscrib])
combo.sort_values(by=['Date'], ascending=True, inplace=True)

for col in ['Title', 'Caption',]:
    combo[col] = combo[col].str.replace("\n", ' ', regex=False)

exclude = ['bafkreickplyzs7xo4bm7sqeaes2jgyxyfhdurrvtvbiffnxfxxkwdzjbdu.jpg', 
           'bafkreifjwfiknztnsemjjcyjr7axqxffhh3tsu4asw7x6odc4nbu22nq24.jpg',
           'bafkreic6qlpz5nkur2g7cagtpirx47ewqmxgesx2yzfurficd47ngynhm4.jpg',
           'bafkreidigdrapkcxz625lixzsyiolf2slfo757t4h5bhnlauaa2z4mqdou.jpg',
           'bafkreiahg6cum5xsy4qti3ezkwkhgdheyihf5puvgopougel25rugnkjta.jpg',
           'bafkreiasucistwpt5erdxie6pb6x24nzzaonqi3wkcg5ljofhjrj4qzr24.jpg',
           'bafkreihqf3xp5tnmxmb3m27n4qsupj7jcpkhcodia47k42nf2qc76mlmcq.jpg',
           'bafkreibtxtcpmufmbutpcj45swuxciuxjm4jk6xkz227hrxjwvlpj567zm.jpg',
           'bafkreibj7u4rxw6lb2axwlb7yjb3xdhlmkwcdrzzmdobolwur3s4j4u75u.jpg',
           'bafkreiaist7i2on52yxk7ib74gdi4rter4mwhvgckt7rudxclgxagndlcu.jpg',]

# print(len(combo['img_path'].unique().tolist()))

combo = combo.loc[~combo['img_path'].isin(exclude)]

# print(len(combo['img_path'].unique().tolist()))


# print(combo.loc[combo['img_path'].str.contains("bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.jpg")])

combo.dropna(subset=['img_path'], inplace=True)
combo.drop_duplicates(subset=['img_path'], inplace=True)

# dumper('/Users/josh/Github/site/static', 'scribbles', combo)

# for thingo in ['#scribbles', '#scribble']:
#     combo['Title'] = combo['Title'].str.replace(thingo, '', regex=False)


combo['img_path'] = combo['img_path'].str.replace("/", '')
combo.sort_values(by=['Date'], ascending=False, inplace=True)


# %%

# %%

dumbo = pd.merge(combo, sizes, on='img_path', how='left')

# print(dumbo.isna())
# pp(dumbo)

# %%

def convert_jpg_to_webp_with_base_dir(df, base_dir="static/images/"):
    """
    Convert JPG images to WebP with a base directory
    
    Args:
        df: pandas DataFrame with 'img_path' column containing JPG filenames
        base_dir: base directory where images are located
        
    Returns:
        pandas DataFrame with added 'webp_path' column
    """
    webp_paths = []
    origin_dir = script_dir / 'image_archive'
    
    for index, row in df.iterrows():
        try:
            # Construct full path
            original_path = os.path.join(origin_dir, row['img_path'])
            
            # Create WebP path
            webp_filename = os.path.splitext(row['img_path'])[0] + '.webp'
            webp_full_path = os.path.join(base_dir, webp_filename)
            
            # Check if WebP already exists
            if os.path.exists(webp_full_path):
                webp_paths.append(webp_filename)  # Store relative path
                # print(f"→ Already exists: {webp_full_path}")
                continue
            
            # Read and convert image
            with Image.open(original_path) as img:
                if img.mode in ('RGBA', 'LA', 'P'):
                    img = img.convert('RGB')

                mywidth = 340
                wpercent = (mywidth/float(img.size[0]))
                hsize = int((float(img.size[1])*float(wpercent)))
                img = img.resize((mywidth,hsize))
                
                img.save(webp_full_path, 'WebP', quality=90, method=6)
                
            webp_paths.append(webp_filename)  # Store relative path
            # print(f"✓ Converted: {original_path} → {webp_full_path}")

            if index % 100 == 0:
                print(f"Converting index: {index}/{len(df)}")
            
        except Exception as e:
            print(f"✗ Error converting {row['img_path']}: {str(e)}")
            webp_paths.append(None)
    
    # FIXED: This should be OUTSIDE the loop and use the webp_paths list
    df['webp_path'] = webp_paths
    return df

fumbo = convert_jpg_to_webp_with_base_dir(dumbo, base_dir=str(project_root / "static" / "images") + "/")

# pp(fumbo)

pp(fumbo)

dumper('scrap', 'together_2', fumbo)

# %%


# %%

# %%

# with open('/Users/josh/Github/site/src/lib/data/scribbles.json', 'w') as f:
#     combo.to_json(f, orient='records')

# with open('/Users/josh/Github/site/src/lib/scribbles.json', 'w') as f:
#     combo.to_json(f, orient='records')

# with open('/Users/josh/Github/site/scribbles.json', 'w') as f:
#     combo.to_json(f, orient='records')

# with open('/Users/josh/Github/site/src/lib/data/scribbles.json', 'w') as f:
#     dumbo.to_json(f, orient='records')

# with open('/Users/josh/Github/site/src/lib/scribbles.json', 'w') as f:
#     dumbo.to_json(f, orient='records')

# with open('/Users/josh/Github/site/scribbles.json', 'w') as f:
#     dumbo.to_json(f, orient='records')

with open(project_root / 'src' / 'lib' / 'data' / 'scribbles.json', 'w') as f:
    fumbo.to_json(f, orient='records')

with open(project_root / 'src' / 'lib' / 'scribbles.json', 'w') as f:
    fumbo.to_json(f, orient='records')

with open(project_root / 'scribbles.json', 'w') as f:
    fumbo.to_json(f, orient='records')

# script_dir = pathlib.Path(__file__).parent

# # Go up one level to the site directory, then into static/images
# saucey = script_dir.parent / "src" / "lib"

# with open(f'{saucey}/scribbles.json', 'w') as f:
#     combo.to_json(f, orient='records')

# with open(f'{saucey}/scribbles.json', 'w') as f:
#     dumbo.to_json(f, orient='records')

# dumper('scrap', 'together', dumbo)

dumper('scrap', 'together', fumbo)


# %%
