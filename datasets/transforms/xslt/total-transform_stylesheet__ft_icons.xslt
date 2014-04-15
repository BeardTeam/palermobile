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
	<numero-civico></numero-civico>
	<cap><xsl:value-of select="cap"/></cap>
	<quartiere></quartiere>
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
	
	<luoghi-da-visitare>
	  <orari>
	    <giorni><xsl:value-of select="./orari/giorni"/></giorni>
	    <apertura><!--xsl:value-of select="./orari/apertura"/--></apertura>
	    <chiusura><!--xsl:value-of select="./orari/chiusura"/--></chiusura>
	    <note><!--xsl:value-of select="./orari/apertura"/>  <xsl:value-of select="./orari/chiusura"/--><xsl:value-of select="./orari/note"/></note>
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
	
	<icon>
	  <xsl:choose><xsl:when test="contains(tipi,'Agenzia')">shopping</xsl:when><xsl:when test="contains(tipi,'Consolato')">govtbldgs</xsl:when><xsl:when test="tipi-specifici = 'Hotel'"><!--<xsl:choose>
		<xsl:when test="accoglienza/stelle = 1">hotel_1star</xsl:when>
		<xsl:when test="accoglienza/stelle = 2">hotel_2stars</xsl:when>
		<xsl:when test="accoglienza/stelle = 3">hotel_3stars</xsl:when>
		<xsl:when test="accoglienza/stelle = 4">hotel_4stars</xsl:when>
		<xsl:when test="accoglienza/stelle = 5">hotel_5stars</xsl:when>
		<xsl:otherwise>hotel_0star</xsl:otherwise>
	</xsl:choose>-->h_blue</xsl:when><xsl:when test="contains(tipi-specifici,'Bed and Breakfast')">b_blue</xsl:when><xsl:when test="tipi-specifici = 'Casa vacanze'">v_blue</xsl:when><xsl:when test="tipi-specifici = 'Affittacamere'"><!--<xsl:choose>
		<xsl:when test="accoglienza/stelle = 1">lodging_1star</xsl:when>
		<xsl:when test="accoglienza/stelle = 2">lodging_2star</xsl:when>
		<xsl:when test="accoglienza/stelle = 3">lodging_3star</xsl:when>
		<xsl:otherwise>lodging_0star</xsl:otherwise>
	</xsl:choose>-->a_blue</xsl:when><xsl:when test="tipi-specifici = 'Ostello'"><!--<xsl:choose>
		<xsl:when test="accoglienza/stelle = 1">hostel_1star</xsl:when>
		<xsl:when test="accoglienza/stelle = 2">hostel_2star</xsl:when>
		<xsl:when test="accoglienza/stelle = 3">hostel_3star</xsl:when>
		<xsl:otherwise>hostel_0star</xsl:otherwise>
	</xsl:choose>-->o_blue</xsl:when><xsl:when test="tipi-specifici = 'Residence'"><!--<xsl:choose>
		<xsl:when test="accoglienza/stelle = 1">residence-1</xsl:when>
		<xsl:when test="accoglienza/stelle = 2">residence-2</xsl:when>
		<xsl:when test="accoglienza/stelle = 3">residence-3</xsl:when>
		<xsl:when test="accoglienza/stelle = 4">residence-4</xsl:when>
		<xsl:otherwise>residence</xsl:otherwise>
	</xsl:choose>-->r_blue</xsl:when><xsl:when test="tipi-specifici = 'Casa ferie'">f_blue</xsl:when><xsl:when test="contains(tipi-specifici,'Discoteca')">pink_diamond</xsl:when><xsl:when test="contains(tipi-specifici,'Discopub')">purple_diamond</xsl:when><xsl:when test="contains(tipi-specifici,'Wine')">bars</xsl:when><xsl:when test="contains(tipi-specifici,'Cocktail')">bars</xsl:when><xsl:when test="tipi-specifici = 'Bar'">coffee</xsl:when><xsl:when test="tipi-specifici = 'Ristorante'">dining</xsl:when><xsl:when test="tipi-specifici = 'Pizzeria'">rec_dining</xsl:when><xsl:when test="contains(tipi-specifici,'Ristorante') and contains(tipi-specifici,'Pizzeria')">rec_dining</xsl:when><xsl:when test="contains(tipi-specifici,'Pub') or contains(tipi-specifici,'American')">snack_bar</xsl:when><xsl:when test="contains(tipi-specifici,'Trattoria')">dining</xsl:when><xsl:when test="contains(tipi-specifici,'Sushi')">yen</xsl:when><xsl:when test="contains(tipi-specifici,'Focacceria') or contains(tipi-specifici,'Street Food')">snack_bar</xsl:when><xsl:when test="contains(tipi,'Parcheggio')">parking_lot</xsl:when><xsl:when test="contains(tipi-specifici,'Santuario') or contains(tipi-specifici,'Chiesa') or contains(tipi-specifici,'Oratorio')">church</xsl:when><xsl:when test="contains(tipi-specifici,'Museo')">museum</xsl:when><xsl:when test="contains(tipi,'Spazio verde')">grn_blank</xsl:when><xsl:when test="contains(tipi-specifici,'Teatro')">arts</xsl:when><xsl:when test="contains(tipi-specifici,'Biblioteca')">library</xsl:when><xsl:when test="contains(tipi-specifici,'Zona archeologica')">trail</xsl:when><xsl:when test="contains(tipi-specifici,'Dimora')">homegardenbusiness</xsl:when><xsl:when test="contains(tipi-specifici,'Monumento')">shrine_jp</xsl:when><xsl:when test="contains(tipi-specifici,'Palazzo')">building</xsl:when><xsl:otherwise>red_blank</xsl:otherwise></xsl:choose></icon>
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
