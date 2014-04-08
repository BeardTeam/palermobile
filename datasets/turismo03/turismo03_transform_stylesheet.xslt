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
    <indirizzo><xsl:value-of select="nome"/></indirizzo>
    <cap><xsl:value-of select="cap"/></cap>
    <citta><xsl:value-of select="citta"/></citta>
    <telefono><xsl:value-of select="telefono"/></telefono>
    <fax><xsl:value-of select="fax"/></fax>
    <mobile><xsl:value-of select="mobile"/></mobile>
    <email><xsl:value-of select="email"/></email>
    <web><xsl:value-of select="web"/></web>    
    <tipi><xsl:value-of select="tipi"/></tipi>
    <tipi-specifici><xsl:value-of select="tipi-specifici"/></tipi-specifici>
    
    <!--xsl:if test="tipi='agenzia di viaggi'">
    <agenzie_dettagli>
    </xsl:if-->
    <agenzie>
      <intestazione><xsl:value-of select="intestazione"/></intestazione>
    <!--xsl:if test="tipi='agenzia di viaggi'">
      </agenzie_dettagli>
    </xsl:if-->
    </agenzie>
    
    <!--xsl:if test="tipi='consolato'">
      <consolato_dettagli>
    </xsl:if-->
    <consolato>
      <stato><xsl:value-of select="stato"/></stato>
      <console><xsl:value-of select="console"/></console>
      <pec><xsl:value-of select="pec"/></pec>
      <orari>
	<giorni><xsl:if test="contains(tipi,'consolato')"><xsl:value-of select="giorni"/></xsl:if></giorni>
	<apertura><xsl:value-of select="apertura"/></apertura>
	<chiusura><xsl:value-of select="chiusura"/></chiusura>
	<note><xsl:value-of select="note"/></note>
      </orari>
    <!--xsl:if test="tipi='consolato'">
      </consolato_dettagli>
    </xsl:if-->
    </consolato>
    
    <!-- we would use if/else but we need to have all nodes-->
    <!--
    <xsl:if test="stelle">
      <accoglienza_dettagli>
    </xsl:if>
    -->
    <accoglienza>
      <stelle><xsl:value-of select="stelle"/></stelle>
      <camere><xsl:value-of select="camere"/></camere>
      <sale_meeting><xsl:value-of select="sale_meeting"/></sale_meeting>
      <residences><xsl:value-of select="residences"/></residences>
      <descrizione><xsl:if test="stelle"><xsl:value-of select="descrizione"/></xsl:if></descrizione>
      <direttore><xsl:value-of select="direttore"/></direttore>
      <gestione><xsl:value-of select="gestione"/></gestione>
    <!--
    <xsl:if test="stelle">
      </accoglienza_dettagli>
    </xsl:if>
    -->
    </accoglienza>
    
    <!--
    <xsl:if test="tipi='divertimento' or tipi='ristoro'">
      <divertimento-e-ristoro_dettagli>
    </xsl:if>
    -->
    <divertimento-e-ristoro>
      <orari>
	<giorni><xsl:if test="contains(tipi,'divertimento') or contains(tipi,'ristoro')"><xsl:value-of select="giorni"/></xsl:if></giorni>
	<apertura><xsl:if test="contains(tipi,'divertimento') or contains(tipi,'ristoro')"><xsl:value-of select="apertura"/></xsl:if></apertura>
	<chiusura><xsl:if test="contains(tipi,'divertimento') or contains(tipi,'ristoro')"><xsl:value-of select="chiusura"/></xsl:if></chiusura>
	<note><xsl:if test="contains(tipi,'divertimento') or contains(tipi,'ristoro')"><xsl:value-of select="note"/></xsl:if></note>
      </orari>
      <informazioni><xsl:if test="contains(tipi,'divertimento') or contains(tipi,'ristoro')"><xsl:value-of select="giorni"/></xsl:if></informazioni>
    <!--
    <xsl:if test="stelle">
      </divertimento-e-ristoro_dettagli>
    </xsl:if>
    -->
    </divertimento-e-ristoro>
    
  </luogo>
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
