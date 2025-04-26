import os 
import pathlib
pathos = pathlib.Path(__file__).parent
os.chdir(pathos)

print(os.getcwd())

from dotenv import load_dotenv,dotenv_values
load_dotenv()

user = dotenv_values(".env")['bskyuser']
passy = dotenv_values(".env")['bskypass']
claudy = dotenv_values(".env")['claudy']


import anthropic
import base64

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

cappy = get_caption('/Users/josh/Github/site/static/images/2f5ec9184a.jpg')

# %%

print(cappy.content)

# %%