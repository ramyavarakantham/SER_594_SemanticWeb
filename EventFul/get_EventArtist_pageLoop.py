from urllib.request import Request, urlopen
import json

with open("artists.txt","r") as f:
    artistsList = f.read().splitlines()

#print(artistsList)

url = "http://api.eventful.com/json/events/search?app_key=Tb4KWhVbXr4mK3Dp&keywords="

for i in range(0, len(artistsList)):
    url = "http://api.eventful.com/json/events/search?app_key=Tb4KWhVbXr4mK3Dp&keywords="
    print("Line 1:"+artistsList[i])
    artName = artistsList[i]
    nameWords = artistsList[i].split()
    if len(nameWords) == 1:
        url = url + "+"+artistsList[i]
        print(url)
    else:
        for j in range(0, len(nameWords)):
            url = url +"+"+ nameWords[j]
            print(url)
    page = urlopen(url)

    addresses = open("addresses.txt","a")
    if i == 0:
        f = open("recordsByArtistNew1.json", "w")
    else:
        f = open("recordsByArtistNew1.json", "a")

        req = Request('http://api.eventful.com/json/events/search?app_key=Tb4KWhVbXr4mK3Dp&keywords=32',
                      headers={'User-Agent': 'Mozilla/5.0'})
    content = page.read().decode();
    #content1 = str(content, encoding='utf-8', errors='ignore')

    #content1 = content.decode('utf-8','replace')
    d1 = json.loads(content)
    NoOfRecs = int(d1["total_items"])
    print("Number of records = "+str(NoOfRecs/10))

    for j in range(1, int(NoOfRecs/10)+2):
        urlPage = url+"&page_number="+str(j)
        print(urlPage)
        page = urlopen(urlPage)
        content = json.loads(page.read().decode())
        if NoOfRecs/10 > 0.0:
            events = content["events"]["event"]
            for i in range(0, len(events)):
                id = events[i]["id"]
                venue = events[i]["venue_address"]
                lat = events[i]["latitude"]
                long = events[i]["longitude"]
                toWrite="\n"+str(id)+","+str(venue)+","+str(lat)+","+str(long)
                addresses.write(toWrite)
        #json.dump(content, f)
    f.close()


