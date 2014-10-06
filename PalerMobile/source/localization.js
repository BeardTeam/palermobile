function checkLocale() {
  var lang = navigator.language;
  if (lang === null) {
    alert('Error getting locale\n');
  }
//   if (lang.match(/it/i)) {
//     return "it";
//   };
  if (!lang.match(/it/i)) {
    return "en";
  };
  // default
//   return "it";
}

// var locale = checkLocale();
// if (Localization.hasOwnProperty(locale)) {
//   PalerMobile.Global.language = locale;
// }
// // console.log(Pa lerMobile.Global.language);
// locale = null;

PalerMobile.Global.language = checkLocale();

var Localize = {
  locale: PalerMobile.Global.language,
  homepage: "",
  about: "",
  search_page: ""
}

function setLocaleFunctions() {

  if (Localize.locale != undefined) {
//   if (PalerMobile.Global.language != "default") {
//     console.log( checkLocale() );
//     console.log(Localize.locale);
    Localize.homepage = function() {
      var ids = Localization[Localize.locale].button.homepage.id;
      for (d in ids) {
	$('#'+d).html( ids[d] );
      }
      
      var classes = Localization[Localize.locale].button.homepage.classes["ui-btn-inner_ui-btn-text"];
      for (d in classes) {
	$('#'+d+' .ui-btn-inner .ui-btn-text').html( classes[d] );
      }
    };
    Localize.about = function() {
      setTimeout(function() {
	// back to map button	
	$('#page-about .ui-btn-inner .ui-btn-text').html( Localization[Localize.locale].button.about_page.about_back );
	// about page title
	$("h3.ui-title[role='heading'][aria-level='1']:not(:has(*))").html( Localization[Localize.locale].title.aboutpage.about_page_title );
      },100);
    };
    Localize.search_page = function() {
      setTimeout(function() {
	// back to map button
	var buttons = ["back", "top"];
	var buttonsIds = Localization[Localize.locale].button.search_page.id;
	for (var bi in buttonsIds) {
	  $('#'+bi+' .ui-btn-inner .ui-btn-text').html( buttonsIds[bi] );
	  /*Localization[Localize.locale].id.class["ui-btn-inner_ui-btn-text"].search_page["search_"+buttons[b]] */
	}
	// search page title
	$("h3.ui-title[role='heading'][aria-level='1']:not(:has(*))").html( Localization[Localize.locale].title.search_page.search_page_title );
	
	// for "nome"
	var column_labels = Localization[Localize.locale].label.search_page.fixed;
	for (var l in column_labels) { // search within "en" because it is default
	  var cl = column_labels[l];
	  $("label[for='sc_"+ safeField(l) +"']").html( Localization[Localize.locale].label.search_page.fixed[ l ] );
	}
	
	// some labels (2)
	var id_labels = Localization[Localize.locale].label.search_page.id.leaf;
	for (var l in id_labels) {
	  var translated = id_labels[l];
	  $("#"+l).html( translated );
	}
	
	var id_labels_with_siblings = Localization[Localize.locale].label.search_page.id.with_sibling;
	for (var l in id_labels_with_siblings) {
	  var translated = id_labels_with_siblings[l];
	  $("#"+l).html( translated );
	  $("#"+l).prev('.ui-btn-inner').children()[0].innerHTML = translated;
	  
	}
	
	var placeholders_labels = Localization[Localize.locale].label.search_page.placeholder;
	for (var p in placeholders_labels){
	  var translated = placeholders_labels[p];	
	  $('#'+p).attr('placeholder',translated)
	}
		
	
	// dropdown [dependant labels] (3)
	var dep_drop_labels = Localization[Localize.locale].label.search_page.various;
	for (var l in dep_drop_labels) { // search within "en" because it is default
	  var translated = Localization[Localize.locale].label.search_page.various[ l ];
  // 	console.log(l+" -> "+translated);
	  $("label[for='sc_"+ safeField(l) +"']").html( translated );
	}
	
	// radius select
  //       console.log( Localization[Localize.locale].dropdown.search_page["radius_unlimited"] );
	var rst = Localization[Localize.locale].dropdown.search_page.radius_unlimited;
	$('#section-search').find('span.input-small').html( rst  );
	$('#search_radius option:selected').html( rst );
	
	// dropdowns
	// per ogni dropdown esiste un label posto sul dropdown medesimo, contenente la medesima stringa dell'option selected
	var option_span_labels = $('#page-search').find('div.ui-select').find('span.ui-btn-text span:first');
	for (var o in option_span_labels) {
	  var osp = option_span_labels[o];
	  var translated = Localization[Localize.locale].dropdown.search_page[osp.innerHTML];
	  if (translated != undefined)
	    osp.innerHTML = translated;
	}
	var cs = MapsLib.searchPage.columns;
	for (var c in cs) {
	  if (cs[c].type == "dropdown") {
	    
	    // l'id del dropdown è una stringa uguale al value di "for" del label alla sua sx (es: #sc_Cosa_cerchi a meno del #)
	    var label_text = cs[c].label;
	    var label = "sc_"+safeField( label_text );

	    var entries = cs[c].entries;
	    for (var e in entries) {
	      var to_change = entries[e][0];
	      
	      $('#'+label).each(function() {
		// show/hidden dropdown
		$(this).children("option").each(function() {		  
		  var dropdown_option_to_change = $(this).html();		  
		  var translated = Localization[Localize.locale].dropdown.search_page.dropdown_option_to_change;
		  $(this).html(translated);		  
		});
	      })
	    }
	  }
	}
	
	// checkboxes
	$('div.ui-checkbox span.ui-btn-text').each(function() {
  // 	setTimeout(function() {
	    var cb = $(this).html();
	    var to_change = Localization[Localize.locale].checkbox.search_page[cb];
  //   	console.log(cb+" - "+to_change);
    // 	console.log(this);
	    this.innerHTML = to_change ;
  // 	  },2500);
	});
	
	// slider
	var sliderColumns = MapsLib.searchPage.columns;
	for (var c in sliderColumns) {
	  if (sliderColumns[c].type == "slider") {
	    var label_text = sliderColumns[c].label;
	    var column = sliderColumns[c].column;
	    var label_for_attribute = "sc_min_"+safeField( column )+"-label";
	    
	    
	    var to_change = Localization[Localize.locale].slider.search_page[ $('#'+label_for_attribute).html() ];
	    
	    $('#'+label_for_attribute).html( to_change );
	    
  // 	  console.log(label_for_attribute+" -> "+ $('#'+label_for_attribute).html() +" -> "+to_change);
	  }
	}
	
	// alert message
	MapsLib.useNearbyLocation.boundsExceededMessage = Localization[Localize.locale].message.map.alert_message_text;

      },100);
    };

    Localize.list_page = function() {
//       console.log("here");
      // title
      $('#page-list-title').html( Localization[Localize.locale].title.list_page["page-list-title"] );
      // back button
      setTimeout(function() {
	$('#list_back .ui-btn-inner .ui-btn-text').html( Localization[Localize.locale].button.list_page.back_to_map )
      },150);
      
      // labels
      var list_classes = Localization[Localize.locale].label.list_page.class;
      setTimeout(function() {
	for (var lc in list_classes) {
	  var sel = '.'+lc;
	  if ( $(sel).length > 0 ) {
// 	    console.log( $(sel).html()+" "+lc+" "+list_classes[lc] );
	    $(sel).html( list_classes[lc] );
	  }
	}
      },500);
    }
    
  }
}

function safeField(val) {
  return (val == undefined) ? "" : val.replace(/ /g, "_").replace(/\./g, "").replace(/:/g, "").replace(/\?/g, "").replace(/#/g, "_").replace(/\$/g, "_");
}

setLocaleFunctions();

$(document).ready(function() {
  if (Localize.locale != undefined)
    Localize.homepage();
});
