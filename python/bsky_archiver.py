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

anthro_client = anthropic.Anthropic(
     api_key=claudy,
)

def get_caption(image_path):

    with open(image_path, "rb") as img:
        stringo = base64.b64encode(img.read()).decode("utf-8")

    if ".png" in image_path.lower():
         media_type = 'image/png'
    else:
        media_type = "image/jpeg"

    message = anthro_client.messages.create(
        model="claude-3-5-sonnet-20241022",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": [
                    {
                        "type": "image",
                        "source": {
                            "type": "base64",
                            "media_type": media_type,
                            "data": stringo,
                        },
                    },
                    {
                        "type": "text",
                        "text": "Analyise this image and output in JSON format with keys: 'Caption' (a detailed description of the image), 'Tools' (A list of the tools that may have been used), 'Colours' (A list of the colour pallete), 'Style' (What style of artwork is this?), 'Subject' (A description of the subject of the image), 'Keywords' (A list of keywords that could be used to categorise this image for a search function)."
                    }
                ],
            }
        ],
    )
    # print(message)
    return message

# %%


# %%

listo = []
deleted = 0

linklogs = []
scribbles = []

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
                    # print(text)

                    if "#scribble" in text.lower():
                    
                        for image in thingo.post.record.embed.images:

                            record = {"Date": created.strftime("%Y-%m-%d"), "Title": text, "Uri": uri}

                            stemmo = image.image.cid
                            record['img_alt'] = image.alt
                            # print(image.alt)
                            record["img_path"] = f"{stemmo}.jpg"

                            picco = f'https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:3kqj3ksyfct7pip5j5dnmjcu/{stemmo}@jpeg'

                            r = requests.get(picco, stream=True)

                            if r.status_code == 200:
                                with open(f'{image_backup}{stemmo}.jpg', 'wb') as f:
                                    for chunk in r:
                                        f.write(chunk)

                            messy = get_caption(f'{image_backup}{stemmo}.jpg')

                            new_image = Image.open(f'{image_backup}{stemmo}.jpg')
                            image_stats = os.stat(f'{image_backup}{stemmo}.jpg')

                            if (image_stats.st_size / (1024 * 1024)) > 1:
                                    w, h = new_image.size
                                    new_w = int(w/3)
                                    new_h = int(h/3)
                                    new_image = new_image.resize((new_w, new_h))

                                    new_image.save(f'{image_outty}{stemmo}.jpg')
                            
                            else:
                                    new_image.save(f'{image_outty}{stemmo}.jpg')

                            w, h = new_image.size

                            old_image_df = pd.read_csv('/Users/josh/Github/site/python/scrap/image_sizes.csv')
                            new_image_record = {"Img_path": f'{stemmo}.jpg', 'Width': w, "Height": h}
                            new_i_df = pd.DataFrame.from_records([new_image_record])
                            new_i_df_2 = pd.concat([old_image_df, new_i_df])
                            dumper('/Users/josh/Github/site/python/scrap', 'image_sizes', new_i_df_2)

                            jsony = json.loads(messy.content[0].text)

                            record["Caption"] = jsony['Caption'],
                            record["Colours"] = jsony['Colours'],
                            record["Style"] = jsony['Style'],
                            record["Subject"]= jsony['Subject'],
                            record["Keywords"]= jsony['Keywords']
                        
                            scribbles.append(record)

                            new = pd.DataFrame.from_records(scribbles)
                            old = pd.read_csv(f"{csv_outty}/bsky_scribbles.csv")
                            # old.drop(columns={"Images"}, inplace=True)

                            frame = pd.concat([new, old])
                            for col in ["Title", 'Caption']:
                                frame[col] = frame[col].str.replace("\n", ' ', regex=False)

                            frame.drop_duplicates(subset=["img_path"], inplace=True)
                            frame.sort_values(by=['Date'], ascending=True, inplace=True)
                            dumper(csv_outty, 'bsky_scribbles', frame)

                    elif "#linklog" in text.lower():
                            # print(text)
                            record = {"Date": created.strftime("%Y-%m-%d"), "Title": text, "Uri": uri}

                            linklogs.append(record)

                            new = pd.DataFrame.from_records(linklogs)
                            old = pd.read_csv(f"{csv_outty}/bsky_linklogs.csv")
                            # frame = pd.DataFrame.from_records(linklogs)
                            frame = pd.concat([new, old])
                            # print(frame.columns.tolist())
                            frame.drop_duplicates(subset=["Uri"], inplace=True)
                            frame.sort_values(by=['Date'], ascending=True, inplace=True)        

                            dumper(csv_outty, 'bsky_linklogs', frame)

            created = datetime.datetime.fromisoformat(thingo.post.record.created_at)
            difference = today - created

            if handle.lower() == user:
                uri = thingo.post.uri
                if (difference.days > 30):
                    client.delete_post(uri)
                    # record['Deleted'] = True
                    deleted += 1
                    print("Deleted: ", deleted)
            else:
                uri = thingo.post.viewer.repost
                if (difference.days > 30):
                    client.delete_repost(uri)
                    # record['Deleted'] = True
                    deleted += 1
                    print("Deleted: ", deleted)
        except Exception as e:
            print(e)
            print(thingo.post.record.embed.images)
            continue




# # https://cdn.bsky.app/img/feed_fullsize/plain/did:plc:3kqj3ksyfct7pip5j5dnmjcu/bafkreihnhin3ktxu7qmy7cskxtoc7te6pkp3v47sybg75kz7ses46anxqm@jpeg


# # %%