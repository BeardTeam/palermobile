/*
 * Copyleft BeardTeam, 2014
 * Released under GPLv3
 *
 * Author: Massimiliano Leone https://plus.google.com/+MassimilianoLeone
 *
 * based on https://github.com/sfbrigade/Mobile-Fusion-Tables
 */
function customInfoboxHtmlFunction(row, view) {

  // specify if list or map    
//   if (isListView(view)) { }
  
  var html = "";
  // start outer div
  html += "<div class='infobox-"+isListView(view)+"'>"; 

  var nome = row.nome;
  var tipi = row.tipi;
  var tipi_specifici = row['tipi-specifici'];
  
  html += "<div class='infobox-header'>";
//   html += "<img src='http://maps.google.com/mapfiles/kml/paddle/"+row.icon+".png'>"
  html += "<div class='"+isListView(view)+"-nome' style='font-weight:bold;'>"+nome+"</div>"; // nome
  html += "</div>"; // end infobox-header
  
  html += "<div class='ui-li-desc infobox-subheader "+isListView(view)+"-subheader'>"; // start subheader 
  
  // tipo
//   html += "<div class='"+isListView(view)+"-tipo'>";
//   html += "</div>";
  // end tipo
  
  // start accoglienza  
  if (tipi == 'accoglienza') {
    // CAREFUL WITH THAT AXE, EUGENE !! original "#" must be replaced here with "_"
    var howStelle = row['accoglienza_stelle'];
//     console.log(howStelle);
    html += "<div class='"+isListView(view)+"-accoglienza'><span>"+tipi_specifici+"</span>";
    
    if (howStelle != null) {
//       console.log(nome+" "+howStelle);
      html += "<span class='"+isListView(view)+"page-hotel-stars-prefix'> a </span>";
      html += "<span>"+howStelle+"</span>";
      if (howStelle == 1) {
	html += "<span class='"+isListView(view)+"page-hotel-star-suffix'> stella</span>";
      }
      if (howStelle > 1) {
	html += "<span class='"+isListView(view)+"page-hotel-stars-suffix'> stelle</span>";
      }
    }
    html += "</div>";
  } // end accoglienza
  
  // start ristoro
  if (tipi == 'ristoro') {
    html += "<div class='"+isListView(view)+"-ristoro'><span>"+tipi_specifici+"</span>";
    // CAREFUL WITH THAT AXE, EUGENE !! original # must be replaced here with _
    var cucina = row['divertimento-e-ristoro_cucina'];
    if (cucina) {
      html += "<span class='"+isListView(view)+"page-cooking'> con particolare cucina </span><span>"+cucina+"</span>";
    }
    html += "</div>";
  } // end ristoro
  
  
  // start address
  var indirizzo = row.indirizzo;
  if (indirizzo != "") {
    html += "<div class='"+isListView(view)+"-address'><i class='"+isListView(view)+"page-address'>Indirizzo:</i> ";
    var numeroCivico = row['numero-civico'];
// console.log(row);
    var indirizzoCompleto = indirizzo+" "+numeroCivico+", "+row.citta;
    html += "<a href='geo:"+indirizzoCompleto+"'><span ";
    if (isListView(view) == "list") {
      html += "style='margin-left:-35px;'"
    }
    html +=">"+indirizzo+" "+numeroCivico+"</span></a>";
    if (isListView(view) == "list") {
      if (row.quartiere) {
	html += "(<span id='"+isListView(view)+"page-district'>quartiere<span>"+"<span>"+row.quartiere+"</span>)";
      }
    }
    html += "</div>";
  }
  // end address block
 
  // start telefono/mobile
  html += "<div class='"+isListView(view)+"-phones'>";
  var telefono = row.telefono;
  var mobile = row.mobile;
  if (telefono) {
      html += "<div><i class='"+isListView(view)+"page-tel'>tel:</i><a href='tel:"+telefono+"'><span>"+telefono+"</span></a></div>";
  } 
  if (mobile) {
    html += "<div><i class='"+isListView(view)+"page-mobile'>mobile:</i><a href='tel:"+mobile+"'><span>"+mobile+"</span></a></div>";
  }  
  html += "</div>"; 
  // end telefono/mobile
  
  // start internet (email/web)
  html += "<div class='"+isListView(view)+"-internet'>";
  var webMargin = "0";
  var email = row.email;
  if (email) {
      html += "<div><i class='"+isListView(view)+"page-email'>email:</i><a href=mailto:"+email;
      if (isListView(view)=="list") {
         html += " style='/*margin-left:-30px;*/ margin-top: -2px;"
      }
      html += "'>"+email+"</a></div>";
      webMargin = "8";
  }
  var web = row.web;
  if (web) {
   html += "<div><i class='"+isListView(view)+"page-web'>web:</i><a href="+web+" style='margin-top: 1px; "; /*margin-left:";*/
   if (isListView(view)=="list") {
      html += "1";
   }
//    html += webMargin+"px;"
   html += "'>"+web+"</a></div>";
  }
  html += "</div>"; // end email/mobile
    
  // start details link
  html += "<div class='"+isListView(view)+"-details'>";
  html += "<a class='"+isListView(view)+"page-details-link' href=#page-details";
  var actualLocation = window.location.hash;
  html += " onclick=\"queryDetailsCard('"+nome+"','"+actualLocation+"');\" >» Dettagli «</a>";
  html += "</div>";
  // end dwp
  
  html += "</div>"; // end subheader
  html += "</div>"; // end outer div
  
//   console.log(html);
  
  return html;
}

function isListView(view) {
  if ((typeof view) === "boolean")
    if (view == true || view == "true")
      return "list";
    if (view == false || view == "false")
      return "map";
}
