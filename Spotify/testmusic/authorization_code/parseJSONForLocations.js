var fs = require('fs');

 console.log("\n *STARTING* \n");
// Get content from file
 var contents = fs.readFileSync("Location_based_json_pretty.json");

// Get Value from JSON
 if(typeof contents=='object')
 {
	 console.log("parsed");
	 console.log(contents._embedded.events._embedded.venue.id);
 }