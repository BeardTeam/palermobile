/*!
 * Customization file for Fusion Table Mobile Templates
 * See maps_lib.js for license and repository
 *
 * REPLACE THE SETTINGS BELOW TO REFER TO YOUR OWN DATA.
 * COLUMN NAMES ARE CASE-SENSITIVE!
 *
 * Required:
 * 1. Fusion Table IDs
 *
 * Overrides (optional):
 * 2. Search Settings
 *     - Default is a field for every column if you don't set this
 * 3. Custom Content
 *     - Title
 *     - About Page
 *     - Infobox (popup when you click on a location)
 * 4. Map Preferences
 *     - How It Should Use Your Nearby Location
 */
// k0z 
function queryDetailsCard(nome) {
  var queryPage = "https://www.google.com/fusiontables/embedviz?viz=CARD&q=select+*+from+14DYSzHoVW7cnhnC5qE8NXQpmBwbwcOT5gjMJZ44F";
      queryPage += "+where+'nome'='"+nome+"'&tmplt=2&cpr=3\"";
      
  function jsonpCallback(data) {
    console.log(data);
    var html = "<div>";
    html += "<h4 class='infobox-header'>"+data.nome+"</h4>"; // nome
    html += "<p class='ui-li-desc infobox-subheader'>"; // start subheader
    
    html += "<div class='tipo'>";
    if (data['consolato#console']) { // consolato section      
      html += "<div><b>Console: </b>"+data['consolato#console']+"</div>";
      html += "<div><b>Orari di apertura:</b></div>";
      html += "<div>giorni: "+data['consolato#orari#giorni']+"</div>";
      html += "<div>dalle:"+Number(data['consolato#orari#apertura']).toFixed(2)+"</div>";
      html += "<div>alle:"+Number(data['consolato#orari#chiusura']).toFixed(2)+"</div>";
      html += "<div>note:"+data['consolato#orari#note']+"</div>";
    }
    if (data['accoglienza#stelle']) { // accoglienza section
      html += "<div><b>Categoria: </b>"+data['tipi_specifici']+"</div>";
      html += "<div><b>Stelle: </b>"+data['accoglienza#stelle']+"</div>";
      html += "<div><b>Camere: </b>"+data['accoglienza#camere']+"</div>";
      if (data['accoglienza#sale_meeting']) {
	html += "<div><b>Sale Meeting: </b>"+data['accoglienza#sale_meeting']+"</div>";
      }
      if (data['accoglienza#residences']) {
	html += "<div><b>Residences: </b>"+data['accoglienza#residences']+"</div>";
      }
      if (data['accoglienza#direttore']) {
	html += "<div><b>Direttore: </b>"+data['accoglienza#direttore']+"</div>";
      }
      if (data['accoglienza#gestione']) {
	html += "<div><b>Gestione: </b>"+data['accoglienza#gestione']+"</div>";
      }
      if (data['accoglienza#informazioni']) {
	html += "<div><b>Informazioni: </b>"+data['accoglienza#informazioni']+"</div>";
      }  
    }
    if (data.tipi.indexOf('ristoro')>=0 || data.tipi.indexOf('divertimento')>=0) { // ristoro/divertimento section
      
      if (data['divertimento-e-ristoro#cucina']) {
	html += "<div><b>Cucina:</b> "+data['divertimento-e-ristoro#cucina']+"</div>";
      }
      html += "<div><b>Orari di apertura:</b></div>";
      html += "<div>giorni: "+data['divertimento-e-ristoro#orari#giorni']+"</div>";
      html += "<div>dalle:"+Number(data['divertimento-e-ristoro#orari#apertura']).toFixed(2)+"</div>";
      html += "<div>alle:"+Number(data['divertimento-e-ristoro#orari#chiusura']).toFixed(2)+"</div>";
      html += "<div>note:"+data['divertimento-e-ristoro#orari#note']+"</div>";     
    }
    /*if (data.tipi.indexOf('divertimento')) { // divertimento section
    }*/
    html += "</div>";
    
    
    html += "<div class='phone'>"; // start telefono/mobile
    if (data.telefono) {
	html += "<div><i>telefono:</i> "+data.telefono+"</div>";
    } else { 
      if (data.mobile) {
	html += "<div><i>mobile:</i> "+data.mobile+"</div>";
      }
    }
    html += "</div>"; // end telefono/mobile
    
    html += "<div class='internet'>"; // start email/mobile
    if (data.email) {
	html += "<div><i>email:</i> <a href=mailto:"+data.email+">"+data.email+"</a></div>";
    } else {
      if (data.web) {
	html += "<div><i>email:</i> <a href="+data.web+">"+data.web+"</a></div>";
      }
    }
    html += "</div>"; // end email/mobile
    
    html += "<div class='address'>"+data.indirizzo+" "+data['numero-civico']; // start address block
    if (data.quartiere) {
      html += "(quartiere "+data.quartiere+")";
    }
    html += "</div>"; // end address block
    
    
    html += "</p></div>";
    
    $('#detailsview').html( html );    
  }

  var queryPage = "https://script.google.com/macros/s/AKfycbyeSEK-1Xh1mkDZUsRjG1xKFamNhJQwAtyrQF4s620/dev?nome="+nome+"&callback?";
  
  $.ajax({
    url: queryPage,
    dataType: 'jsonp',
    timeout: 10000,
    success: jsonpCallback
  });
  
  return true;
}
// end k0z 

