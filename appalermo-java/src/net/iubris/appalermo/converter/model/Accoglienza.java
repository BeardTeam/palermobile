package net.iubris.appalermo.converter.model;

import org.simpleframework.xml.Element;

public class Accoglienza {
	
	/*
		<accoglienza>
		  <stelle><xsl:value-of select="./accoglienza/stelle"/></stelle>
		  <camere><xsl:value-of select="./accoglienza/camere"/></camere>
		  <sale_meeting><xsl:value-of select="./accoglienza/sale_meeting"/></sale_meeting>
		  <residences><xsl:value-of select="./accoglienza/residences"/></residences>
		  <descrizione><xsl:value-of select="./accoglienza/descrizione"/></descrizione>
		  <direttore><xsl:value-of select="./accoglienza/direttore"/></direttore>
		  <gestione><xsl:value-of select="./accoglienza/gestione"/></gestione>
		</accoglienza>
	 */
	
	@Element(required=false)
  	private int stelle;
	
	@Element(required=false)
  	private int camere;

	@Element(required=false)
  	private int sale_meeting;
	
	@Element(required=false)
  	private int residences;
	
	@Element(required=false)
	private String descrizione;
	
	@Element(required=false)
  	private String direttore;
		
	@Element(required=false)
  	private String gestione;

	public int getStelle() {
		return stelle;
	}

	public void setStelle(int stelle) {
		this.stelle = stelle;
	}

	public int getCamere() {
		return camere;
	}

	public void setCamere(int camere) {
		this.camere = camere;
	}

	public int getSale_meeting() {
		return sale_meeting;
	}

	public void setSale_meeting(int sale_meeting) {
		this.sale_meeting = sale_meeting;
	}

	public int getResidences() {
		return residences;
	}

	public void setResidences(int residences) {
		this.residences = residences;
	}

	public String getDescrizione() {
		return descrizione;
	}

	public void setDescrizione(String descrizione) {
		this.descrizione = descrizione;
	}

	public String getDirettore() {
		return direttore;
	}

	public void setDirettore(String direttore) {
		this.direttore = direttore;
	}

	public String getGestione() {
		return gestione;
	}

	public void setGestione(String gestione) {
		this.gestione = gestione;
	}
	
}
