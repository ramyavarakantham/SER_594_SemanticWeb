import json
from pprint import pprint
with open('C://Users//Meghana//SER_594_SemanticWeb//1page_ticketmaster_JSON.json') as data_file:
	try:
		data=json.load(data_file) #data is a dictionarys
		item = data["_embedded"]
		print(type(item) is dict)
		fwrite=open("LatLng_1page_ticketmaster.","w+")
		for i in range(0,len(item["events"])):
			for j in range(0,len(item["events"][i]["_embedded"]["venue"])):
				print(item["events"][i]["_embedded"]["venue"][j]["location"])
				fwrite.write(json.dumps(item["events"][i]["_embedded"]["venue"][j]["location"], sort_keys=True, indent=4))
	except ValueError:
		print("data was not valid JSON")
fwrite.close()


