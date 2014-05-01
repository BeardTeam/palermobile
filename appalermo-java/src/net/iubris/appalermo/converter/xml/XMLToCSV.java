package net.iubris.appalermo.converter.xml;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;

import net.iubris.appalermo.converter.json.JsonFlattener;
import net.iubris.appalermo.utils.FileUtils;

import org.json.CDL;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;

public class XMLToCSV {
	
	public static void main(String[] args) throws FileNotFoundException {
		try {
			new XMLToCSV().parse( args[0] );
		} catch (JSONException | IOException e) {
			e.printStackTrace();
		}
	}
	
	public void parse(String xmlFile) throws JSONException, IOException {		
		
//		String xmlFile = "../datasets/totale_mancante03_e_visitabili.xml";
//		String xmlFile = xml;
		String csvOutputFile = xmlFile.replace("xml", "csv");
//		"tot_esclusi_03_e_visitabili.csv";
		
		
		String xmlAsString = FileUtils.readFile(xmlFile, Charset.defaultCharset());
		
		
		// xmlsimple way
		/*
		Serializer serializer = new Persister();		
		try {			
			PalermoOpendata palermoOpendata = serializer.read(PalermoOpendata.class, xmlAsString);
			System.out.println( palermoOpendata.toString() );
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		*/
		
		// jackson way
//		XmlMapper xmlMapper = new XmlMapper();
//		ObjectMapper xmlMapper = new ObjectMapper();
//		PalermoOpendata palermoOpendata  = null;

		// the crockford way
			
		JSONObject xmlJSONObj = XML.toJSONObject(xmlAsString);
		
		JSONObject luoghiJsonObject = xmlJSONObj
				.getJSONObject("palermo-opendata")
				.getJSONObject("luoghi");
		JSONArray allLuogoJsonArray = luoghiJsonObject.getJSONArray("luogo");
		
		JSONArray flattenJsonArray = new JSONArray();
		
		int length = allLuogoJsonArray.length();
		for (int i=0; i< length; i++) {
			JSONObject luogoJsonObject = allLuogoJsonArray.getJSONObject(i);
			String luogoFlattenString = JsonFlattener.encode(luogoJsonObject);

			flattenJsonArray.put(new JSONObject(luogoFlattenString));				
		}
			
//			writeToFile(flattenJsonArray.toString(), "tot_esclusi_03_e_visitabili__flatten.json");
			
		String csv = CDL.toString(flattenJsonArray);
//			System.out.println(csv);
		
		FileUtils.writeToFile(csv, csvOutputFile );
		System.out.println(csvOutputFile+" written");
	}

}
