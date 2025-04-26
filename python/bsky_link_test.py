# %%

from atproto import Client

import datetime
import pytz
import time 
import pandas as pd 
import json 

from PIL import Image, ImageOps
import os 

import requests
today = datetime.datetime.now().astimezone(pytz.timezone("Australia/Brisbane"))

from sudulunu.helpers import dumper

import os 
import pathlib
pathos = pathlib.Path(__file__).parent
os.chdir(pathos)

print(os.getcwd())

# %%

from dotenv import load_dotenv,dotenv_values
load_dotenv()

# print(dotenv_values('.env').keys())

# %%

user = dotenv_values(".env")['bskyuser']
passy = dotenv_values(".env")['bskypass']
claudy = dotenv_values(".env")['claudy']

client = Client()
client.login(user,passy)

image_outty = '/Users/josh/Github/site/static/images/'
image_backup = '/Users/josh/Github/site/python/image_archive/'
csv_outty = '/Users/josh/Github/site/python/scrap'

# %%

counter = 0
checked = 0

init = client.get_author_feed(user, limit=100)
curse = init.cursor

import anthropic
import base64

# %%

listo = []
deleted = 0

linklogs = []
scribbles = []

dont_delete = ['at://did:plc:3kqj3ksyfct7pip5j5dnmjcu/app.bsky.feed.post/3lkweaztywc2t']

curse = None
for i in range(0,5):
# for i in range(0,9):
# for i in range(0,2):
    print("eye: ", i)
    next = client.get_author_feed(user, cursor=curse, limit=100)
    # next = client.get_author_feed(user, cursor=curse, limit=20)
    curse = next.cursor
    feed = next.feed

    for thingo in feed:
        try:
            handle = thingo.post.author.handle
            uri = thingo.post.uri

            old = pd.read_csv(f"{csv_outty}/bsky_scribbles.csv")
            # old_links = pd.read_csv(f"{csv_outty}/bsky_scribbles.csv")
            already_done = old['Uri'].unique().tolist()

            if uri not in already_done:

                if handle.lower() == user:
                    # if hasattr(thingo.post.record, 'embed'):
                    # # if thingo.post.record.embed != None:
                    #     if hasattr(thingo.post.record.embed, 'images'):
                    #     # if thingo.post.record.embed.images != None:
                    #         # uri = thingo.post.uri

                    #         checked += 1
                    #         if checked % 50 == 0:
                    #             print(f"Checked: ", checked)
                    #         time.sleep(1)

                    created = datetime.datetime.fromisoformat(thingo.post.record.created_at)
                    difference = today - created

                    text = thingo.post.record.text

                    if "I wrote a thing about drawing and Melbourne" in text:

                        if thingo.post.uri not in dont_delete:
                            print(text)
                            print(thingo.post.uri)

        except Exception as e:
            print(e)
            break