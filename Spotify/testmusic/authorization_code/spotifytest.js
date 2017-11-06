var SpotifyWebApi = require('spotify-web-api-node');
var scopes = ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read'],
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

spotifyApi.setAccessToken('BQDKz1NMX9PlZI0CsC-KLOFT2lAM7tel1RpWNPGoGm89iy5IA9iKxyd0C1yMorpEyyJ732UXG2nurInYPPeKumzvuN7OPFbp9S4SCwGnTbD449yRGPxKwa8xVIr1kStJR6t2GYZlMEhbDAgWJSpwdv-2D_qd4rhJ1wxa4Lj4ceEtNYc4WInqXiFTRf_kw9U');
// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);

var fs = require('fs');

// Get a user
spotifyApi.getUser('9clojj7uw5ss7h1x7uwl8k4fl')
  .then(function(data) {
	fs.writeFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
		if (err) {
			console.error(err);
			return;
		};
		console.log("File has been created");
	});
    console.log('Some information about this user', data.body);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  
  //user has songs
  spotifyApi.getUserPlaylists('9clojj7uw5ss7h1x7uwl8k4fl')
  .then(function(data) {
	fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
	if (err) {
		console.error(err);
		return;
	};
	console.log("File has been appended");
	});
    console.log('Retrieved playlists', data.body);
  },function(err) {
    console.log('Something went wrong!', err);
  });
//User follows artists
  spotifyApi.getFollowedArtists({limit:50})
  .then(function(data) {
    // 'This user is following 1051 artists!
	fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
	if (err) {
		console.error(err);
		return;
	};
	console.log("File has been appended");
	console.log('\n \n ');
	
	if(typeof data.body=='object'){
		console.log('yes');
		console.log('artists ids: \n');
		var sampleObject = data.body;
		//console.log(data.body);
		sampleObject.artists.items.forEach(function(k){
			console.log(k.id+'\n');
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
		console.log('\n');
	}
	else{
		console.log('hell no');
	}
		
	});
    console.log('This user is following ', JSON.stringify(data.body.artists), ' artists!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  
