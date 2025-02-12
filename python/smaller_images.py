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

pathos = 'static/'
out_path = 'static/'

pathos = '/Users/josh/Github/site/python/image_archive/'
out_path = '/Users/josh/Github/site/static/images/'

to_do = os.listdir(pathos)

include = ['.jpg', '.jpeg', 'png']

fillos = os.listdir(pathos)
fillos = [x for x in fillos if any(endo in x.lower() for endo in include)]

already_done = os.listdir(out_path)
fillos =[ x for x in fillos if x not in already_done]

print(fillos)

# %%

records = []

for fillo in fillos:

    stemmo = fillo.split(".")[0].strip()

    inter = f"{pathos}{fillo}"

    im = Image.open(inter)

    mywidth = 340
    wpercent = (mywidth/float(im.size[0]))
    hsize = int((float(im.size[1])*float(wpercent)))
    img = im.resize((mywidth,hsize))
    img.save(f"{out_path}{fillo}")

    record = {"img_path": fillo, 'Width': img.size[0], 'Height': img.size[1]}
    records.append(record)

    # print(f"Old: {im.size[0]}")
    # print(f"New: {img.size[0]}")

cat = pd.DataFrame.from_records(records)

dumper("/Users/josh/Github/site/python/scrap", 'image_sizes', cat)

pp(cat)

    # im.save(f"{out_path}{stemmo}.avif", quality=100)

# %%



# inter = f"/Users/josh/Github/site/python/image_archive/blueyellow.jpg"

# im = Image.open(inter)
# # im.save(f"/Users/josh/Github/site/python/image_archive/blueyellow.jpg")

# mywidth = 340
# wpercent = (mywidth/float(im.size[0]))
# hsize = int((float(im.size[1])*float(wpercent)))
# img = im.resize((mywidth,hsize))
# img.save(f"/Users/josh/Github/site/static/blueyellow340.jpg")

# mywidth = 200
# wpercent = (mywidth/float(im.size[0]))
# hsize = int((float(im.size[1])*float(wpercent)))
# img = im.resize((mywidth,hsize))
# img.save(f"/Users/josh/Github/site/static/blueyellow200.jpg")

# print(img.size[0])
# print(img.size[1])