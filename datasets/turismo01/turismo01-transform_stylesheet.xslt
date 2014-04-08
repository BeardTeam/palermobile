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
    
    <accoglienza>
      <stelle><xsl:value-of select="./stelle"/></stelle>
      <camere><xsl:value-of select="./camere"/></camere>
      <sale_meeting><xsl:value-of select="./sale_meeting"/></sale_meeting>
      <residences><xsl:value-of select="./residences"/></residences>
      <descrizione><xsl:value-of select="./descrizione"/></descrizione>
      <direttore><xsl:value-of select="./direttore"/></direttore>
      <gestione><xsl:value-of select="./gestione"/></gestione>
    </accoglienza>
    
  </luogo>
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
