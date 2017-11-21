/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '462eee0168014d178e3c9303d0b67ede'; // Your client id
var client_secret = '0b1daa19dd724200a09241e093273a7c'; // Your secret
var redirect_uri = 'http://localhost:8888/callback'; // Your redirect uri

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

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

var stateKey = 'spotify_auth_state';

var app = express();

app.use(express.static(__dirname + '/public'))
   .use(cookieParser());

app.get('/login', function(req, res) {

  var state = generateRandomString(16);
  res.cookie(stateKey, state);

  // your application requests authorization
  var scope = 'user-read-private user-read-email user-follow-read user-library-read playlist-read-private playlist-read-collaborative';
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      redirect_uri: redirect_uri,
      state: state
    }));
});

app.get('/callback', function(req, res) {

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null;
  var state = req.query.state || null;
  var storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/#' +
      querystring.stringify({
        error: 'state_mismatch'
      }));
  } else {
    res.clearCookie(stateKey);
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code'
      },
      headers: {
        'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
      },
      json: true
    };

    request.post(authOptions, function(error, response, body) {
      if (!error && response.statusCode === 200) {

        var access_token = body.access_token,
            refresh_token = body.refresh_token;
		spotifyApi.setAccessToken(access_token);

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: { 'Authorization': 'Bearer ' + access_token },
          json: true
        };

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body);
        });

		

		spotifyApi.setAccessToken(access_token);
		var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

		// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
		console.log(authorizeURL);

		//HERE GOES CODE FROM SPOTIFYTEST.JS

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
			console.log('User Info-RETRIEVED');
		  }, function(err) {
			console.log('Something went wrong!', err);
		  });
	  
	  	//user has songs
		  spotifyApi.getUserPlaylists('9clojj7uw5ss7h1x7uwl8k4fl', {limit:50})
		  .then(function(data) {
			fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
			if (err) {
				console.error(err);
				return;
			};
			console.log("File has been appended");
			});
			//console.log('Retrieved playlists', data.body);
		  },function(err) {
			console.log('Something went wrong!', err);
		  });
	  
	//User follows artists
		  spotifyApi.getFollowedArtists({limit:50})
		  .then(function(data) {
			sampleObject=data.body;
			fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
			if (err) {
				console.error(err);
				return;
			};
			console.log("File has been appended-FOLLOWED ARTISTS");
			console.log('\n \n ');
			
			if(typeof data.body=='object'){
				//console.log('yes');
				//console.log('artists ids: \n');
				var sampleObject = data.body;
				//var count=0;
				//console.log(data.body);
				sampleObject.artists.items.forEach(function(k){
					fs.appendFile("./artists.txt",k.name+'\n');
					//console.log(k.name+'\n');
					//count++;
					 // Get artists related to an artist
						spotifyApi.getArtistRelatedArtists(k.id)
						  .then(function(data) {
							var related = data.body;
							fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
							if (err) {
								console.error(err);
								return;
							};
							console.log("File has been appended, these are- RELATED ARTISTS");
							//console.log('\n count= '+count);
							});
							related.artists.forEach(function(i){
								fs.appendFile("./artists.txt",i.name+'\n');
								//console.log(i.name+'\n');
							});

							//console.log(data.body);
						  }, function(err) {
							console.log(err);
						  });
				});
			//console.log('\n count= '+count);
			}
			else{
				console.log('hell no');
			} 
				
			});
			//console.log('This user is following ', JSON.stringify(data.body.artists), ' artists!');
		  }, function(err) {
			console.log('Something went wrong!', err);
		  });
		
		//Next set of artists
		  spotifyApi.getFollowedArtists({limit:50, after:'4AVFqumd2ogHFlRbKIjp1t'})
		  .then(function(data) {
			sampleObject=data.body;
			fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
			if (err) {
				console.error(err);
				return;
			};
			console.log("File has been appended-NEXT SET OF FOLLOWED ARTISTS");
			console.log('\n \n ');
			
			/*setTimeout(function(){
				console.log('This user is following ', sampleObject.artists.cursors.after, ' artists!');
				console.log('\n \n ');
				}, 10000);*/
			
			if(typeof data.body=='object'){
				//console.log('yes');
				//console.log('artists ids: \n');
				var sampleObject = data.body;
				//var count=0;
				//console.log(data.body);
				sampleObject.artists.items.forEach(function(k){
					fs.appendFile("./artists.txt",k.name+'\n');
					//console.log(k.name+'\n');
					//count++;
					 // Get artists related to an artist
						spotifyApi.getArtistRelatedArtists(k.id)
						  .then(function(data) {
							var related = data.body;
							fs.appendFile("./object.json", JSON.stringify(data.body, null, '\t'), (err) => {
							if (err) {
								console.error(err);
								return;
							};
							console.log("File has been appended, these are-NEXT SET OF RELATED ARTISTS");
							//console.log('\n count= '+count);
							});
							related.artists.forEach(function(i){
								fs.appendFile("./artists.txt",i.name+'\n');
								//console.log(i.name+'\n');
							});
							//console.log(data.body);
						  }, function(err) {
							done(err);
						  });
				});
			//console.log('\n count= '+count);
			}
			else{
				console.log('hell no');
			} 
				
			});
			//console.log('This user is following ', JSON.stringify(data.body.artists), ' artists!');
		  }, function(err) {
			console.log('Something went wrong!', err);
		  });
			console.log('\n \n');
					
			
	// Get tracks in the signed in user's Your Music library
		spotifyApi.getMySavedTracks({limit : 50})
		  .then(function(data) {
			//console.log(data.body.items);
			fs.appendFile("./object.json", JSON.stringify(data.body.items, null, '\t'), (err) => {
							if (err) {
								console.error(err);
								return;
							};
							//console.log("File has been appended, these are users saved tracks");
							//console.log('\n count= '+count);
							});
			console.log('Done-TRACKS RETRIEVED!');
			console.log("Total number of tracks ", data.body.total, "\n\n\n");
		  }, function(err) {
			console.log('Something went wrong-tracks!', err);
		  });
		  console.log('\n \n');
		  

		 //to check if albums are getting retrieved-timeout
		 setTimeout(function(){ spotifyApi.getMySavedAlbums({limit : 50})
		  .then(function(data) {
			// Output items
			console.log(data.body.items);
							fs.appendFile("./object.json", JSON.stringify(data.body.items, null, '\t'), (err) => {
							if (err) {
								console.error(err);
								return;
							};
							console.log("File has been appended, these are users saved albums");
							//console.log('\n count= '+count);
							});
			console.log('Albums retrieved!');
		  }, function(err) {
			console.log('Something went wrong-albums!', err);
		  }); }, 3000);
	
		 setTimeout(function(){ console.log(access_token); }, 5000);  
       

	   // we can also pass the token to the browser to make requests from there
        res.redirect('/#' +
          querystring.stringify({
            access_token: access_token,
            refresh_token: refresh_token
          }));
      } else {
        res.redirect('/#' +
          querystring.stringify({
            error: 'invalid_token'
          }));
      }
    });
  }
});

app.get('/refresh_token', function(req, res) {

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token;
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token;
      res.send({
        'access_token': access_token
      });
    }
  });
});



console.log('Listening on 8888');
app.listen(8888);
