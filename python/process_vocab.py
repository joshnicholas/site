# %%
import os
import pandas as pd
import requests
import pathlib

# Set up the working directory
pathos = pathlib.Path(__file__).parent
os.chdir(pathos)

print(os.getcwd())
# %%

# Google Sheet published as CSV
url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ1IDDNfQSUuEeRbo8uYF83OzmZEtDxULq09D0-XE-LwJd_LCgA11szfveFVLn7PqKtiPPLba7-VGwD/pub?gid=0&single=true&output=csv"


response = requests.get(url)

if response.status_code == 200:

    
    # Save the raw CSV
    with open("scrap/data/vocab_data.csv", "wb") as f:
        f.write(response.content)
    
    df = pd.read_csv("scrap/data/vocab_data.csv")
    
    with open('/Users/josh/Github/site/src/lib/data/sinhalavocab.json', 'w') as f:
        df.to_json(f, orient='records')
    
else:
    print(f"Failed to fetch data: {response.status_code}")
    print(response.text)




# %%