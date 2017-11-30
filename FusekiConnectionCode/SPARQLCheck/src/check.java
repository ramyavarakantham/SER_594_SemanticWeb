import org.apache.jena.query.Query;

import org.apache.jena.query.QueryExecution;

import org.apache.jena.query.QueryExecutionFactory;

import org.apache.jena.query.QueryFactory;

import org.apache.jena.query.QuerySolution;

import org.apache.jena.query.ResultSet;
import org.apache.jena.query.ResultSetFormatter;
import org.apache.jena.rdf.model.Model;

import org.apache.jena.rdf.model.ModelFactory;

import jena.sparql;

public class check {
	
	public static void main(String[] args) { 

        try {

               Model model = ModelFactory.createDefaultModel();     

               model = model.read(check.class.getResource("/eventfulRDF.ttl").toString());
               
               //Query query = QueryFactory.create("PREFIX foaf:  <http://xmlns.com/foaf/0.1/>"
               	//	+ "SELECT ?name "
               		//+ "where {?person foaf:name ?name .}");

            	   Query query = QueryFactory.create("prefix eventful:<http://www.semanticweb.org/meghana/ontologies/2017/9/untitled-ontology-21#>"
            	   		+ "select ?Venue "
               		+ "where {?Event eventful:hasVenue ?Venue .}");
               
               QueryExecution qe = QueryExecutionFactory.create(query, model);
               
               ResultSet results = qe.execSelect();
               
               ResultSetFormatter.out(System.out,results);
               
               while (results.hasNext()) {
            	   	System.out.println("inside while");
            	   	QuerySolution row = results.next();
                     
                     String value = row.getLiteral("x").toString();               

                     System.out.println("---------------------");

                     System.out.println(value);

                     System.out.println("---------------------");

               }

        } catch (Exception e) {

               e.printStackTrace();

        } }

}
