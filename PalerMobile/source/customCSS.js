/*
 * Copyleft BeardTeam, 2014
 * Released under GPLv3
 *
 * Author: Massimiliano Leone https://plus.google.com/+MassimilianoLeone
 *
 * based on https://github.com/sfbrigade/Mobile-Fusion-Tables
 */
function customCSSFunction() {
  var cssString = " \
        .infobox-header, .ui-li-desc, li, #score-text { font-family: Arial, Helvetica, Geneva, sans-serif; white-space:normal;} \
        .infobox-list { margin: 0px 0px 0px 7px; } \
        .infobox-map { width:auto; height:auto; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px;} \
        .infobox-header { display:inline; padding-right: 10px; } \
        .moreinfo { margin-left:7px; min-width:18px; position:absolute; \
                top:45%; bottom:45%; min-height:18px; } \
        .score { float:left; font-size:medium; padding:5px; border:1px solid black; margin:2px 7px 5px 0px; } \
        .score.grn_blank { background-color: #00de3c; color: white; } \
        .score.ltblu_blank { background-color: #55d7d7; color: white; } \
        .score.orange_blank { background-color: #ff9c00; color: white; } \
        .score.red_blank { background-color: #fb6155; color: white; } \
        .map-subheader { margin-top: -15px; } \
        .map-nome { margin-top: -15px; } \
        .map-tipo {} \
        .map-address, .map-phones, .map-internet, .map-details { padding-top: 2px; } \
        .list-subheader { margin-top: -15px; } \
        .list-ristoro, .list-accoglienza { margin-top: -12px; margin-bottom: -10px; } \
        .map-accoglienza, .map-ristoro { margin-bottom: 10px; } \
        .list-nome, .list-accoglienza, .list-ristoro, .list-address, .list-phones, .list-internet, .list-details  { margin-left: 10px; } \
        .list-address, .list-phones, .list-internet, .list-details { margin-top: 0.5em; } \
        .list-email { margin-left: 2px; } \
        .list-tipo { margin: 2px 0px 1px 0px; } \
        .list-details { margin-top: 5px; } \
        .listpage-email, .listpage-web, .listpage-tel, .mappage-email, .mappage-web, .mappage-tel, .mappage-mobile { margin-right: 5px; } \
        .mappage-details-link { margin-top: 10px; margin-left: 15px; } \
        .details-orari, .details-contatti, .details-address { margin-top: 10px; } \
    ";
    return cssString;
}
/* old: .infobox-list { margin: 0px 0px 0px 7px; } \ */
function fixCSS() {
  setTimeout(function() {
  $('a.ui-link-inherit').filter( function() { 
    if (this.id.match(/listrow-[0-9]/) && (this.innerHTML == "")) { 
      $(this).hide();
    }
  }), 2500 });
  
  $('.infobox-container').livequery( function() {
    var ic = $(this).find('.infobox-container');
    if ( ic.length != 0) {
      var infobox = $(ic).parent().parent().parent().parent().children()[0].children[0].children[1];
      infobox.style["background-color"] = "#ffffff";
      infobox.style["border-radius"] = "10px";
      $(".gm-style-iw").parent().parent().children()[0].children[0].children[3].style["background-color"] = null
    }
  }, function() {
    
  })
}
fixCSS();