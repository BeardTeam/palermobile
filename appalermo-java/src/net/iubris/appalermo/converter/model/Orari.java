package net.iubris.appalermo.converter.model;

import org.simpleframework.xml.Element;

public class Orari {

	@Element(required=false)
	private String giorni;
	
	@Element(required=false)
	private String apertura;
	
	@Element(required=false)
	private String chiusura;
	
	@Element(required=false)
	private String note;
	
	public String getGiorni() {
		return giorni;
	}
	public void setGiorni(String giorni) {
		this.giorni = giorni;
	}
	public String getApertura() {
		return apertura;
	}
	public void setApertura(String apertura) {
		this.apertura = apertura;
	}
	public String getChiusura() {
		return chiusura;
	}
	public void setChiusura(String chiusura) {
		this.chiusura = chiusura;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	
}
