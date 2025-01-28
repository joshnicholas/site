# %%

from atproto import Client

import datetime
import pytz
import time 
import pandas as pd 
import json 

import requests
today = datetime.datetime.now().astimezone(pytz.timezone("Australia/Brisbane"))

from sudulunu.helpers import dumper, pp

import os 
import pathlib
pathos = pathlib.Path(__file__).parent
os.chdir(pathos)

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

print(len(combo['img_path'].unique().tolist()))

combo = combo.loc[~combo['img_path'].isin(exclude)]

print(len(combo['img_path'].unique().tolist()))


# print(combo.loc[combo['img_path'].str.contains("bafkreieyj3wi5k5lzrjdo6wjq52crjdklhvjwypffpblyvon5teuawl37e.jpg")])

combo.dropna(subset=['img_path'], inplace=True)
combo.drop_duplicates(subset=['img_path'], inplace=True)

# dumper('/Users/josh/Github/site/static', 'scribbles', combo)

for thingo in ['#scribbles', '#scribble']:
    combo['Title'] = combo['Title'].str.replace(thingo, '', regex=False)


combo['img_path'] = combo['img_path'].str.replace("/", '')
combo.sort_values(by=['Date'], ascending=False, inplace=True)


pp(combo)

# with open('/Users/josh/Github/site/src/lib/data/scribbles.json', 'w') as f:
#     combo.to_json(f, orient='records')

# with open('/Users/josh/Github/site/scribbles.json', 'w') as f:
#     combo.to_json(f, orient='records')

with open('/Users/josh/Github/site/src/lib/scribbles.json', 'w') as f:
    combo.to_json(f, orient='records')

# %%
