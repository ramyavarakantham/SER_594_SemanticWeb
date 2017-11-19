var SpotifyWebApi = require('spotify-web-api-node');
var scopes = ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-read-collaborative', 'user-follow-read', 'user-library-read'],
    redirectUri = 'https://example.com/callback',
    clientId = '462eee0168014d178e3c9303d0b67ede',
	clientSecret = '0b1daa19dd724200a09241e093273a7c',
    state = 'some-state-of-my-choice';

	
var Spotify = require('spotify-web-api-js');
var s = new Spotify();
var sapi = new SpotifyWebApi();
// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri : redirectUri,
  clientId : clientId,
  clientSecret : clientSecret
});

sapi.setAccessToken('BQBC3zc1qsHOhKzysOBGcuhp4aAqoyK9kkUlbiSib25_EmhqAuaJK7q9pLdvk_1Hg_A9XyTqQQtaJPE3UAS6u2AI6Ohrmi27cDjmWeq7hC2DrINMKTxXt6j6rECDAq0kIZ89l_QJltk6gChioBIAFJIQPN2sVtzYxm_Y7qSPGkn8_HCZGjF6XPQVX7mzxjI');

spotifyApi.setAccessToken('BQBC3zc1qsHOhKzysOBGcuhp4aAqoyK9kkUlbiSib25_EmhqAuaJK7q9pLdvk_1Hg_A9XyTqQQtaJPE3UAS6u2AI6Ohrmi27cDjmWeq7hC2DrINMKTxXt6j6rECDAq0kIZ89l_QJltk6gChioBIAFJIQPN2sVtzYxm_Y7qSPGkn8_HCZGjF6XPQVX7mzxjI');
// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

console.log('\n \n');
// Get tracks in the signed in user's Your Music library
spotifyApi.getMySavedTracks({
    limit : 2,
    offset: 1
  })
  .then(function(data) {
    console.log('Done!');
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  console.log('\n \n');
  /*
  // Get albums in the signed in user's Your Music library
  spotifyApi.getMySavedAlbums({limit : 50})
  .then(function(data) {
    // Output items
    console.log(data.body.items);
  }, function(err) {
    console.log('Something went wrong!', err);
  });
  
  //to check if albums are getting retrieved-timeout
  setTimeout(function(){ spotifyApi.getMySavedAlbums({limit : 50})
  .then(function(data) {
    // Output items
    console.log(data.body.items);
  }, function(err) {
    console.log('Something went wrong!', err);
  }); }, 3000);*/
 
  