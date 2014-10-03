/*
 * Copyleft BeardTeam, 2014
 * Released under GPLv3
 *
 * Author: Massimiliano Leone https://plus.google.com/+MassimilianoLeone
 *
 * based on https://github.com/sfbrigade/Mobile-Fusion-Tables
 */
function customInfoboxHtmlFunction(row, isListView) {

  if (isListView == true || isListView == "true") { // specify if list or map
    
  }
  
  var html = "";
  // start outer div
  if (isListView == true || isListView == "true") { // specify if list or map
    html += "<div class='infobox-list'>";
  } else {
    html += "<div class='infobox-map'>";
  }
  
  html += "<div class='infobox-header'>";
  var nome = row.nome;
  html += "<div class='";
  if (isListView == true || isListView == "true") {
      html += "list"
  } else {
     html += "map"
  }
  html += "-nome'><b>"+nome+"</b></div>"; // nome
  html += "</div>"; // header
  
  html += "<div class='ui-li-desc infobox-subheader"; // start subheader
  if (isListView == true || isListView == "true") {
    html += " list-subheader";
  } else {
    html += " map-subheader";
  }
  html += "'>";
  
  html += "<div class='";  
  if (isListView == true || isListView == "true") {
      html += "list-"
  } else {
     html += "map-"
  }
  html += "tipo'>";
  // start accoglienza
  var tipi = row.tipi;
  var tipi_specifici = row['tipi-specifici'];
  if (tipi == 'accoglienza') {
    // CAREFUL WITH THAT AXE, EUGENE !! original # must be replaced here with _
    var howStelle = row['accoglienza_stelle'];
    html += "<div class='"; // start accoglienza
    if (isListView == true || isListView == "true") {
       html += "list-";
    } else {
     html += "map-"
    }
    html += "accoglienza'>";
    html += "<i>"+tipi_specifici;
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
    html += "<div class='"; // start address
    if (isListView == true || isListView == "true") {
      html += "list-";
    } else {
     html += "map-"
    }
    html += "ristoro'>";
    html += "<i>"+tipi_specifici;
    // CAREFUL WITH THAT AXE, EUGENE !! original # must be replaced here with _
    var cucina = row['divertimento-e-ristoro_cucina'];
    if (cucina) {
      html += " con particolare cucina "+cucina;
    }
    html += "</i></div>";
  } // end ristoro
  html += "</div>";
  
  html += "<div class='"; // start address
  if (isListView == true || isListView == "true") {
     html += "list-";
  } else {
     html += "map-"
  }
  html += "address'><i>Indirizzo:</i> ";
  html += row.indirizzo+" "+row['numero-civico'];
  if (isListView) {
    if (row.quartiere) {
      html += "(quartiere "+row.quartiere+")";
    }
  }
  html += "</div>"; // end address block
 
  html += "<div class='"; // start telefono/mobile
  if (isListView == true || isListView == "true") {
     html += "list-";
  } else {
     html += "map-"
  }
  html += "phones'>";
  if (row.telefono) {
      html += "<div><i>tel:</i> "+row.telefono+"</div>";
  } else { 
    if (row.mobile) {
      html += "<div><i>mobile:</i> "+row.mobile+"</div>";
    }
  }
  html += "</div>"; // end telefono/mobile
  
  html += "<div class='"; // start internet (email/web)
  if (isListView == true || isListView == "true") {
     html += "list-";
  } else {
     html += "map-"
  }
  html += "internet'>";
  var webMargin = "0";
  var email = row.email;
  if (email) {
      html += "<div><i>email:</i> <a href=mailto:"+email;
      if (isListView == true || isListView == "true") {
         html += " style='margin-left:-30px; margin-top: -2px;"
      }
      html += "'>"+email+"</a></div>";
      webMargin = "8";
  }
  var web = row.web;
  if (web) {
   html += "<div><i>web:</i> <a href="+web+" style='margin-top: 1px; margin-left:";
   if (isListView == true || isListView == "true") {
      html += "1";
   }
   
   html += webMargin+"px;'>"+web+"</a></div>";
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
//  html += "<div class='list-details' style='margin-top:4px;'><a href=#page-details";
  html += "<div class='"; // start internet (email/web)
  if (isListView == true || isListView == "true") {
     html += "list-";
  } else {
     html += "map-"
  }
  html += "details'>";
  html += "<a href=#page-details";
  var actualLocation = window.location.hash;
  html += " onclick=\"queryDetailsCard('"+nome+"','"+actualLocation+"');\" >Dettagli</a>";
  html += "</div>";
  // end dwp
  
  html += "</div>"; // end subheader
  html += "</div>"; // end outer div
  
  return html;
}
