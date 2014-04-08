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
    
    <consolato>
      <stato><xsl:value-of select="./stato"/></stato>
      <console><xsl:value-of select="console"/></console>
      <circoscrizione><xsl:value-of select="circoscrizione"/></circoscrizione>
      <pec><xsl:value-of select="pec"/></pec>
      <orari>
	<giorni><xsl:value-of select="./orari/giorni"/></giorni>
	<apertura><xsl:value-of select="./orari/apertura"/></apertura>
	<chiusura><xsl:value-of select="./orari/chiusura"/></chiusura>
	<note><xsl:value-of select="./orari/note"/></note>
      </orari>
    </consolato>
        
  </luogo>
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
