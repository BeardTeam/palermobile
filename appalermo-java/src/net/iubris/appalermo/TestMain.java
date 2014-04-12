package net.iubris.appalermo;

import java.io.IOException;

import org.json.JSONException;

import net.iubris.appalermo.converter.xml.XMLToCSV;

public class TestMain {

	public static void main(String[] args) {
		String xmlFile = "../datasets/totale_mancante03_e_visitabili.xml";
//		String csvOutputFile = "../datasets/tot_esclusi_03_e_visitabili.csv";
		
		try {
			new XMLToCSV().parse(xmlFile);
		} catch (JSONException | IOException e) {
			e.printStackTrace();
		}
	}
}
