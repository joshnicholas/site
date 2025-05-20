# %%
import os 
import pathlib
import pandas as pd
pathos = pathlib.Path(__file__).parent
os.chdir(pathos)
import json 
print(os.getcwd())

from dotenv import load_dotenv,dotenv_values
load_dotenv()

user = dotenv_values(".env")['bskyuser']
passy = dotenv_values(".env")['bskypass']
claudy = dotenv_values(".env")['claudy']

image_backup = '/Users/josh/Github/site/python/image_archive/'

import anthropic
import base64

from sudulunu.helpers import pp, dumper

# %%

anthro_client = anthropic.Anthropic(
     api_key=claudy,
)

image_outty = '/Users/josh/Github/site/static/images/'


# %%

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
# fillo = 'scrap/together.csv'
fillo = 'scrap/bsky_scribbles.csv'

old = pd.read_csv(fillo)
# ['Date', 'Title', 'img_path', 'Caption', 'Colours', 
#  'Style', 'Subject', 'Keywords', 'Category', 'img_alt', 
#  'Width', 'Height']

counter = 0
for col in ['Caption', 'Style', 'Subject', 'Keywords', 'Colours']:
    try:
        inter = old.copy()
        inter = inter.loc[inter[col].isna()]
        print("Col: ", col)
        print("lenno: ", len(inter))
        inter = inter

        for index,row in inter.iterrows():
            pathos = row['img_path']
            # print(f"{image_backup}{pathos}")

            messy = get_caption(f"{image_backup}{pathos}")
            jsony = json.loads(messy.content[0].text)

            thingo = jsony[col]
            # print(thingo)

            old.loc[old['img_path'] == pathos, col] = thingo

            counter += 1

            if counter % 5 == 0:
                print("Count: ", counter)
            # print(other)
    except Exception as e:
        print(e)
        continue

dumper('scrap', 'bsky_scribbles', old)

    # pp(inter)

# bafkreienav57dzge35lh27gghnpa5nlnqdzewhyvhbntbutl6yxa2jnriq.jpg

# pp(old)

# %%