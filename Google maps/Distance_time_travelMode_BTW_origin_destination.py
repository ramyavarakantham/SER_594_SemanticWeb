import googlemaps
import json
from pprint import pprint

gmaps= googlemaps.Client(key='AIzaSyBfZkO9PTQMQNjL3q6ev05GElKhrz17ubc')

origins=33.424564,-111.928001
destinations=36.114647,-115.172813
modes=["driving", "walking", "transit", "bicycling"]	
for i in range (0,4):
	dis = gmaps.distance_matrix(origins, destinations, mode=modes[i])
	pprint (dis)
