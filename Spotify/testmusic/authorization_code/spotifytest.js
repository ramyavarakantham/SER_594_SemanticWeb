var SpotifyWebApi = require('spotify-web-api-node');
var scopes = ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read', 'user-library-read'],
    redirectUri = 'https://example.com/callback',
    clientId = '462eee0168014d178e3c9303d0b67ede',
	clientSecret = '0b1daa19dd724200a09241e093273a7c',
    state = 'some-state-of-my-choice';

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri : redirectUri,
  clientId : clientId,
  clientSecret : clientSecret
});

spotifyApi.setAccessToken('BQAEMG26om0TSQ6XnPFfqWNM-E3KfrEwsBZnEk4O-xaeEU2MqowA_5yjb9OYthNUUE4g9I7oJ7_aWgAeBg3ol0NsAwh8AbisjaEHPvQFLJOm9n9FxBg9zQjEGxxE_Uu0v2FIlg8uJrBnhGvh5gJnLR09OwpgxTkCPZui1iBohxetVF36CLRJ2N7u5CPhXROgva-QFxjpDYKgOw');
// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
//console.log(authorizeURL);

var fs = require('fs');
 
var sampleObject;



//User follows artists

	var count=0;

	

  spotifyApi.getFollowedArtists({limit:50}).then(function(data) {

	sampleObject=data.body;

	fs.appendFile("./artists.json", JSON.stringify(data.body, null, '\t'), (err) => {
	if (err) {
		console.error(err);
		return;
	};
	console.log("File has been appended");
	console.log('\n \n ');
	
	getRelated(data.body);
		
	});
	console.log('\n\n This is next \n');
	count =Math.round(sampleObject.artists.total / 50);//2
	x=sampleObject.artists.cursors.after;
	console.log(x);		
	console.log(count);
  }, function(err) {
    console.log('Something went wrong!', err);
  });

  
  function getRelated(d){
	  
	if(typeof d=='object'){
		console.log('yes');
		console.log('artists ids: \n');
		var sampleObject = d;
		//var count=0;
		//console.log(data.body);
		sampleObject.artists.items.forEach(function(k){
			console.log(k.id+'\n');
			//count++;
			 // Get artists related to an artist
				spotifyApi.getArtistRelatedArtists(k.id)
				  .then(function(data) {
					fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
					if (err) {
						console.error(err);
						return;
					};
					console.log("File has been appended, these are realted artists");
					});
					console.log(data.body);
				  }, function(err) {
					done(err);
				  });
		});
		//console.log('\n count= '+count);
	}
	else{
		console.log('hell no');
	}
  }




  
 /* 	sampleObject.artists.forEach(function(k){
    console.log(k.id+'\n');
});
  */
  