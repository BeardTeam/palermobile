/*
 * Copyleft BeardTeam, 2014
 * Released under GPLv3
 *
 * Author: Massimiliano Leone https://plus.google.com/+MassimilianoLeone
 *
 */

function queryDetailsCard(nome,previousLocation) {

  var queryPage = "https://www.google.com/fusiontables/embedviz?viz=CARD&q=select+*+from+"+PalerMobile.Global.fusionTableID;
      queryPage += "+where+'nome'='"+nome+"'&tmplt=2&cpr=3\"";
  
  function jsonpCallback(data, textStatus, jqXHR) {
//    console.log("previousLocation: "+previousLocation);
    var html = "<div>";
    html += "<h4 class='infobox-header'>"+data.nome+"</h4>"; // nome
    html += "<p class='infobox-subheader'>"; // start subheader
    
    html += "<div class='tipo'>";
    var tipi_specifici = data['tipi-specifici'];
    if (data['consolato#console']) { // consolato section      
      html += "<div><b>Console: </b>"+data['consolato#console']+"</div>";
      html += "<div><b>Orari di apertura:</b></div>";
      html += "<div>giorni: "+data['consolato#orari#giorni']+"</div>";
      html += "<div>dalle:"+Number(data['consolato#orari#apertura']).toFixed(2)+"</div>";
      html += "<div>alle:"+Number(data['consolato#orari#chiusura']).toFixed(2)+"</div>";
      var note = data['consolato#orari#note'];
      if (note) {
         html += "<div>note:"+note+"</div>";
      }
    }
    var stelle = data['accoglienza#stelle'];
    if ( isNaN(stelle) == false ) { // accoglienza section
      html += "<div><b>Categoria: </b>"+tipi_specifici+"</div>";
      html += "<div><b>Stelle: </b>"+stelle+"</div>";
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
      
      html += "<div><i>"+tipi_specifici+"</i></div>";
      if (data['divertimento-e-ristoro#cucina']) {
	html += "<div><b>Cucina:</b> "+data['divertimento-e-ristoro#cucina']+"</div>";
      }
      html += "<div class='details-orari'><b>Orari di apertura:</b></div>";
      html += "<div>giorni: "+data['divertimento-e-ristoro#orari#giorni']+"</div>";
      html += "<div>dalle:"+Number(data['divertimento-e-ristoro#orari#apertura']).toFixed(2)+"</div>";
      html += "<div>alle:"+Number(data['divertimento-e-ristoro#orari#chiusura']).toFixed(2)+"</div>";
      html += "<div>note:"+data['divertimento-e-ristoro#orari#note']+"</div>";     
    }

    if (data.tipi.indexOf('visitare')>=0) {
      html += "<div class='visitare'>";
      html += "<div><i>"+tipi_specifici+"</i></div>";
            
      var orari_note = data['luogo-da-visitare#orari#note'];
      if (orari_note !== "") {
	html += "<div><i>Orari:</i> "+orari_note+"</div>";
      }
      
      var orari_servizi = data['luogo-da-visitare#orari#servizi'];
      if (orari_servizi !== "") {
	html += "<div><i>Servizi:</i> "+orari_servizi+"</div>";
      }
      
      var orari_visite = data['luogo-da-visitare#orari#visite'];
      if (orari_visite)
	html += "<div><i>Visite:</i> "+orari_visite+"</div>";
      
      var orari_prezzi = data['luogo-da-visitare#orari#prezzi'];
      if (orari_prezzi)
	html += "<div><i>Prezzi:</i> "+orari_prezzi+"</div>";
      
      var informazioni_storiche = data['luogo-da-visitare#informazioni-storiche'];
      if (informazioni_storiche)
	html += "<div><i>Informazioni storiche:</i> "+informazioni_storiche+"</div>";
      
      var note = data['luogo-da-visitare#note'];
      if (note)
	html += "<div><i>Note:</i> "+note+"</div>";
      
      var gestore_telefono = data['luogo-da-visitare#gestore#telefono'];
      if (gestore_telefono)
	html += "<div><i>Gestione:</i> "+gestore_telefono+"</div>";
      
      
      html += "</div>"; // end visitare
    }
    html += "</div>";
    
    html += "<div class='details-contatti'><b>Contatti:</b>";
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
    
    html += "<div class='details-address'><div><b>Indirizzo:</b></div><div>"+data.indirizzo+" "+data['numero-civico']; // start address block
    if (data.quartiere) {
      html += "(quartiere "+data.quartiere+")";
    }
    html += "</div></div>"; // end address block

    html += "</div>";
    
    html += "</p></div>";
    
    $('#details-content').html( html );
  }
  function failureCallback(jqXHR, textStatus, errorThrown) {
     if (jqXHR.status == 200 && textStatus == 'OK') { // not error - workaround
        console.log(jqXHR);
     } else {
      var html = "<div>Spiacente, non è stato possibile ottenere ulteriori dettagli</div>";
      $('#details-content').html( html );
      setTimeout(function(){
         window.location.hash = previousLocation;
      }, 3000);
     }
  }
  function completedCallback(jhXHR, textStatus) {
//     console.log("complete - previousLocation: "+previousLocation);
     if (previousLocation !== "") {
//        window.onload = function() {
//        $(window).load( function() {
         setTimeout(function() {        
           console.log($('#list_back').attr("href"));
//           $('#list_back').attr("href","index.html"+previousLocation);
           $('#list_back').click(function(){
              window.location = "index.html"+previousLocation;
           };)
           console.log($('#list_back').attr("href"));
        },1000);
     }
  }

  var queryPage = "https://script.google.com/macros/s/AKfycbyeSEK-1Xh1mkDZUsRjG1xKFamNhJQwAtyrQF4s620/dev?nome="+nome+"&callback?";
  
  $.ajax({
   url: queryPage,
   async: false,
   dataType: 'jsonp',
   timeout: 10000,
   success: jsonpCallback
  ,error: failureCallback
  ,complete: completedCallback
  });

  
  return true;
}
