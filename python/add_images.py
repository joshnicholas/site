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


from sudulunu.helpers import pp, dumper

# %%

old = pd.read_csv('scrap/bsky_scribbles.csv')
['Date', 'Title', 'Uri', 'img_alt', 'img_path', 
 'Caption', 'Colours', 'Style', 'Subject', 'Keywords', 'Images']

pp(old)

# %%