var MapsLib = MapsLib || {}; MapsLib.schemaVersion = 2;


    /////////////////////////
    // 1. FUSION TABLE IDs //
    /////////////////////////

    // Using v1 Fusion Tables API
    // See https://developers.google.com/fusiontables/docs/v1/migration_guide for more info

    // The encrypted Table ID of your Fusion Table (found under File => About)
    MapsLib.fusionTableId = "14DYSzHoVW7cnhnC5qE8NXQpmBwbwcOT5gjMJZ44F";

    // *New Fusion Tables Requirement* API key. found at https://code.google.com/apis/console/
    // *Important* this key is for demonstration purposes. please register your own.
//     MapsLib.googleApiKey ="AIzaSyASPwrtAnBgnY3a5Sl2m-yaAPdSPcthpCY"; // Antonio (suppongo openfarmacie)
//     MapsLib.googleApiKey ="AIzaSyCE52c6f98loed2n33zkSL0USEWa14oEE8"; // Massimiliano (appalermo-iubris, browser)
    MapsLib.googleApiKey = "AIzaSyCRGbA1Di_3M0F1sCXrUJViVAwQ6sJ4Qq8"; // Massimiliano (appalermo-iubris, server)

    // DONE!  YOU COULD DELETE EVERYTHING AFTER THIS POINT AND STILL HAVE A WORKING APP.
    // BELOW ARE CUSTOM OVERRIDES TO MAKE YOUR APP MORE AWESOME.  UNCOMMENT EACH SECTION AS YOU GO.

    // IF YOU GET STUCK, PLEASE VISIT https://github.com/sfbrigade/Mobile-Fusion-Tables
    // YOU CAN SUBMIT AN ISSUE OR CONTACT AN AUTHOR.


