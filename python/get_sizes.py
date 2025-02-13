# %%

from PIL import Image, ImageOps
import os 
import pandas as pd 

from sudulunu.helpers import dumper, pp 


import pillow_avif  # Have to import this before importing PIL
from PIL import Image, ImageOps

# image = Image.open("avif_test.avif")
# image.thumbnail((512, 512))
# image.save("avif_thumb.avif", quality=70)


# Image.open("avif_thumb.avif").show()

# %%

pathos = '/Users/josh/Github/site/static/images/'

to_do = os.listdir(pathos)

include = ['.jpg', '.jpeg', 'png']

fillos = os.listdir(pathos)
fillos = [x for x in fillos if any(endo in x.lower() for endo in include)]


print(fillos)

# %%

records = []

for fillo in fillos:

    stemmo = fillo.split(".")[0].strip()

    inter = f"{pathos}{fillo}"

    im = Image.open(inter)

    mywidth = 340
    width = im.size[0]
    height = im.size[1]

    # print("width:   ", width)
    # print("height:  ", height)

    record = {"img_path": fillo,"Width": width,"Height": height}


    records.append(record)

df = pd.DataFrame.from_records(records)

dumper('/Users/josh/Github/site/python/scrap', 'image_sizes', df)   

pp(df)

# %%