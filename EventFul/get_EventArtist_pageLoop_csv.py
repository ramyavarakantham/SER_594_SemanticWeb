from urllib.request import Request, urlopen
import json
import csv

with open("artists.txt","r") as f:
    artistsList = f.read().splitlines()

#print(artistsList)

url = "http://api.eventful.com/json/events/search?app_key=Tb4KWhVbXr4mK3Dp&keywords="

for i in range(0, len(artistsList)):
    try:
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

        eventfulCSV = open("eventful.csv","a")
        csv_outfile = csv.writer(eventfulCSV, delimiter=',', lineterminator='\n')
        if i == 0:
            f = open("recordsByArtist_ev.json", "w")
        else:
            f = open("recordsByArtist_ev.json", "a")

            req = Request(url,
                          headers={'User-Agent': 'Mozilla/5.0'})
        content = page.read().decode()
        #content1 = str(content, encoding='utf-8', errors='ignore')

        #content1 = content.decode('utf-8','replace')

        d1 = json.loads(content)
        NoOfRecs = int(d1["total_items"])

        print("Number of records = "+str(NoOfRecs/10))

        for j in range(1, int(NoOfRecs/10)+2):
            try:
                urlPage = url+"&page_number="+str(j)
                print(urlPage)
                page = urlopen(urlPage)
                content = json.loads(page.read().decode())
                if NoOfRecs/10 > 0.0:
                    events = content["events"]["event"]
                    for i in range(0, len(events)):
                        try:
                            id = events[i]["title"]
                        except:

                            id = "Not Populated"
                        try:
                            eventurl = events[i]["url"]
                        except:

                            eventurl = "Not Populated"
                        try:
                            address = events[i]["venue_address"]
                        except :

                            address = "Not Populated"
                        try:
                            venueurl = events[i]["venue_url"]
                        except :

                            venueurl = "Not Populated"
                        try:
                            city = events[i]["city_name"]
                        except :

                            city = "Not Populated"
                        try:
                            state = events[i]["region_name"]
                        except :

                            state = "Not Populated"
                        try:
                            country = events[i]["country_name"]
                        except :

                            country = "Not Populated"
                        try:
                            postalcode = events[i]["postal_code"]
                        except :

                            postalcode = "Not Populated"
                        try:
                            starttime = events[i]["start_time"]
                        except :

                            starttime = "Not Populated"
                        try:
                            imageurl = events[i]["image"]["url"]
                        except :

                            imageurl = "Not Populated"
                        try:
                            lat = events[i]["latitude"]
                        except :

                            lat = "Not Populated"
                        try:
                            long = events[i]["longitude"]
                        except :

                            long = "Not Populated"
                        try:
                            artist = events[i]["performers"]["performer"]["name"]
                        except:

                            artist = "Not Populated"
                        try:
                            description = events[i]["description"]
                        except :

                            description = "Not Populated"

                        try:
                            toWrite = [id,eventurl,address,venueurl,city,state,country,postalcode,starttime,imageurl,lat,long,artist,description]
                            csv_outfile.writerow(toWrite)
                        except:
                            print("Skipped row !!!")
                json.dump(content, f)
                if(j > 1000):
                    break
            except:
                print("API call failed !!")

        f.close()
    except:
        print("Skipping Artist "+artistsList[i])



