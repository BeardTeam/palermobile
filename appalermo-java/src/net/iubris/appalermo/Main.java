package net.iubris.appalermo;

import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.json.CDL;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.XML;

public class Main {
	
	public static void main(String[] args) throws FileNotFoundException {
		String xmlFile = "../datasets/TURISMO01.xml";
		xmlFile = "../datasets/totale_mancante03_e_visitabili_2.xml";
		
		
		String xmlAsString = "";
		try {
			xmlAsString+= readFile(xmlFile, Charset.defaultCharset());
		} catch (IOException e1) {
			e1.printStackTrace();
		}
		
		
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
		try {
			
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
			
			
			String csv = CDL.toString(flattenJsonArray);
//			System.out.println(csv);
			writeToFile(csv, "tot_esclusi_03_e_visitabili.csv");
			
		} catch (JSONException | IOException je) {
			System.out.println(je.toString());
		}
	}
	
	public static String readFile(String path, Charset encoding) throws IOException {
	  byte[] encoded = Files.readAllBytes(Paths.get(path));
	  return encoding.decode(ByteBuffer.wrap(encoded)).toString();
	}
	
	public static void writeToFile(String jsonAsString, String jsonFileName) throws IOException {
	    FileWriter fw = new FileWriter(jsonFileName);
	    fw.write(jsonAsString);
	    fw.close();
	}

}
