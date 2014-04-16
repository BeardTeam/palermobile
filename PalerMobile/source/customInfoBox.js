// start k0z
function customInfoboxHtmlFunction(row, isListView) {
      
  var html = "";
  // start outer div
  if (isListView == true || isListView == "true") { // specify if list or map
    console.log("isListView: "+isListView);
    html += "<div>";
  } else {
    html += "<div class='infobox-map'>";
  }
  
  var nome = row.nome;
  html += "<div class='infobox-header'><b>"+nome+"</b></div>"; // nome
  
  html += "<p class='ui-li-desc infobox-subheader'>"; // start subheader
  
  html += "<div class='tipo'>";
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
    html += "<div class='ristoro'><i>"+tipi_specifici;
    // CAREFUL WITH THAT AXE, EUGENE !! original # must be replaced here with _
    var cucina = row['divertimento-e-ristoro_cucina'];
    if (cucina) {
      html += " con particolare cucina "+cucina;
    }
    html += "</i></div>";
  } // end ristoro
  html += "</div>";
  
  html += "<div class='address'>"+row.indirizzo+" "+row['numero-civico']; // start address block
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
  var email = row.email;
  if (email) {
      html += "<div><i>email:</i> <a href=mailto:"+email+" style='margin-left:15px; margin-top: -2px;'>"+email+"</a></div>";
  }
  var web = row.web;
  if (web) {
      html += "<div><i>web:</i> <a href="+web+" style='margin-left:15px;'>"+web+"</a></div>";
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
  html += "<div class='details' style='margin-top:4px;'><a href=#page-details";
  html += " onclick=\"queryDetailsCard('"+nome+"');\" style='margin-left:15px;'>Dettagli</a>";
  html += "</div>";
  // end dwp
  
  html += "</p>"; // end subheader
  html += "</div>"; // end outer div
  
  return html;
}
