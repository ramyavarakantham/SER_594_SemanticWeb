import json, urllib.request
from pymongo import MongoClient

#get the artist list from SPOTIFY app
with open("artists_list_spotify.txt","r") as f:
    artistsList = f.read().splitlines()
#print(artistsList)
client = MongoClient()
db = client.test

url = "https://app.ticketmaster.eu/mfxapi/v1/attractions?apikey=NMEBsheK4L4YZ3klx7m50evZnbAtdSoi&attraction_name="

for i in range(0, len(artistsList)):
    artName = artistsList[i]
    print(artName) 
    if ' ' in list(artName):
        nameWords = artName.split(' ')
        url = url + nameWords[0] 
        for j in range(1, len(nameWords)):
            url = url + "+" + nameWords[j]
            print(url)
    else:
        url = url + artName
        print(url) 
    page = urllib.request.urlopen(url)
    content = page.read()
    #print("The content from the URL is:", content)
    decoded_content = content.decode("utf-8")
    json_data = json.loads(decoded_content)
    #print("The decoded content is: ", decoded_content)
    print("the JSON data is: ", json_data)    
    result = db.ticketmaster.insert_one(json_data)
    print("---------------------------------------------------------------")
    url = "https://app.ticketmaster.eu/mfxapi/v1/attractions?apikey=NMEBsheK4L4YZ3klx7m50evZnbAtdSoi&attraction_name="

'''
#--------- data retriebing from mongodb-------
print("The data retrieved from Mongodb ")
all_data = db.ticketmaster.find()

for data in all_data:
    print(data)
    print("\n")
'''