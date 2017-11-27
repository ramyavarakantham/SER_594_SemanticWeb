# -*- coding: utf-8 -*-
"""
Created on Sat Nov 18 19:42:34 2017
@author: khyati
"""
#--- Om ---
import json, urllib.request
import googlemaps
import csv


csv_outfile = open("CSV_file.csv", 'w')
csv_file = csv.writer(csv_outfile)
csv_file.writerow([ "Distance", "Duration", "Travel mode"])


gmaps= googlemaps.Client(key='AIzaSyBfZkO9PTQMQNjL3q6ev05GElKhrz17ubc')
f = open('longi.txt')
fwrite=open("trail_csv_out.csv","w+")
origins=33.4484,-112.0740
modes=["driving", "walking", "transit", "bicycling"]    
for line in iter(f):
    for i in range (0,4):
        dis = gmaps.distance_matrix(origins, destinations=line, mode=modes[i])
        json_data = dis
        print(type(json_data))

        try:
            Distance = json_data["rows"][0]["elements"][0]["distance"]["text"]
            print(Distance)
            Duration = json_data["rows"][0]["elements"][0]["duration"]["text"]
            print(Duration)
            Mode = modes[i]
            csv_file.writerow([ Distance, Duration, Mode ])
        except KeyError:
            print("Key not found in the data")
csv_outfile.close()
