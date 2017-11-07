import urllib.request

with open("artists.txt","r") as f:
    artistsList = f.read().splitlines()

print(artistsList)

url = "http://api.eventful.com/json/events/search?app_key=Tb4KWhVbXr4mK3Dp&keywords="

for i in range(0, len(artistsList)):

    artName = artistsList[i]
    nameWords = artistsList[i].split()
    if len(nameWords) == 1:
        url = url + "+"+artistsList[i]
        print(url)
    else:
        for j in range(0, len(nameWords)):
            url = url +"+"+ nameWords[j]
            print(url)
    page = urllib.request.urlopen(url)
    if i == 0:
        f = open("recordsByArtist.json", "w")
    else:
        f = open("recordsByArtist.json", "a")

    #charset = page.info().get_content_charset()
    content = page.read()
    #content1 = str(content, encoding='utf-8', errors='ignore')

    #content1 = content.decode(charset)

    #d1 = json.loads(content1)

    f.write(str(content))
    f.close()
