// start k0z
function customInfoboxHtmlFunction(row, isListView) {
      
  var html = "";
  // start outer div
  if (isListView == true || isListView == "true") { // specify if list or map
//    console.log("isListView: "+isListView);
    html += "<div class='infobox-list'>";
  } else {
    html += "<div class='infobox-map'>";
  }
  
  html += "<div class='infobox-header'>";
  var nome = row.nome;
  html += "<div class='";
  if (isListView == true || isListView == "true") {
//    html += "style='margin-top:10px;";
      html += "list-nome"
  } else {
     html += "nome"
  }
  html += "'><b>"+nome+"</b></div>"; // nome
  html += "</div>"; // header

//  html += "><b>"+nome+"</b></div>"; // nome
//  html += "<div class='infobox-header' style='margin-top:20px;'><div class='nome'><b>"+nome+"</b></div></div>"; // nome
     
  

  
  html += "<div class='ui-li-desc infobox-subheader"; // start subheader
  if (isListView == true || isListView == "true") {
   html += " list-subheader";
  }
  html += "'>";
  
  html += "<div class='tipo'>";
  // start accoglienza
  var tipi = row.tipi;
  var tipi_specifici = row['tipi-specifici'];
  if (tipi == 'accoglienza') {
    // CAREFUL WITH THAT AXE, EUGENE !! original # must be replaced here with _
    var howStelle = row['accoglienza_stelle'];
//    html += "<div class='accoglienza'>";
    html += "<div class='"; // start accoglienza
    if (isListView == true || isListView == "true") {
       html += "list-";
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
//    html += "<div class='ristoro'>";
    html += "<div class='"; // start address
    if (isListView == true || isListView == "true") {
      html += "list-";
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
  
//  html += "<div class='list-address'>"+row.indirizzo+" "+row['numero-civico']; // start address block
  html += "<div class='"; // start address
  if (isListView == true || isListView == "true") {
     html += "list-";
  }
  html += "address'>";
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
  }
  html += "internet'>";
  var email = row.email;
  if (email) {
      html += "<div><i>email:</i> <a href=mailto:"+email;
      if (isListView == true || isListView == "true") {
         html += " style='margin-left:-30px; margin-top: -2px;"
      }
      html += "'>"+email+"</a></div>";
  }
  var web = row.web;
  if (web) {
   html += "<div><i>web:</i> <a href="+web+" style='margin-left:";
   if (isListView == true || isListView == "true") {
      html += "1";
   }
   html += "8px;'>"+web+"</a></div>";
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
  }
  html += "details'>";
  html += "<a href=#page-details";
  var actualLocation = window.location.hash;
//  console.log("actualLocation: "+actualLocation);
  html += " onclick=\"queryDetailsCard('"+nome+"','"+actualLocation+"');\" >Dettagli</a>";
  html += "</div>";
  // end dwp
  
  html += "</div>"; // end subheader
  html += "</div>"; // end outer div
  
  return html;
}
