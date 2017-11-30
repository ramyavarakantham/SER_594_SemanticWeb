import java.io.BufferedWriter;
import java.io.ByteArrayOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import org.json.*;

import org.apache.jena.query.Query;
import org.apache.jena.query.QueryExecution;
import org.apache.jena.query.QueryExecutionFactory;
import org.apache.jena.query.QueryFactory;
import org.apache.jena.query.ResultSet;
import org.apache.jena.query.ResultSetFormatter;
import org.apache.jena.sparql.resultset.ResultsFormat;

public class loadRDF {

static String serviceEndPoint = "http://localhost:3030/evenetds/query";
	
	
	public static void main(String[] args) { 
		loadRDF lo = new loadRDF();
		lo.loadeventFulClasses(serviceEndPoint);
	}
	public void loadeventFulClasses(String serviceURI){
		
		ArrayList<String> artists=new ArrayList<String>();
		artists.add("Fifth Harmony");
		artists.add("Ed Sheeran");
		artists.add("U2");
		artists.add("Taylor Swift");
		artists.add("The Chainsmokers");
		artists.add("Demi Lovato");
		artists.add("Kesha");
		artists.add("Halsey");
		artists.add("Charlie Puth");
		artists.add("Chris Brown");
		
		String al = "";
		int i=0;
		for(i=0; i<artists.size()-1;i++)
		{
			al = al+" ?eventArtist = \""+artists.get(i)+"\" || ";
			
		}
		al = al+" ?eventArtist = \""+artists.get(i)+"\" ";
		System.out.println("Atrist List : "+al+" ");
		
		String query="prefix events:<http://www.semanticweb.org/meghana/ontologies/2017/9/untitled-ontology-21#> "
    	   		+ "select distinct ?EventName ?eventurl ?address ?eventArtist ?datetime ?lat ?long ?city ?state ?country ?postalcode"
       		+ "where { "
       		+ "OPTIONAL {?Event events:name ?EventName .} "
       		+ "OPTIONAL {?Event events:eventurl ?eventurl .} "
       		+ "OPTIONAL {?Event events:address ?address .} "
       		+ "?Event events:eventArtist ?eventArtist . "
       		+ "OPTIONAL {?Event events:Date ?datetime .} "
       		+ "?Event events:eventArtist ?eventArtist . "
       		+ "?Event events:Latitude ?lat . "
       		+ "?Event events:Longitude ?long . "
       		+ "OPTIONAL {?Event events:city ?city .}"
       		+ "OPTIONAL {?Event events:state ?state . }"
       		+ "OPTIONAL {?Event events:country ?long . }"
       		+ "OPTIONAL {?Event events:postalcode ?postalcode . }"
       		//+ "?Event events:imageURL ?imageurl ."
       		//+ "?Event events:venueUrl ?venueurl " 
       		+ "filter (" + al+")}";
       		
		System.out.println(query);
		QueryExecution q = QueryExecutionFactory.sparqlService(serviceURI, query );
		
		
		ResultSet results = q.execSelect();
		ByteArrayOutputStream outputStream = new ByteArrayOutputStream();

		ResultSetFormatter.outputAsJSON(outputStream, results);

		
		String json = new String(outputStream.toByteArray());

		try {
			org.json.JSONObject jsonObj = new JSONObject(json);
			System.out.println(jsonObj);
		} catch (JSONException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
			System.out.println("Conversion to JSON object failed");
		}
		
	}

}
