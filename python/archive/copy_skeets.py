# %%

import markdown
import os 
import pathlib
pathos = pathlib.Path(__file__).parent
os.chdir(pathos)
# print(os.getcwd())
# !pip3 install pandas
import pandas as pd
import shutil
import re
import time 
import json

from bs4 import BeautifulSoup as bs

from dotenv import load_dotenv,dotenv_values
load_dotenv()

claudy = dotenv_values(".env")['claudy']

import anthropic
import base64

# %%

client = anthropic.Anthropic(
     api_key=claudy,
)

def get_caption(image_path):

    with open(image_path, "rb") as img:
        stringo = base64.b64encode(img.read()).decode("utf-8")

    if ".png" in image_path.lower():
         media_type = 'image/png'
    else:
        media_type = "image/jpeg"

    message = client.messages.create(
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

scribble_pathos = '/Users/josh/Github/sk-blog/scribbles'

img_source_path = '/Users/josh/Github/Archives/Archive/bsky/joshnicholas/pics/images/'
img_destination_path = '/Users/josh/Github/site/static/images/'

inputcv = '/Users/josh/Github/Archives/Archive/bsky/joshnicholas/pics/Pics.csv'

csv_pathos = '/Users/josh/Github/site/python/scrap/copied_bsky.csv'

# %%

df = pd.read_csv(inputcv)
# ['Handle', 'Posted', 'Text', 'Deleted', 'Uri', 'Images']

# df = df[:10]

records = []

for index, row in df.iterrows():
    images = row['Images'].split(".jpg")
    images = [f"{x}.jpg" for x in images if x != ''] 



    old = pd.read_csv(csv_pathos)
    old = old.loc[old['Caption'] != '']
    already_done = old["img_path"].unique().tolist()

    if "#scribble" in str(row['Text']).lower():

        for image in images:

            if image not in already_done:

                print(row['Text'])

                dest = shutil.copyfile(f"{img_source_path}{image}", f"{img_destination_path}{image}")

                messy = get_caption(f"{img_destination_path}{image}")
                jsony = json.loads(messy.content[0].text)

                print(jsony['Caption'])

                record = {"Para": '',
                        "Date": row['Posted'],
                            "Title": row['Text'],
                            "img_path": image,
                            "img_alt": '',
                            "md_path": row['Uri'],
                            "Category": "Bluesky",
                            "Caption": jsony['Caption'],
                            "Colours": jsony['Colours'],
                            "Style": jsony['Style'],
                            "Subject": jsony['Subject'],
                            "Keywords": jsony['Keywords']

                            }

                records.append(record)

                new = pd.DataFrame.from_records(records)
                old = pd.read_csv(csv_pathos)

                frame = pd.concat([old, new])
                # frame = pd.DataFrame.from_records(records)
                frame = frame.loc[frame["md_path"] != '']
                frame.drop_duplicates(subset=['img_path'], inplace=True)

                frame.sort_values(by=['Date'], ascending=True, inplace=True)

                for col in ["Para","Title","img_alt", 'Caption']:
                    frame[col] = frame[col].str.replace("\n", ' ', regex=False)

                frame = frame.loc[frame['Caption'] != '']
                already_done = frame["img_path"].unique().tolist()
                # already_done = []
                with open(csv_pathos, 'w') as f:
                    frame.to_csv(f, index=False, header=True)

                time.sleep(2)

# print(df)
# print(df.columns.tolist())


# %%