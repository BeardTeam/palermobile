package net.iubris.appalermo.model;

import java.util.List;

import org.apache.commons.lang.builder.ReflectionToStringBuilder;
import org.simpleframework.xml.Element;
import org.simpleframework.xml.ElementList;

public class Luogo {
  
	@Element(required=false)
  	private int id;
	
	@Element(required=false)
  	private String nome;
	
	@Element(required=false)
  	private String indirizzo;
	
	@Element(required=false)
  	private String cap;
	
	@Element(required=false)
  	private String citta;
	
	@Element(required=false)
  	private String telefono;
	
	@Element(required=false)
  	private String mobile;
	
	@Element(required=false)
  	private String fax;
	
	@Element(required=false)
  	private String email;
	
	@Element(required=false)
  	private String web;
	
	@ElementList(required=false) 
  	private List<String> tipi;
	
  	@ElementList(required=false) 
  	private List<String> tipi_specifici;
	
  	@Element(required=false)
  	private Agenzia agenzia;
  	
  	@Element(required=false)
  	private Consolato consolato;
  	
  	@Element(required=false)
  	private Accoglienza accoglienza;
  	
	@Element(required=false, name="divertimento-e-ristoro")
  	private DivertimentoRistoro divertimentoRistoro;
	
	
	
  	
	public int getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public String getIndirizzo() {
		return indirizzo;
	}

	public String getCap() {
		return cap;
	}

	public String getCitta() {
		return citta;
	}

	public String getTelefono() {
		return telefono;
	}

	public String getMobile() {
		return mobile;
	}

	public String getFax() {
		return fax;
	}

	public String getEmail() {
		return email;
	}

	public String getWeb() {
		return web;
	}

	public List<String> getTipi() {
		return tipi;
	}

	public List<String> getTipi_specifici() {
		return tipi_specifici;
	}

	public Agenzia getAgenzia() {
		return agenzia;
	}

	public Consolato getConsolato() {
		return consolato;
	}

	public Accoglienza getAccoglienza() {
		return accoglienza;
	}

	public DivertimentoRistoro getDivertimentoRistoro() {
		return divertimentoRistoro;
	}

	public String toString() {
		return ReflectionToStringBuilder.toString(this);
	}
}
