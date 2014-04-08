package net.iubris.appalermo.model;

import org.simpleframework.xml.Element;

public class Consolato {
	
	/*
	<consolato>
	  <stato><xsl:value-of select="./consolato/stato"/></stato>
	  <console><xsl:value-of select="./consolato/console"/></console>
	  <pec><xsl:value-of select="./consolato/pec"/></pec>
	  <orari>
	    <giorni><xsl:value-of select="./consolato/orari/giorni"/></giorni>
	    <apertura><xsl:value-of select="./consolato/orari/apertura"/></apertura>
	    <chiusura><xsl:value-of select="./consolato/orari/chiusura"/></chiusura>
	    <note><xsl:value-of select="./consolato/orari/note"/></note>
	  </orari>
	</consolato>
	*/
	
	@Element(required=false)
	private String stato;
	
	@Element(required=false)
	private String console;
	
	@Element(required=false)
	private String pec;
	
	@Element(required=false)
	private Orari orari;
	

}
