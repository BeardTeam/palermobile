<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

   <xsl:output method="xml" indent="yes"/>
   <xsl:template match="luoghi">
      <palermo-opendata>
         <luoghi>
            <xsl:call-template name="luogo"/>
         </luoghi>
      </palermo-opendata>
  </xsl:template>

  <xsl:template  name="luogo">
    <xsl:for-each select="//luogo">
      <luogo>
	<id><xsl:value-of select="id"/></id>
	<nome><xsl:value-of select="nome"/></nome>
	<indirizzo><xsl:value-of select="indirizzo"/></indirizzo>
	<cap><xsl:value-of select="cap"/></cap>
	<citta><xsl:value-of select="citta"/></citta>
	<geolocazione></geolocazione>
	<telefono><xsl:value-of select="telefono"/></telefono>
	<fax><xsl:value-of select="fax"/></fax>
	<mobile><xsl:value-of select="mobile"/></mobile>
	<email><xsl:value-of select="email"/></email>
	<web><xsl:value-of select="web"/></web>    
	<tipi><xsl:value-of select="tipi"/></tipi>
	<tipi-specifici><xsl:value-of select="tipi-specifici"/></tipi-specifici>

	<agenzia>
	  <intestazione><xsl:value-of select="./agenzia/intestazione"/></intestazione>
	</agenzia>

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
	
	<icon>https://googledrive.com/host/0B5CxUDoGDKvkTENmZURWb1FzcDQ/<xsl:choose><xsl:when test="contains(tipi,'agenzia')">travel_agency</xsl:when><xsl:when test="contains(tipi,'consolato')">embassy</xsl:when><xsl:when test="tipi-specifici = 'hotel'"><xsl:choose><xsl:when test="accoglienza/stelle = 1">hotel_1star</xsl:when><xsl:when test="accoglienza/stelle = 2">hotel_2stars</xsl:when><xsl:when test="accoglienza/stelle = 3">hotel_3stars</xsl:when><xsl:when test="accoglienza/stelle = 4">hotel_4stars</xsl:when><xsl:when test="accoglienza/stelle = 5">hotel_5stars</xsl:when><xsl:otherwise>hotel_0star</xsl:otherwise></xsl:choose></xsl:when><xsl:when test="contains(tipi-specifici,'bed and breakfast')">bed_breakfast1-2</xsl:when><xsl:when test="tipi-specifici = 'casa vacanze'">townhouse</xsl:when><xsl:when test="tipi-specifici = 'affittacamere'"><xsl:choose><xsl:when test="accoglienza/stelle = 1">lodging_1star</xsl:when><xsl:when test="accoglienza/stelle = 2">lodging_2star</xsl:when><xsl:when test="accoglienza/stelle = 3">lodging_3star</xsl:when><xsl:otherwise>lodging_0star</xsl:otherwise></xsl:choose></xsl:when><xsl:when test="tipi-specifici = 'ostello'"><xsl:choose><xsl:when test="accoglienza/stelle = 1">hostel_1star</xsl:when><xsl:when test="accoglienza/stelle = 2">hostel_2star</xsl:when><xsl:when test="accoglienza/stelle = 3">hostel_3star</xsl:when><xsl:otherwise>hostel_0star</xsl:otherwise></xsl:choose></xsl:when><xsl:when test="tipi-specifici = 'residence'"><xsl:choose><xsl:when test="accoglienza/stelle = 1">residence-1</xsl:when><xsl:when test="accoglienza/stelle = 2">residence-2</xsl:when><xsl:when test="accoglienza/stelle = 3">residence-3</xsl:when><xsl:when test="accoglienza/stelle = 4">residence-4</xsl:when><xsl:otherwise>residence</xsl:otherwise></xsl:choose></xsl:when><xsl:when test="tipi-specifici = 'casa ferie'">youthhostel</xsl:when><xsl:when test="contains(tipi-specifici,'discoteca')">dancinghall_discoteca</xsl:when><xsl:when test="contains(tipi-specifici,'discopub')">dance_class_discopub</xsl:when><xsl:when test="contains(tipi-specifici,'wine bar')">winebar</xsl:when><xsl:when test="contains(tipi-specifici,'cocktail bar')">bar_cocktail</xsl:when><xsl:when test="contains(tipi-specifici,'bar')">coffee</xsl:when><!--xsl:when test="tipi-specifici = 'bar'">coffee</xsl:when--><xsl:when test="tipi-specifici = 'ristorante'">restaurant</xsl:when><xsl:when test="tipi-specifici = 'pizzeria'">pizzaria</xsl:when><xsl:when test="contains(tipi-specifici,'ristorante') and contains(tipi-specifici,'pizzeria')">pizzaria</xsl:when><xsl:when test="contains(tipi-specifici,'pub')">bar</xsl:when><xsl:when test="contains(tipi-specifici,'trattoria')">restaurant_italian</xsl:when><xsl:when test="contains(tipi-specifici,'sushi')">restaurant_chinese</xsl:when><xsl:when test="contains(tipi-specifici,'focacceria') or contains(tipi-specifici,'street food')">sandwich-2</xsl:when><xsl:otherwise>marker_red</xsl:otherwise></xsl:choose>.png</icon>
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
