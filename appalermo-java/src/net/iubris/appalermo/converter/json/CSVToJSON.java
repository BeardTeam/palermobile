package net.iubris.appalermo.converter.json;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.charset.Charset;

import net.iubris.appalermo.utils.FileUtils;

import org.json.CDL;
import org.json.JSONArray;
import org.json.JSONException;

public class CSVToJSON {

	public static void main(String[] args) throws FileNotFoundException {
		try {
			new CSVToJSON().parse( args[0] );
		} catch (JSONException | IOException e) {
			e.printStackTrace();
		}
	}
	
	public void parse(String xmlFile) throws JSONException, IOException {
		String jsonOutputFile = xmlFile.replace("csv", "json");
		
		String csvAsString =  FileUtils.readFile(xmlFile, Charset.defaultCharset());
		
		JSONArray jsonArray = CDL.toJSONArray(csvAsString);
		
		FileUtils.writeToFile( jsonArray.toString(), jsonOutputFile );	
	}
}
