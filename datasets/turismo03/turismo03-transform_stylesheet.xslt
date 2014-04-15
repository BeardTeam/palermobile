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
    
    
    <luoghi-da-visitare>
      <orari>
      	<giorni><xsl:value-of select="./orari/giorni"/></giorni>
      	<apertura><!--xsl:value-of select="./orari/apertura"/--></apertura>
      	<chiusura><!--xsl:value-of select="./orari/chiusura"/--></chiusura>
      	<note><!--xsl:value-of select="./orari/apertura"/> <xsl:value-of select="./orari/chiusura"/> --><xsl:value-of select="./orari/note"/></note>
      	<visite><xsl:value-of select="./orari/visite"/></visite>
      	<servizi><xsl:value-of select="./orari/servizi"/></servizi>
      	<prezzi><xsl:value-of select="./orari/prezzi"/></prezzi>
      </orari>
      <informazioni_storiche><xsl:value-of select="./informazioni_storiche"/></informazioni_storiche>
      <note><xsl:value-of select="./note"/></note>
      
      <gestore>
	<nome><xsl:value-of select="./gestore/nome"/></nome>
	<indirizzo><xsl:value-of select="./gestore/indirizzo"/></indirizzo>
	<cap><xsl:value-of select="./gestore/cap"/></cap>
	<localita><xsl:value-of select="./gestore/localita"/></localita>
	<mobile><xsl:value-of select="./gestore/mobile"/></mobile>
	<telefono><xsl:value-of select="./gestore/telefono"/></telefono>
	<fax><xsl:value-of select="./gestore/fax"/></fax>
	<email><xsl:value-of select="./gestore/email"/></email>
	<web><xsl:value-of select="./gestore/web"/></web>
      </gestore>      
    </luoghi-da-visitare>
    
  </luogo>
  </xsl:for-each>
</xsl:template>

</xsl:stylesheet>
