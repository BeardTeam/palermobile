package net.iubris.appalermo;

import java.io.IOException;
import java.nio.charset.Charset;

import org.json.CDL;
import org.json.JSONArray;

public class Json2Csv {

	public static void main(String[] args) {
		
		String jsonFlattenAsString = "";
		try {
			jsonFlattenAsString = XMLToCSV.readFile("../datasets/tot_json_flatten_definitely.json", Charset.defaultCharset());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		JSONArray jsonArray = new JSONArray(jsonFlattenAsString);
				
		
		String jsonArrayAsString = CDL.toString( jsonArray );
		System.out.println(jsonArrayAsString);
	}

}
