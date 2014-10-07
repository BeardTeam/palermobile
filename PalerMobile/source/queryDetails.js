/*
 * Copyleft BeardTeam, 2014
 * Released under GPLv3
 *
 * Author: Massimiliano Leone https://plus.google.com/+MassimilianoLeone
 *
 * addon for https://github.com/sfbrigade/Mobile-Fusion-Tables
 */

function queryDetailsCard(nome, previousLocation) {

  var queryPage = "https://www.google.com/fusiontables/embedviz?viz=CARD&q=select+*+from+"+PalerMobile.Global.fusionTableID;
      queryPage += "+where+'nome'='"+nome+"'&tmplt=2&cpr=3\"";
  
  function jsonpCallback(data, textStatus, jqXHR) {
    var html = "<div>";
    html += "<h3 class='infobox-header'>"+data.nome+"</h3>"; // nome
    html += "<p class='infobox-subheader'>"; // start subheader
    
    html += "<div class='details-tipo'>";
    
    if (data['consolato#console']) { // consolato section
      html += "<div><b class='details-tipo-consulate'>Console: </b>"+data['consolato#console']+"</div>";
      html += "<div><b class='details-tipo-opening_hours'>Orari di apertura:</i></div>";
      html += "<div><i class='details-tipo-days'>giorni: </i>"+data['consolato#orari#giorni']+"</div>";
      html += "<div><i class='details-tipo-begin_hour'>dalle:</i>"+Number(data['consolato#orari#apertura']).toFixed(2)+"</div>";
      html += "<div><i class='details-tipo-end-hour'>alle:</i>"+Number(data['consolato#orari#chiusura']).toFixed(2)+"</div>";
      var note = data['consolato#orari#note'];
      if (note) {
         html += "<div><b class='details-tipo-note'>note:</b>"+note+"</div>";
      }
    } // end consolato
    
    var tipi_specifici = data['tipi-specifici'];
    
    // accoglienza section
    var stelle = data['accoglienza#stelle'];
    if ( isNaN(stelle) == false ) { 
      html += "<div><b class='details-accomodate-category'>Categoria: </b><span>"+tipi_specifici+"</span></div>";
      html += "<div><b class='details-accomodate-stars'>Stelle: </b><span>"+stelle+"</span></div>";
      html += "<div><b class='details-accomodate-rooms'>Camere: </b><span>"+data['accoglienza#camere']+"</span></div>";
      if (data['accoglienza#sale_meeting']) {
	html += "<div><b class='details-accomodate-meeting'>Sale Meeting: </b><span>"+data['accoglienza#sale_meeting']+"</span></div>";
      }
      if (data['accoglienza#residences']) {
	html += "<div><b class='details-accomodate-residences'>Residences: </b><span>"+data['accoglienza#residences']+"</span></div>";
      }
      if (data['accoglienza#manager']) {
	html += "<div><b class='details-accomodate-director'>Direttore: </b><span>"+data['accoglienza#direttore']+"</span></div>";
      }
      if (data['accoglienza#gestione']) {
	html += "<div><b class='details-accomodate-management'>Gestione: </b><span>"+data['accoglienza#gestione']+"</span></div>";
      }
      if (data['accoglienza#informazioni']) {
	html += "<div><b class='details-accomodate-informations'>Informazioni: </b><span>"+data['accoglienza#informazioni']+"</span></div>";
      }  
    } // end accoglienza
    
    if (data.tipi.indexOf('ristoro')>=0 || data.tipi.indexOf('divertimento')>=0) { // ristoro/divertimento section      
      html += "<div><i>"+tipi_specifici+"</i></div>";
      if (data['divertimento-e-ristoro#cucina']) {
	html += "<div><b class='details-cooking'>Cucina:</b><span> "+data['divertimento-e-ristoro#cucina']+"</span></div>";
      }
      html += "<div class='details-orari'><b class='details-tipo-opening_hours'>Orari di apertura:</b></div>";
      html += "<div><i class='details-tipo-days'>giorni: </i><span>"+data['divertimento-e-ristoro#orari#giorni']+"</span></div>";
      html += "<div><i class='details-tipo-begin_hour'>dalle:</i><span>"+Number(data['divertimento-e-ristoro#orari#apertura']).toFixed(2)+"</span></div>";
      html += "<div><i class='details-tipo-end_hour'>alle:</i><span>"+Number(data['divertimento-e-ristoro#orari#chiusura']).toFixed(2)+"</span></div>";
      html += "<div><i class='details-tipo-note'>note:</i><span>"+data['divertimento-e-ristoro#orari#note']+"</span></div>";
    } // end divertimento/ristoro

    if (data.tipi.indexOf('visitare')>=0) {
      html += "<div class='details-visitare'>";
      html += "<div><i>"+tipi_specifici+"</i></div>";
            
      var orari_note = data['luogo-da-visitare#orari#note'];
      if (orari_note != undefined)
	html += "<div><i class='details-tipo-opening_hours'>Orari di apertura:</i><span> "+orari_note+"</span></div>";
      
      var orari_servizi = data['luogo-da-visitare#orari#servizi'];
      if (orari_servizi != undefined)
	html += "<div><i class='services'>Servizi:</i><span> "+orari_servizi+"</span></div>";
      
      var orari_visite = data['luogo-da-visitare#orari#visite'];
      if (orari_visite)
	html += "<div><i class='details-allowing-visit'>Visite:</i><span> "+orari_visite+"</span></div>";
      
      var orari_prezzi = data['luogo-da-visitare#orari#prezzi'];
      if (orari_prezzi)
	html += "<div><i class='details-prices'>Prezzi:</i><span> "+orari_prezzi+"</span></div>";
      
      var informazioni_storiche = data['luogo-da-visitare#informazioni-storiche'];
      if (informazioni_storiche)
	html += "<div><i class='details-historical_informations'>Informazioni storiche:</i><span> "+informazioni_storiche+"</span></div>";
      
      var note = data['luogo-da-visitare#note'];
      if (note)
	html += "<div><i class='details-tipo-note'>Note:</i><span> "+note+"</span></div>";
      
      var gestore_telefono = data['luogo-da-visitare#gestore#telefono'];
      if (gestore_telefono)
	html += "<div><i class='details-place-manager-phone'>Gestione:</i><span> "+gestore_telefono+"</span></div>";
      
      
      html += "</div>"; // end visitare
    }
    html += "</div>"; // end details-tipo
    
    var telefono = data.telefono;
    var mobile = data.mobile;
    var email = data.email;
    var web = data.web;
    if (hasValue(telefono) || hasValue(mobile) || hasValue(email) || hasValue(web)) {
      html += "<div class='details-contatti'><b class='details-contacts'>Contatti:</b>";
    
      if ( hasValue(telefono) || hasValue(mobile) ) {
	html += "<div class='details-phone'>"; // start telefono/mobile
  //       console.log(telefono+" "+mobile);
	if (hasValue(telefono)) {
	  html += "<div><i class='details-landphone'>telefono:</i><span> "+telefono+"</span></div>";
	}
	if (hasValue(mobile)) {
	  html += "<div><i class='details-mobile'>mobile:</i><span> "+mobile+"</span></div>";
	}
	html += "</div>"; // end details-phone
      }
    
    
      // start email/mobile    
      if (email || web) {
	html += "<div class='details-internet'>";
	if (email)
	    html += "<div><i class='details-email'>email:</i> <a href=mailto:"+email+">"+email+"</a></div>";
	if (web)
	  html += "<div><i class='details-web'>web:</i> <a href="+web+">"+web+"</a></div>";
	html += "</div>"; // end details-internet
      } // end email/mobile
      
      html += "</div>"; // end details-contatti
    }
    
    // start address block
    var indirizzo = data.indirizzo;
    if (hasValue(indirizzo)) {
//       console.log("indiriss: "+indirizzo);
      html += "<div class='details-address'>";
      html += "<b class='details-address-prefix'>Indirizzo:</b><span>"+indirizzo+" "+data['numero-civico']+", "+data.citta+"</span>";
      if (data.quartiere.length>1 ) {
	html += "<span class='details-district'>, quartiere</span><span> "+data.quartiere+"</span>";
      }
      html += "</div>"; // end address block
    }
    
    html += "</p></div>"; // end infobox-subheader, e div iniziale
//     html += "</div>"; // div iniziale
    
    $('#details-content').html( html );
    
    if (PalerMobile.Global.language != undefined) { // translate
          
      var classes = Localization[Localize.locale].label.details_page.class;      
      for (var cl in classes) {
	if ( $('.'+cl).length > 0 ) {
	  $('.'+cl).html( classes[cl] );
	}
      }
      
      setTimeout(function() {
	$('#list_back .ui-btn-inner .ui-btn-text').html( Localization[Localize.locale].button.details_page.back );
	$("h3.ui-title[role='heading'][aria-level='1']:not(:has(*))").html( Localization[Localize.locale].title.details_page.details);
      },150);
      
      
      
    }
    
  }
  
  function failureCallback(jqXHR, textStatus, errorThrown) {
     if (jqXHR.status == 200 && textStatus == 'OK') { // not error - workaround
        console.log(jqXHR);
     } else {
      var html = "<div class='details-no_details'>Spiacente, non è stato possibile ottenere ulteriori dettagli</div>";
      $('#details-content').html( html );
      setTimeout(function(){
         window.location.hash = previousLocation;
      }, 3000);
      
//       var loadingHtml = "<img src='images/ajax-loader.gif'>";
      if (Localization[Localize.locale].id.leaf.details_page.id.data_loading != undefined)
// 	loadingHtml += "<span>"+Localization[Localize.locale].id.leaf.details_page.id.data_loading+"</span>";
	loadingHtmlText = Localization[Localize.locale].id.leaf.details_page.id.data_loading;
      else
// 	loadingHtml += "<span>Caricamento dei dati...</span>";
	loadingHtmlText = "Caricamento dei dati...";
      $('#details-content-text').html( loadingHtmlText );
     }
  }
  
  function hasValue(value) {
    if (value=="")
      return false;
    if (value==="")
      return false;
    if (value === undefined)
      return false;
    if (value == undefined)
      return false;
    if (value == null)
      return false;
    if (value === null)
      return false;
    if (value.length === 0)
      return false;
    if (value.length == 0)
      return false;
//     console.log("value: "+value+" returning true");
    return true;
  }

  // webservice script url: https://script.google.com/macros/d/MoqSkcdItQkEw5tEIC49z0hNrVEl51b0O/edit?uiv=2&mid=ACjPJvEUHECrY0ReMnOvXp6yB4AaNFSFrQJhjO1C7mBkhDVbxsYoHonStDmqswtmqKR9HDvL5xKNKVrJ1ipTnLUkmm5P_QniCq81cfEtMbErpB7CG-E87tGx0mL38Wa-IFm0SQZ4mjSmVjE
  var queryPage = "https://script.google.com/macros/s/AKfycbyeSEK-1Xh1mkDZUsRjG1xKFamNhJQwAtyrQF4s620/dev?nome="+nome+"&callback?";
  
  $.ajax({
   url: queryPage,
   async: false,
   dataType: 'jsonp',
   timeout: 7000,
   success: jsonpCallback
  ,error: failureCallback
//   ,complete: completedCallback
  });

  
  return true;
}
