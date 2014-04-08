<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="xml" indent="yes"/>
  <xsl:template match="//luoghi">
    <luoghi>
      <xsl:call-template name="luogo"/>
    </luoghi>
  </xsl:template>

  <xsl:template  name="luogo">
    <xsl:for-each select="//luogo">
      <luogo>
		<id><xsl:value-of select="id"/></id>
		<nome><xsl:value-of select="nome"/></nome>
		<indirizzo><xsl:value-of select="indirizzo"/></indirizzo>
		<cap><xsl:value-of select="cap"/></cap>
		<citta><xsl:value-of select="citta"/></citta>
		<telefono><xsl:value-of select="telefono"/></telefono>
		<fax><xsl:value-of select="fax"/></fax>
		<mobile><xsl:value-of select="mobile"/></mobile>
		<email><xsl:value-of select="email"/></email>
		<web><xsl:value-of select="web"/></web>    
		<tipi><xsl:value-of select="tipi"/></tipi>
		<tipi-specifici><xsl:value-of select="tipi-specifici"/></tipi-specifici>
	
		<agenzie>
		  <intestazione><xsl:value-of select="./agenzie/intestazione"/></intestazione>
		</agenzie>
	
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
		
		<accoglienza>
		  <stelle><xsl:value-of select="./accoglienza/stelle"/></stelle>
		  <camere><xsl:value-of select="./accoglienza/camere"/></camere>
		  <sale_meeting><xsl:value-of select="./accoglienza/sale_meeting"/></sale_meeting>
		  <residences><xsl:value-of select="./accoglienza/residences"/></residences>
		  <descrizione><xsl:value-of select="./accoglienza/descrizione"/></descrizione>
		  <direttore><xsl:value-of select="./accoglienza/direttore"/></direttore>
		  <gestione><xsl:value-of select="./accoglienza/gestione"/></gestione>
		</accoglienza>
		
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
		
		<icon>
<!-- 		  add some logic -->
		</icon>
	      
      </luogo>
    </xsl:for-each>
  </xsl:template>

  <!--xsl:template name="agenzie">
    <xsl:copy-of select="./agenzie"/>
  </xsl:template>

  <xsl:template name="accoglienza" match="accoglienza">
    <xsl:copy>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <xsl:template name="consolato" match="consolato">
    <xsl:copy>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template>

  <xsl:template name="divertimento-e-ristoro" match="divertimento-e-ristoro">
    <xsl:copy>
      <xsl:apply-templates/>
    </xsl:copy>
  </xsl:template-->


</xsl:stylesheet>
