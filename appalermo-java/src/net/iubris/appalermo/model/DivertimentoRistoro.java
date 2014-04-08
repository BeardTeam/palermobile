package net.iubris.appalermo.model;

import org.simpleframework.xml.Element;

public class DivertimentoRistoro {
	
	/*
	 <divertimento-e-ristoro>
	  <cucina><xsl:value-of select="./divertimento-e-ristoro/cucina"/></cucina>
	  <orari>
	    <giorni><xsl:value-of select="./divertimento-e-ristoro/orari/giorni"/></giorni>
	    <apertura><xsl:value-of select="./divertimento-e-ristoro/orari/apertura"/></apertura>
	    <chiusura><xsl:value-of select="./divertimento-e-ristoro/orari/chiusura"/></chiusura>
	    <note><xsl:value-of select="./divertimento-e-ristoro/orari/note"/></note>
	  </orari>
	  <informazioni><xsl:value-of select="./divertimento-e-ristoro/informazioni"/></informazioni>
	</divertimento-e-ristoro>
	 */

	@Element(required=false)
	private String cucina;
	
	@Element(required=false)
	private Orari orari;
	
	@Element(required=false)
	private String informazioni;

	public String getCucina() {
		return cucina;
	}

	public void setCucina(String cucina) {
		this.cucina = cucina;
	}

	public Orari getOrari() {
		return orari;
	}

	public void setOrari(Orari orari) {
		this.orari = orari;
	}

	public String getInformazioni() {
		return informazioni;
	}

	public void setInformazioni(String informazioni) {
		this.informazioni = informazioni;
	}
	
}
