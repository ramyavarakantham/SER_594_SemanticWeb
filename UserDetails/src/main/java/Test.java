import java.io.IOException;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.common.util.concurrent.FutureCallback;
import com.google.common.util.concurrent.Futures;
import com.google.common.util.concurrent.SettableFuture;
import com.google.maps.DistanceMatrixApi;
import com.google.maps.DistanceMatrixApiRequest;
import com.google.maps.GeoApiContext;
import com.wrapper.spotify.Api;
import com.wrapper.spotify.models.AuthorizationCodeCredentials;

/*
 *  var client_id = '462eee0168014d178e3c9303d0b67ede'; // Your client id
var client_secret = '0b1daa19dd724200a09241e093273a7c'; // Your secret
var redirect_uri = 'http://localhost:8080/callback'; // Your redirect uri
 */

@RestController
@EnableAutoConfiguration
public class Test{
	
	

	final String clientId = "6cc9366e633f4f0ebb7c7f764ab5e897";
	final String clientSecret = "598dd0757d0347f18eb02eac52711398";
	final String redirectURI = "http://localhost:8080/callback";
	
	 String accessToken = null;

	final Api api = Api.builder()
	  .clientId(clientId)
	  .clientSecret(clientSecret)
	  .redirectURI(redirectURI)
	  .build();
	final GeoApiContext context = new GeoApiContext.Builder()
		    .apiKey("AIzaSyCR8NIwX38UOHk5unZH_yErmmJQ7n_V4iA")
		    .build();

    @RequestMapping(value = "/callback", method=RequestMethod.GET)
    ResponseEntity<Response> test(@RequestParam String code, HttpServletResponse response) throws IOException {
    	final String code_val = code;
    	final Response r = new Response();

    	final SettableFuture<AuthorizationCodeCredentials> authorizationCodeCredentialsFuture = api.authorizationCodeGrant(code_val).build().getAsync();

  
    	Futures.addCallback(authorizationCodeCredentialsFuture, new FutureCallback<AuthorizationCodeCredentials>() {
    	  
    	  public void onSuccess(AuthorizationCodeCredentials authorizationCodeCredentials) {
    
    	
    	  
    	    /* Set the access token and refresh token so that they are used whenever needed */
    	    api.setAccessToken(authorizationCodeCredentials.getAccessToken());
    	    api.setRefreshToken(authorizationCodeCredentials.getRefreshToken());
    	    r.setValue(authorizationCodeCredentials.getAccessToken());
    	    accessToken = authorizationCodeCredentials.getAccessToken();
    	   //getDeatilsHelper();
    	  }

    	 
    	  public void onFailure(Throwable throwable) {
    	    /* Let's say that the client id is invalid, or the code has been used more than once,
    	     * the request will fail. Why it fails is written in the throwable's message. */

    	  }
    	});
    	
    	HttpHeaders res = new HttpHeaders();
    	response.sendRedirect("http://localhost:8080/TEST/callback.html");
    	
    	return new ResponseEntity<Response>(r , res, HttpStatus.OK);
    }
    
    


    
    
    @RequestMapping(value = "/home", method=RequestMethod.GET, produces="application/json")
    ResponseEntity<Response> home() {
    	
    	

    	/* Set the necessary scopes that the application will need from the user */
    	final List<String> scopes = Arrays.asList("user-read-private", "user-read-email", "playlist-read-private", "playlist-read-collaborative", "user-follow-read", "user-library-read");

    	/* Set a state. This is used to prevent cross site request forgeries. */
    	final String state = "someExpectedStateString";

    	String authorizeURL = api.createAuthorizeURL(scopes, state);
    	
    	//System.out.println(authorizeURL);
    	
    	Response r =  new Response();
    	r.setValue(authorizeURL);
    	
    	HttpHeaders res = new HttpHeaders();
    	
    	return new ResponseEntity<Response>(r , res, HttpStatus.OK);
    	
    	
        
    }
    
    
    @RequestMapping(value = "/details", method=RequestMethod.GET, produces="application/json")
    ResponseEntity<Response> getUserFollowers() throws Exception {
    	
    	if(accessToken == null)
    		throw new Exception();

    	
    	
    	Response r =  new Response();
    	r.setValue(accessToken);
    	
    	HttpHeaders res = new HttpHeaders();
    	
    	return new ResponseEntity<Response>(r , res, HttpStatus.OK);
    	
    	
        
    }
    
    
    
    /*** This is  where the final answer is***/
    
    @RequestMapping(value = "/lat/{latitude}/lon/{longitude}", method=RequestMethod.POST, produces="application/json")
    ResponseEntity<Response> getFinalResult(@PathVariable String latitude, @PathVariable String longitude, 
    		@RequestBody List<String> artists ) throws Exception {
    	
    	System.out.println(latitude+" "+longitude+" "+artists.get(0));//here you have user's location and artist names
    	
    	/*
    	 * Include fuseki code to get event details based on artist. Push event details into array and send it to front-end
    	 */
    	
    	Response r =  new Response();
    	r.setValue(accessToken);//send event array
    	
    	HttpHeaders res = new HttpHeaders();
    	
    	return new ResponseEntity<Response>(r , res, HttpStatus.OK);
    	
    	
        
    }
    
    public static void main(String[] args) throws Exception {
       SpringApplication.run(Test.class, args);
    	

}
}