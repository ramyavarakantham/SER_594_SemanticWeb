# -*- coding: utf-8 -*-
"""
Created on Sat Nov 18 19:42:34 2017

@author: khyati
"""
#--- Om ---
import json, urllib.request
import csv

apikey = "NMEBsheK4L4YZ3klx7m50evZnbAtdSoi"

url = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + apikey
USTempe_url = "&countryCode=US&latitude=33.4255&longitude=111.9400"

csv_file = open("CSV_file.csv", 'w')
csv_outfile = csv.writer(csv_file, delimiter=',', lineterminator='\n')

for k in range(1,500):
    
    page_url = '&page='+ str(k)
    url_addpage = url + USTempe_url + page_url
    
    print(url_addpage)
    
    page = urllib.request.urlopen(url_addpage)
    
    content = page.read()
    decoded_content = content.decode("utf-8")
    
    json_data = json.loads(decoded_content)
    json_pretty_data = json.dumps(json_data,sort_keys=True, indent=4)
    
    event_ids = []
    for k in range(0,20):
        #print(json_data["_embedded"]["events"][k]["id"])
        event_ids.append(json_data["_embedded"]["events"][k]["id"]) 
    
    for eid in event_ids:
        event_url = "https://app.ticketmaster.com/discovery/v2/events/" + str(eid) + ".json?apikey=" + apikey
        event_page = urllib.request.urlopen(event_url)
        event_content = event_page.read()
        
        decoded_event_content = event_content.decode("utf-8")
        json_event_data = json.loads(decoded_event_content)
        
        try:  
           
            venue_latitude = json_event_data["_embedded"]["venues"][0]["location"]["latitude"]
            venue_longitude = json_event_data["_embedded"]["venues"][0]["location"]["longitude"]
            csv_outfile.writerow([ venue_latitude, venue_longitude ])
        #csv_file.write("\n")
        except KeyError:
            print("Key is not found in the event related info")
        
csv_file.close()
    
    

#

    #print(type(json_data))
#    filename = "Location_based_json_pretty_page" + str(k) +".json"
#    outfile = open(filename, 'w')
#    outfile.write(json_pretty_data)
#    outfile.close()
#    
#    event_ids = []
#    #get the event IDs from the JSON data
#    with open(filename, 'r') as data_file:
#        try:
#            data= json.load(data_file)
#            for k in range(0,20):
#                print(data["_embedded"]["events"][k]["id"])
#                event_ids.append(data["_embedded"]["events"][k]["id"])
#        except ValueError:
#            print("PARSING Error - data was not a valid JSON")
#            
#    #get the columns based on all event ids       
#     

#json_event_pretty_data = json.dumps(json_event_data,sort_keys=True, indent=4)
#        
#        
#        event_filename = "Event_" + str(eid) +"_Details.json"
#        eventDfile = open(event_filename, 'w')
#        eventDfile.write(json_event_pretty_data)
#        eventDfile.close()
#        
#        with open(event_filename, 'r') as data_file:
#            try:
#                data= json.load(data_file)
#                event_name = data["name"]
#               # print(type(event_name))
#                csv_outfile.write(event_name)
#                csv_outfile.write("\n")
#                
#            except ValueError:
#                print("PARSING Error - data was not a valid JSON")
            

