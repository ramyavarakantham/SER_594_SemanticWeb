import subprocess
from django.shortcuts import render
from django.http import HttpResponse
import json, urllib.request
import boto3, os, sys
from . import test1
import threading
import logging
from . import test
import re 
 
#import TwitterAPI
#I/O from bucket working. Syn: 1000/day, also get a bit of slang.
# To do
# Correct Struturing of requets
# Add blogs data (See the right amount)
# Endpoint: https://webhose.io/search?token=e5d324f4-0d51-4967-ae3a-f5793d08d721&format=json&q=Car&sort=relevancy&ts=1479562843476
# Create your views here.
# request url for synonyms:
# http://words.bighugelabs.com/api/2/b0fb9858774d31efe6ec7e4d30732c3d/word/json
def word_in_bucket(word = 'word1sample'):
    content = ''
    with open('/tmp/dict.txt', 'r') as content_file:
        content = content_file.read()

    json_content = json.loads(content)
    if word in json_content: 
        return True, json_content
    else:
        return False, json_content


def upload_file(s3,bucket_name, file_path):
  #  s3 = boto3.resource('s3') 
    data = open(str(file_path), 'rb')
    s3.Bucket(str(bucket_name)).put_object(Key='dict.txt', Body=data)
    print("upload successful")

def get_blogs_data(syn, word_present, mode = 0):
    if mode ==1:
        with open('/tmp/allDataBlogs.txt', 'r') as allDataBlogs: 
            data =  allDataBlogs.read()
        with open('/tmp/out.txt', 'a') as myfile: 
            myfile.write(data)
        return 

    print('searching for :' + str(syn))
    reqUrl = 'https://webhose.io/search?token=e5d324f4-0d51-4967-ae3a-f5793d08d721&format=json&q='+str(syn)+'&sort=relevancy'
    for i in range(5):
        with urllib.request.urlopen(reqUrl) as url:
            s = url.read()
        s1 = s.decode("utf-8")
      
        d1 = json.loads(s1)
        posts = d1['posts']
        text = ''
        for p in posts:
            text = p['text']
        # updating the url
        reqUrl = 'https://webhose.io' + str(d1['next'])
#        for k1, v1 in d1.items():
            
        with open('/tmp/out.txt', 'a') as myfile, open('/tmp/allDataBlogs.txt','a') as allDataBlogs:
#            json.dump(s1, myfile)
   
            myfile.write(text)
            if not word_present:
                allDataBlogs.write(text) 

   
def get_blogs_data2(syn, word_present, mode = 0, c= test1.Counter()):
    if mode ==1:
        with open('/tmp/allDataBlogs.txt', 'r') as allDataBlogs: 
            data =  allDataBlogs.read()
        with open('/tmp/out.txt', 'a') as myfile: 
            myfile.write(data)
        return 

    print('searching for :' + str(syn))
    reqUrl = 'https://webhose.io/search?token=e5d324f4-0d51-4967-ae3a-f5793d08d721&format=json&q='+str(syn)+'&sort=relevancy'
    for i in range(5):
        with urllib.request.urlopen(reqUrl) as url:
            s = url.read()
        s1 = s.decode("utf-8")
      
        d1 = json.loads(s1)
        posts = d1['posts']
        text = ''
        for p in posts:
            text += p['text']
        # updating the url
        reqUrl = 'https://webhose.io' + str(d1['next'])
#        for k1, v1 in d1.items():
        c.updateValue(text)    
#        with  open('/tmp/allDataBlogs.txt','a') as allDataBlogs:
#            json.dump(s1, myfile)
   
          #  myfile.write(text)
 #           if not word_present:
  #              allDataBlogs.write(text)    

           
