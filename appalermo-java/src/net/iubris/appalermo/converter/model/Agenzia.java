package net.iubris.appalermo.converter.model;

import org.simpleframework.xml.Element;

public class Agenzia {
	
	@Element(required=false)
	private String intestazione;

	public String getIntestazione() {
		return intestazione;
	}

	public void setIntestazione(String intestazione) {
		this.intestazione = intestazione;
	}

}
