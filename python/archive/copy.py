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

img_source_path = '/Users/josh/Github/sk-blog/static/'
img_destination_path = '/Users/josh/Github/site/static/images/'

csv_pathos = '/Users/josh/Github/site/python/scrap/copied.csv'

iterrer = pathlib.Path(scribble_pathos)
fillos = list(iterrer.rglob("*.md"))

# %%

records = []

pattern = r'[^A-Za-z0-9 ]+'


for fillo in fillos:

    try:

        # print(str(fillo))
        old = pd.read_csv(csv_pathos)
        old = old.loc[old['Caption'] != '']
        already_done = old["md_path"].unique().tolist()
        # already_done = []
        # print('already_done: ', already_done)

        with open(str(fillo), 'r') as file:
            stringo = file.read()

            if str(fillo) not in already_done:

                # print(stringo)

                html = markdown.markdown(stringo)

                soup = bs(html, 'html.parser')

                images = soup.find_all('img')

                paras = list(soup.find_all('p'))

                title = [x.text.strip() for x in paras if "title" in x.text.lower()]
                title = title[0].split("\n")[0].replace("title:", '').strip()

                title = re.sub(pattern, '', title).strip()

                datto = [x.text.strip() for x in paras if "title" in x.text.lower()]
                datto = datto[0].split("\n")[-1].replace("date:", '').strip()
                # print(datto)
                # print(title)
                paras = [x.text.strip() for x in paras if "title" not in x.text.lower()]
                paras = ' '.join(paras).replace('\n', ' ').replace('\r', '').replace("/s", '').strip()
                paras = "".join(paras.splitlines())
                
                for image in images:

                        img_path = image['src']
                        # if img_path not in already_done:

                        print(img_path)
                        img_alt = image['alt'].strip()
                        img_alt = re.sub(pattern, '', img_alt).strip()


                        dest = shutil.copyfile(f"{img_source_path}{img_path}", f"{img_destination_path}{img_path}")

                        messy = get_caption(f"{img_destination_path}{img_path}")
                        jsony = json.loads(messy.content[0].text)
                        record = {"Para": paras,
                                "Date": datto,
                                    "Title": title.replace('\n', ' ').replace('\r', ''),
                                    "img_path": img_path,
                                    "img_alt": img_alt.replace('\n', ' ').replace('\r', '').replace('  ', ' '),
                                    "md_path": str(fillo),
                                    "Category": "Blog",
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
                        frame = frame.loc[frame["md_path"] != '']
                        frame.drop_duplicates(subset=['img_path'], inplace=True)

                        frame.sort_values(by=['Date'], ascending=True, inplace=True)

                        for col in ["Para","Title","img_alt", 'Caption']:
                            frame[col] = frame[col].str.replace("\n", ' ', regex=False)

                        frame = frame.loc[frame['Caption'] != '']
                        already_done = frame["md_path"].unique().tolist()
                        # already_done = []
                        with open(csv_pathos, 'w') as f:
                            frame.to_csv(f, index=False, header=True)

                        time.sleep(2)
                        
                        # else: 
                            # print("Skipped: ", str(fillo))

    except Exception as e:
        print(e)
        print(str(fillo))

# %%

# print(messy)
# print(messy.content)
# print(messy.content[0].text)
# print(type(messy.content[0].text))

# import json
# jsony = json.loads(messy.content[0].text)
# # print(jsony.keys())
# print(jsony['Keywords'])

# %%
