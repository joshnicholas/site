# %%

from PIL import Image, ImageOps
import os 
import pandas as pd 

from sudulunu.helpers import dumper, pp 


# %%

pathos = 'static/'
out_path = 'static/'

pathos = '/Users/josh/Github/site/static/images/'
out_path = '/Users/josh/Github/site/python/image_archive/'

already_done = os.listdir(out_path)

include = ['.jpg', '.jpeg', 'png']

fillos = os.listdir(pathos)
fillos = [x for x in fillos if any(endo in x.lower() for endo in include)]

fillos = [x for x in fillos if x not in already_done]

# %%

# %%

# fillos = fillos[:1]

counter = 0

records = []

for fillo in fillos:


    counter += 1

    if counter % 50 == 0:
        print(f"Counter: {counter}")

    inter = f"{pathos}{fillo}"
    stats = os.stat(inter)

    im = Image.open(inter)

    ### Save a backup
    im.save(f'{out_path}{fillo}')
        
    # im = ImageOps.exif_transpose(im)

    if (stats.st_size / (1024 * 1024)) > 1:
        print(f"{fillo} MB:", (stats.st_size / (1024 * 1024)))       

        w, h = im.size
        print('width: ', w)
        print('height:', h)

        new_w = int(w/3)
        new_h = int(h/3)

        new_image = im.resize((new_w, new_h))

        w, h = new_image.size
        print('new width: ', w)
        print('new height:', h)

        new_image.save(f'{pathos}{fillo}')

        new_stats = os.stat(f'{pathos}{fillo}')
    
        record = {"Img_path": fillo, 'Width': new_image.width, "Height": new_image.height}

    else:

        record = {"Img_path": fillo, 'Width': im.width, "Height": im.height}

    records.append(record)

    old = pd.read_csv('/Users/josh/Github/site/python/scrap/image_sizes.csv')
    new = pd.DataFrame.from_records(records)
    
    frame = pd.concat([old, new])
    frame.drop_duplicates(subset=['Img_path'], inplace=True)
    # frame = pd.DataFrame.from_records(records)

    dumper('/Users/josh/Github/site/python/scrap', 'image_sizes', frame)





# %%