def index(request):
   # REMOVE THIS @SP
   # os.remove('/tmp/out.txt')
    o1 = subprocess.check_output(['rm','-rf', '/tmp/out.txt'])
    word = request.GET.get('word','')      
    fn = request.GET.get('fn','2')
    # First search in S3
    s3 = boto3.resource('s3')
    for bucket in s3.buckets.all():
        print(bucket.name)    
    bucket = s3.Bucket('cloudrankbucket1')
    print("All the data in cloudrank")
    for key in bucket.objects.all():
        print(key.key)
    obj = s3.Object('cloudrankbucket1','dict.txt')
    obj.download_file('/tmp/dict.txt')
    word_present, json_content = word_in_bucket(word)
    if not word_present :
        # word not in the dictionary
        print("Not in Bucket")    
        # delete
        obj.delete()
        # get the data from syn API
        reqUrl='http://words.bighugelabs.com/api/2/b0fb9858774d31efe6ec7e4d30732c3d/' + str(word) +'/json'
        with urllib.request.urlopen(reqUrl) as url, open('/tmp/dict.txt', 'a') as myfile:
            s = url.read()
            
        s1 = s.decode("utf-8")
        d1  = json.loads(s1)
        syn_list = []
        # We wil pick the first type of synonym and get only syns not similars
        for k, v in d1.items():
            print('key: ' + str(k) + ' value:' + str(v))
            print('Type of Key: ' + str(type(k)) + ' Type of Value:' + str(type(v)))
            syn_list.extend(v['syn'])
            print(syn_list)
            print(type(v['syn']))
            break    
        # At this stage we have all the syn data
        print('type of data from file:' + str(type(json_content)))
        json_content[word] = syn_list
        print(json_content)
        with open('/tmp/dict.txt', 'w') as myfile:
            json.dump(json_content, myfile)
        
        #use obj method instead      
        #upload again
        upload_file(s3,'cloudrankbucket1','/tmp/dict.txt')
    #outside if, now json_content defenitely has the key
    syn_list = json_content[word]
    if word not in syn_list:
        syn_list.append(word)
    print('final syn list:\n'+ str(syn_list))
    # outputting the patterns to patt.txt
    thefile = open('/tmp/patt.txt', 'w')
    for it in syn_list:
        thefile.write("%s\n" % it)
    thefile.close()
    # call the right function based on fn parameter
    fn = int(fn)
    apiName = 'News'
# Calling signature will change to make it multithreaded
    counter = test1.Counter()
    thread_list = []
    for syn in syn_list:
        if fn == 0:
            apiName = 'Blogs'
            print('blogs called for word: ' + str(syn))
            # ideally, we can make this stream parallel and let multiple threads output to the same file
       #     get_blogs_data(syn, word_present, 1)
            t = threading.Thread(target = get_blogs_data2, args=(syn, word_present, 0, counter))
            
            thread_list.append(t)
            t.start()
       #     t.join()
            # change position of t.join to make it faster
       #     get_blogs_data2(syn, word_present, 0)
        elif fn == 1:
            apiName = 'Twitter'
            print('twitter called for word: ' + str(syn))
            # Call Your function here @Ramya
            t = threading.Thread(target = test.twittercount, args=(syn, counter,))
          #  thread_list.append(t)
            t.start()
            t.join()
        elif fn == 2:
            apiName = 'News'
            print('news called for word: ' + str(syn))
            # Call Your function here @Dhairya
            t = threading.Thread(target = test1.worker, args=(counter, syn,))
        #    thread_list.append(t)
            t.start()
            t.join()
    fn += 1
    # Call the hadoop cluster to compute the counts
    # Create a response string including fn
    # Delete all the data before exiting. Even the dict file
    print(thread_list)
    if fn == 1:
        for tl in thread_list:
            tl.join()
   # main_thread = threading.currentThread()
    print('Back in Main')
    # Call Memory clean up first
    commands1 = [['ls','-la','/home/ubuntu/hadoopShared']]
    commands = [['hadoop','fs','-ls','.'],['hadoop', 'fs', '-rm', '-r', './inp'], ['hadoop', 'fs', '-rm', '-r', './out'], ['hadoop', 'fs','-mkdir', './inp'], ['hadoop', 'fs', '-put', '/tmp/out.txt','./inp'],['hadoop', 'fs', '-ls', './inp'],['hadoop', 'jar','/home/ubuntu/hadoopShared/WCpattern.jar','WCpattern','./inp','./out','-Xmx5m','-Xms2m','-Xss128k', '-skip', './patterns.txt'],['hadoop','fs','-cat','./out/part-r-00000']]
    hadoopCounts = ''
    for c in commands[1:]:
        output = subprocess.check_output(c, stderr=subprocess.STDOUT)
        hadoopCounts = output.decode('utf-8')
        print(hadoopCounts)
    lines  = hadoopCounts.split('\n')
    dictFinal = {}
    for l in lines:
        print(l)
        if not l:
            continue 
        w1 = l.split('\t')[0]
        word = "".join(re.findall("[a-zA-Z]+",w1)) 
        word = word.lower()
        if word not in syn_list:
            continue
        count = int(l.split('\t')[1])
        dictFinal[word] = dictFinal.get(word, 0) + count
    print(dictFinal)
    finalOutput = {}
    finalOutput[apiName] = dictFinal
    finalOutput['fn'] = fn
    print(json.dumps(finalOutput))
 #  for t in threading.enumerate():
 #       if t is not main_thread:
#            t.join()
    os.remove('/tmp/dict.txt')
#    os.remove('/tmp/out.txt')
    return HttpResponse(json.dumps(finalOutput))
# TO DO: test hadoop. Test all function. Document code