$.extend(MapsLib, {

    ////////////////////////
    // 2. SEARCH SETTINGS //
    ////////////////////////

    // By default, you will get a text or range field for each column in your table.
    // However, you can customize search settings using the following attributes:
    //
    //  - allColumns (default=true):             a text field will appear for each column.
    //
    //  - allColumnsExactMatch (default=false):  allColumns + exact matching of fields.
    //
    //  - addressShow (default=true):            show address field for centering search
    //
    //  - addressAutocomplete:                   autocomplete options for address field (set to false if you don't want autocomplete)
    //     - country (default="US"):             restrict autocomplete to search within said country (2-character country code)
    //     - useDefaultMapBounds (default=true): addresses within defaultMapBounds (see section 4) will be prioritized to the top of autocomplete results
    // 
    //  - distanceFilter: drop-down for restricting search results by distance to address (or nearby).  Comment this out to have no such drop-down.
    //     - filterSearchResults (default=true): limit search results to those within distance
    //     - filterListResults (default=true):   limit list results to those within distance (otherwise they're just ordered nearest-first)
    //     - entries:                            array of drop-down entries for distance from address.  Each entry is an array of:
    //          1. drop-down text
    //          2. radius length as "X miles" or "X meters" if the drop-down text wasn't already in this format.
    //          3. true if this is the default selection
    //       - You can specify "0" for radius length to not filter by distance, and leave zoom as-is.
    //
    //
    //  - columns: array of search fields.  Each field has a type, and additional attributes that depend on the type:
    //
    //      type: "text"
    //       - label
    //       - column: name of column
    //       - exact_match (default=false): look for exact match instead of a contains match
    //
    //      type: "slider" (default for numbers and dates, automatically gets minimum and maximum values)
    //       - label
    //       - column: name of column
    //
    //      type: "checkbox"
    //       - label
    //       - is_checked (default=false): start out as checked
    //       - unchecked_query: filter to this Fusion Table SQL-style WHERE clause when unchecked
    //       - checked_query: filter to this Fusion Table SQL-style WHERE clause when checked
    //
    //      type: "dropdown"
    //       - label
    //       - entries: array of drop-down entries.  Each entry is an array of:
    //          1. drop-down text
    //          2. Fusion Table SQL-style WHERE clause (overrides template)
    //             - see https://developers.google.com/fusiontables/docs/v1/sql-reference for Fusion Table-friendly WHERE clauses
    //          3. true if this is the default selection
    //       - template (optional): template for WHERE clause, using {text} to insert drop-down text
    //          NOTE: if you use a template, a drop-down entry can be just the drop-down text instead of an array.
    //       - foreach (optional): populates drop-down with an entry for each unique value of the specified column
    //          NOTE: if you use foreach, you can still add entries under options (they will appear at the top of the dropdown).
    //
    //  If "allColumns" is true, "text" and "slider" columns will simply override label/match settings for the specified columns
    //  Text fields for numerical columns use exact match only.  (If you want range categories, create a drop-down)

    searchPage: { 
        allColumns: false,
		addressAutocomplete: {
			country: "IT"
		},
        distanceFilter: { 
            entries: [ 
            ["Illimitato", "0", true], 
            ["100 metri","100 meters"], 
            ["200 metri","200 meters"], 
            ["500 metri","500 meters"], 
            ["1 km","1000 meters"], 
            ["2 km","2000 meters"], 
            ["5 km","5000 meters"], 
            ["10 km","10000 meters"], 
            ["20 km","20000 meters"], 
            ["50 km","50000 meters"] ]
        },
        columns: [ 
            { label: "Nome:", type: "text", column: "nome"},
            { label: "Cosa cerchi?", type: "dropdown", entries: [
                ["Qualunque attività", "", true],
                ["Agenzie di Viaggi", "'tipi' CONTAINS IGNORING CASE 'agenzia di viaggi'"],
                ["Consolati", "'tipi' CONTAINS IGNORING CASE 'consolato'"],
                ["Dove alloggiare", "'tipi' CONTAINS IGNORING CASE 'accoglienza'"],
                ["Divertimenti", "'tipi' CONTAINS IGNORING CASE 'divertimento'"],
                ["Ristoro", "'tipi' CONTAINS IGNORING CASE 'ristoro'"],
                ["Aperitivo - Bar - Caffè", "'tipi-specifici' IN ('wine bar','cocktail bar','bar')"]
            ] },
			{ label: "Tipi di ristoro:", type: "dropdown", entries: [
                ["Qualunque tipo di ristoro", "", true],
                ["Ristorante", "'tipi-specifici' CONTAINS IGNORING CASE 'ristorante'"],
                ["Pizzeria", "'tipi-specifici' CONTAINS IGNORING CASE 'pizzeria'"],
                ["Pub", "'tipi-specifici' CONTAINS IGNORING CASE 'pub'"],
                ["American Bar", "'tipi-specifici' CONTAINS IGNORING CASE 'american bar'"],
                ["Sushi Bar", "'tipi-specifici' CONTAINS IGNORING CASE 'sushi bar'"],
                ["Street Food", "'tipi-specifici' CONTAINS IGNORING CASE 'street food'"]
            ] },
			{ label: "Tipi di divertimento:", type: "dropdown", entries: [
                ["Qualunque tipo di divertimento", "", true],
                ["Discoteca", "'tipi-specifici' CONTAINS IGNORING CASE 'discoteca'"],
                ["Discopub", "'tipi-specifici' CONTAINS IGNORING CASE 'discopub'"]
            ] },
			{ label: "Wine bar", type: "checkbox", 
                is_checked: false,
                checked_query: "'tipi-specifici' CONTAINS IGNORING CASE 'wine bar'"},
			{ label: "Cocktail bar", type: "checkbox", 
                is_checked: false,
                checked_query: "'tipi-specifici' CONTAINS IGNORING CASE 'cocktail bar'"},
			{ label: "Bar", type: "checkbox", 
                is_checked: false,
                checked_query: "'tipi-specifici' CONTAINS IGNORING CASE 'bar'"},
			{ label: "Stelle", type: "slider", 
                column: "accoglienza#stelle" },
            { label: "Sale meeting", type: "checkbox", 
                is_checked: false,
                checked_query: "'accoglienza#sale_meeting' NOT EQUAL TO ''"},
			{ label: "Tipi di cucina:", type: "dropdown", entries: [
                ["Qualunque tipo di cucina", "", true],
                ["Italiana", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'italiana'"],
                ["Pizza", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'pizza'"],
                ["Tipica", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'tipica'"],
                ["Tipica Siciliana", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'tipica siciliana'"],
                ["Tipica Palermitana", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'tipica palermitana'"],
                ["Internazionale", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'internazionale'"],
                ["Europea", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'europea'"],
                ["Spagnola", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'spagnola'"],
                ["Fusion", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'fusion'"],
                ["Mediterranea", "'divertimento-e-ristoro#cucina' CONTAINS IGNORING CASE 'mediterranea'"]
            ] },
        ],
    },



    ///////////////////////
    // 3. CUSTOM CONTENT //
    ///////////////////////


    // Title bar (including title of website)
    title: "APPalermo",

    // Contents of the About Page.  You can use "{title}" to insert your title.
    // k0z
    // CAMBIA !!!
    aboutPage: " \
        <h3>About {title}</h3> \
        <p>This is a demonstration of a Mobile Template using Fusion Tables.    Developed by SF Brigade for Code For America, it's an adaptation of Derek Eder's searchable Fusion Table template, licensed under the <a href='https://github.com/derekeder/FusionTable-Map-Template/wiki/License' target='_blank'>MIT License</a>.    This particular application uses health inspection data for businesses in San Francisco.</p> \
        <p>To use this template for your own Fusion Table data, <a href='https://github.com/sfbrigade/Mobile-Fusion-Tables' target='_blank'>clone this repository</a> and replace the fields inside fusiontable_settings.js to match your content.</p> \
        ",

    // If you already customized your marker styles and infoboxes within the Fusion Table,
    // you can use them by setting the style and template IDs here.
    // (You can find your IDs inside the link generated by the 'Publish' option in Fusion Tables.)
    // (for more details, see https://developers.google.com/fusiontables/docs/v1/using#WorkingStyles)
    styleId: 2,
    //templateId: 3,
    
    
    // This will go in your style block.  Useful if customizing your infoboxes.
    customCSS: " \
        .infobox-header, .ui-li-desc, li, #score-text { font-family: Arial, Helvetica, Geneva, sans-serif; white-space:normal;} \
        .infobox-map { width:225px; height:120px;} \
        .infobox-header { display:inline; padding-right: 10px; } \
        .infobox-subheader { padding-top: 5px; } \
        .moreinfo { margin-left:7px; min-width:18px; position:absolute; \
                top:45%; bottom:45%; min-height:18px; } \
        .score { float:left; font-size:medium; padding:5px; border:1px solid black; margin:2px 7px 5px 0px; } \
        .score.grn_blank { background-color: #00de3c; color: white; } \
        .score.ltblu_blank { background-color: #55d7d7; color: white; } \
        .score.orange_blank { background-color: #ff9c00; color: white; } \
        .score.red_blank { background-color: #fb6155; color: white; } \
        .internet, .address, .phone { margin-top: 2px; } \
	.tipo { margin-top: 3px; }
    ",

    // customInfoboxHtml can be defined as a string or a function:
    //    STRING:    You can embed Handlebars expressions and variables.
    //    FUNCTION:  Returns an HTML string and takes two params: row and isListView
    //    "":        No infobox.
    //    Default (leaving it undefined): falls back on the infobox format from Fusion Table
    //
    //    In either case, the variables are defined as follows:
    //    - row.COLUMN_NAME, returns value for given column in your FusionTable row
    //        - Note: COLUMN_NAME has periods omitted, and spaces replaced with underscores
    //        - Example: to get the value from the "U.S. Entity Type" column, use row.US_Entity_Type
    //    - isListView, which evaluates to:
    //        - false when populating a map infobox
    //        - true when populating a row in the "List" view

    // delimitedColumns (optional): specify delimiter per column, and row.COLUMN_NAME will return an array
    //delimitedColumns: {"violations": ";"},

    // listViewSortByColumn (optional): specify column to sort by, instead of sorting by distance
    //                                  append "DESC" to sort in reverse
//     listViewSortByColumn: "nome",
    
//      each syntax
//     {{#each row.violations}} \
//       <br>- {{this}} \
//     {{/each}} \
    
    
    customInfoboxHtml: function(row, isListView) {
      var html = "";
      // start outer div
      if (isListView) { // specify if list or map
	html += "<div>";
      } else {
	html += "<div class='infobox-map'>";
      }
      
      var nome = row.nome;
      html += "<h4 class='infobox-header'>"+nome+"</h4>"; // nome
      
      html += "<p class='ui-li-desc infobox-subheader'>"; // start subheader
      
      html += "<p>";
      // start accoglienza
      var tipi = row.tipi;
      var tipi_specifici = row['tipi-specifici'];
      if (tipi == 'accoglienza') {
	// CAREFUL WITH THAT AXE, EUGENE !! original # must be replaced here with _
	var howStelle = row['accoglienza_stelle'];
	html += "<div class='accoglienza'><i>"+tipi_specifici;
	if (howStelle == 1) {
	  html += " a "+howStelle+" stella";
	}
	if (howStelle > 1) {
	  html += " a "+howStelle+" stelle";
	}
	html += "</i></div>";
      } // end accoglienza
      // start ristoro
      if (tipi == 'ristoro') {
	html += "<div><i>"+tipi_specifici;
	// CAREFUL WITH THAT AXE, EUGENE !! original # must be replaced here with _
	var cucina = row['divertimento-e-ristoro_cucina'];
	if (cucina) {
	  html += " con particolare cucina "+cucina;
	}
	html += "</i></div>";
      } // end ristoro
      html += "</p>";
      
      html += "<div>"+row.indirizzo+" "+row['numero-civico']; // start address block
      if (isListView) {
	if (row.quartiere) {
	  html += "(quartiere "+row.quartiere+")";
	}
      }
      html += "</div>"; // end address block
      
      html += "<div class='phone'>"; // start telefono/mobile
      if (row.telefono) {
	  html += "<div><i>tel:</i> "+row.telefono+"</div>";
      } else { 
	if (row.mobile) {
	  html += "<div><i>mobile:</i> "+row.mobile+"</div>";
	}
      }
      html += "</div>"; // end telefono/mobile
      
      html += "<div class='internet'>"; // start email/mobile
      if (row.email) {
	  html += "<div><i>email:</i> <a href=mailto:"+row.email+">"+row.email+"</a></div>";
      } else {
	if (row.web) {
	  html += "<div><i>email:</i> <a href="+row.web+">"+row.web+"</a></div>";
	}
      }
      html += "</div>"; // end email/mobile
      
      // dettagli, pointing to card
      /*
      html += "<div><a href=";
      html += "\"https://www.google.com/fusiontables/embedviz?viz=CARD&q=select+*+from+14DYSzHoVW7cnhnC5qE8NXQpmBwbwcOT5gjMJZ44F";
      html += "+where+'nome'='"+nome+"'&tmplt=2&cpr=3\"" ;
      html += " target='_self'>Dettagli</a>";
      html += "</div>";
      */
      // end dettagli
      // dettagli with page
      html += "<div><a href=#page-details";
      html += " onclick=\"queryDetailsCard('"+nome+"');\">Dettagli</a>";
      html += "</div>";
      // end dwp
      
      html += "</p>"; // end subheader
      html += "</div>"; // end outer div
      
      return html;
    },

    customInfoboxHtmlHB: " \
        {{#if isListView}} \
            <div> \
        {{else}} \
            <div class='infobox-map'> \
        {{/if}} \
	      <h4 class='infobox-header'>{{row.nome}}</h4> \
	      <p class='ui-li-desc infobox-subheader'> \
		<div>\
		  {{row.indirizzo}} {{row.numero-civico}} \
		  {{#if isListView}} {{#if row.quartiere}}(quartiere {{row.quartiere}}) {{/if}} {{/if}} \
		</div> \
		{{#if row.tipi}} \
		<div><i>{{row[tipi-specifici]} a {{row[accoglienza#stelle]}} \
		  {{#if row[accoglienza#stelle] > 1}} stelle{{else}} stella{{/if}}</i> \
		</div> \
		{{/if}} \
		<div> \
		{{#if row.telefono}} \
		  <div><i>tel:</i> {{row.telefono}}</div> \
		{{else}} \
		  {{#if row.mobile}} \
		    <div><i>mobile:</i> {{row.mobile}}</div> \
		  {{/if}} \
		{{/if}} \
		</div> \
	      </p>\
	    </div>",

    // Infoboxes will also appear (unless blank) on your nearby or search address pins.
    // HTML is OK.  Use "{address}" to denote the entered address for addressPinInfobox.
	 /*
    nearbyPinInfobox: "Tu sei qui!",
    addressPinInfobox: "{address}",
	*/


    ////////////////////////
    // 4. MAP PREFERENCES //
    ////////////////////////


    // Override the location column in your Fusion Table (useful if you have multiple columns)
    // NOTE: if you have "latitude" and "longitude" columns, just use "latitude"
    locationColumn:  "geolocazione",

    // Center and zoom radius that your map defaults to when location services are off.
    // If useDefaultMapBounds is true (see section 2), this also determines which addresses get priority with autocomplete
    defaultMapBounds: {

        // Use [latitude, longitude] or address
        center: "Palermo, PA, Italy",

        // "X miles" or "X meters"
        radius: "50000 meters"
    },

    // Set useNearbyLocation to false if you don't want to get the user's location.
    useNearbyLocation: {
        startAtNearbyLocation:      false,

        // If true: use nearby location only if we're within default map bounds
        //          otherwise, post boundsExceededMessage (if non-empty) and use mapDefaultCenter.
        onlyWithinDefaultMapBounds: true,
        boundsExceededMessage:      "Sei troppo lontano da Palermo e provincia. Ti riportiamo nei limiti della mappa.",

        // use this zoom radius if starting at nearby location
        nearbyZoomRadius:           "2000 meters",

        // Snap to nearby zoom radius when user hits "Nearby"?    Options are:
        // true              = always snap to zoom level
        // false (default)   = never snap to zoom level
        // int               = snap to zoom level if ratio between current and nearby zoom radii
        //                       is greater than this (in either direction)
        snapToNearbyZoomIfRatioGreaterThan: 11
    },

    // mapOverlays is an array of overlays, where each overlay can be either of the following:
    // A. a FusionTable ID
    // B. an entry with the following attributes (representing a "ground overlay"):
    //       - imageURL: url to the image to overlay on the map
    //       - cornerNW: [latitude, longitude] of the overlay's NW corner
    //       - cornerSE: [latitude, longitude] of the overlay's SE corner
    //       - opacityPercent (default = 50):
    //            0 = completely invisible
    //            100 = completely opaque

    /*mapOverlays: [ 
        "1GBiESlYt_Lc9O5PLuLaii1L74HeY7G4O1fMh9OE", // FusionTable ID of another table
        { 
            imageURL: 'https://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg',
            cornerNW: [40.712216, -74.22655],
            cornerSE: [40.773941, -74.12544],
            opacityPercent: 60
        },
    */

    // If needed, you can change the visibility of these layers by calling this in script:
    //    MapsLib.setLayerVisibility([array of indices from bottom to top])
    // Examples: 
    //    MapsLib.setLayerVisibility([0,2]) will show only the first and third layers, and the third layer will be on top.
    //    MapsLib.setLayerVisibility([]) will hide all layers

});