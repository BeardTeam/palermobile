function checkLocale() {
  var lang = navigator.language;
  if (lang === null) {
    alert('Error getting locale\n');
  }
  if (lang.match(/it/i)) {
    return "it";
  };
  if (lang.match(/en/i)) {
    return "en";
  };
//   alert('locale: ' + lang);
}

var Localization = {
  it: {
    // div
    
    "about": "Info",
    
    id: {
      "nearby-name": "Trovami"
    },
    "search_page": "Filtra",
    "page-list-title": "Lista risultati",
    "about_back": "Torna alla mappa",
    "list_back": "Torna alla mappa",
    "search_back": "Torna alla mappa",
    "search_top": "Cerca",
    "search": "Cerca",
    
    
    // label
    "search_address_label": "Indirizzo",
    "search_radius_label": "Raggio di ricerca",
    
    "name": "Nome:",
    "search_for": "Cosa cerchi?",
    
  },
  en: {
    id: {
      leaf: {
	// home page
	homepage: {
	  "nearby-name": "Find me"
	}
      },
      "ui-btn-inner_ui-btn-text": {
	// home page
	homepage: {
	  "about": "About",
	  "search_page": "Filter",
	  "listview": "Results list"
	},
	
	aboutpage: {
	// about page
	  "about_back": "Map"
	},
	
	//search page
	searchpage: {
	  "search_back": "Map",
	  "search_top": "Search"
	}
      }
    },
    title: {
      // about page
      aboutpage: {
	"about_page_title": "About Us"
      },
      
      //search page
      searchpage: {
	"search_page_title": "Filter"
      }
    },
    
    "page-list-title": "Results list",
    "list_back": "Map",
    "search": "Search",
     
    
    
    label: {
      searchpage: {
	// these below must have same name of those specified for columns in fusiontable_settings.js !
	"search_address_label": "Address",
	"search_radius_label": "Search radius",
	"nome": "Name:",
	"Cosa_cerchi": "Search for?",
	search_for_dropdown: {
	  
	}
      }
    },
    
    dropdown: {
      searchpage: {
	"radius_unlimited": "Unlimited",	
// 	"activity_type:"
	// search_for dropdown
	"Qualunque attività": "Any activity",
	"Agenzie di Viaggi": "Travel agency",
	"Consolati": "Consulate",
	"Dove alloggiare": "Accomodate",
	"Divertimenti": "Amusement",
	"Ristoro": "Eat",
	"Aperitivo - Bar - Caffè": "Aperitif - Bar - Cafè",
	"Luoghi da visitare": "Places to visit",
	"Parcheggi": "Parking",
	"Spazi verdi": "Green Areas",
	
	"Qualunque tipo di ristoro": "Any restaurant type",
	"Ristorante": "Italian restaurant",
	"Pizzeria": "Pizza",
	"Pub": "Pub",
	"American Bar": "American Bar",
	"Sushi Bar": "Sushi Bar",
	"Street Food": "Street Food",
	
	"Qualunque tipo di divertimento": "Any amusement",
	"Discoteca": "Disco",
	"Discopub": "Discopub",

	"Qualunque tipo di alloggio": "Any accomodate",
	"Hotel": "Hotel",
	"Bed and Breakfast": "Bed and Breakfast",
	"Affittacamere": "Room renting",
	"Ostello": "Hostel",
	"Casa ferie": "Holiday house",
	"Residence": "Residence",

	"Qualunque tipo di cucina": "Any cooking",
	"Italiana": "Italian",
	"Pizza": "Pizza",
	"Tipica": "Typical",
	"Tipica Siciliana": "Typical Sicilian",
	"Tipica Palermitana": "Palermo typical",
	"Internazionale": "International",
	"Europea": "European",
	"Spagnola": "Spanish",
	"Fusion": "Fusion",
	"Mediterranea": "Mediterranean"
      }
    },
    checkbox: {
      searchpage: {
	"Chiese":"Churches",
	"Teatri storici":"Historical Theatres",
	"Oratori":"Horatories",
	"Gallerie artistiche e musei":"Musea and art galleries",
	"Biblioteche":"Biblioteques",
	"Zone archeologiche":"Archeological areas",
	"Monumenti":"Monuments",
	"Palazzi":"Buildings",
	"Dimore e Ville Storiche":"Historical Buildingss",
	"Santuari":"Sanctuaries",
	"Wine bar":"Wine bar",
	"Cocktail bar":"Cocktail bar",
	"Bar":"Bar",
	"Sale meeting": "Meeting room"
      }
    }
    
  }
}

var locale = checkLocale();
if (Localization.hasOwnProperty(locale)) {
  PalerMobile.Global.language = locale;
}
// console.log(PalerMobile.Global.language);
locale = null;

var Localize = {
  locale: PalerMobile.Global.language,
  homepage: function() {
    for (d in Localization[Localize.locale].id.leaf.homepage) {
      $('#'+d).html( Localization.en.id.leaf.homepage[d] );
    }
    
    for (d in Localization[Localize.locale].id["ui-btn-inner_ui-btn-text"].homepage) {
      $('#'+d+' .ui-btn-inner .ui-btn-text').html( Localization[Localize.locale].id["ui-btn-inner_ui-btn-text"].homepage[d] );
    }
  },
  about: function() {
    setTimeout(function() {
      // back to map button
      $('#page-about .ui-btn-inner .ui-btn-text').html( Localization[Localize.locale].id["ui-btn-inner_ui-btn-text"].aboutpage["about_back"] );
      // about page title
      $("h3.ui-title[role='heading'][aria-level='1']:not(:has(*))").html( Localization[Localize.locale].title.aboutpage["about_page_title"] );
    },100);
  },
  searchpage: function() {
    setTimeout(function() {
      // back to map button
      var buttons = ["back", "top"];
      for (b in buttons) {
	$('#search_'+buttons[b]+' .ui-btn-inner .ui-btn-text').html( Localization[Localize.locale].id["ui-btn-inner_ui-btn-text"].searchpage["search_"+buttons[b]] );
      }
      // search page title
      $("h3.ui-title[role='heading'][aria-level='1']:not(:has(*))").html( Localization[Localize.locale].title.searchpage["search_page_title"] );
      
      // some labels (1) - TODO: could be moved above, since they are user customizable
      var column_labels = ["nome", "Cosa_cerchi"];
      for (l in column_labels) { // search within "en" because it is default
	$("label[for='sc_"+column_labels[l]+"']").html( Localization[Localize.locale].label.searchpage[column_labels[l]] );
      }
      
      // some labels (2)
      var id_labels = ["search_address_label", "search_radius_label"];
      for (l in id_labels) {
	$("#"+id_labels[l]).html( Localization[Localize.locale].label.searchpage[id_labels[l]] );
      }
      
      // radius select
//       console.log( Localization[Localize.locale].dropdown.searchpage["radius_unlimited"] );
      var rst = Localization[Localize.locale].dropdown.searchpage["radius_unlimited"];
      $('#section-search').find('span.input-small').html( rst  );
      $('#search_radius option:selected').html( rst );
      
      // dropdowns
      var cs = MapsLib.searchPage.columns;
      for (var c in cs) {
	if (cs[c].type == "dropdown") {
	  var label = "sc_"+safeField( cs[c].label );
	  var entries = cs[c].entries;
// console.log( entries );
	  for (var e in entries) {
	    var to_change = entries[e][0];
// 	    console.log( label +" "+to_change);
	    $('#'+label).each(function() {
	      // show/hidden dropdown
	      $(this).children("option").each(function() {
		
		// "any activity" label
		var translated = Localization[Localize.locale].dropdown.searchpage["Qualunque attività"];
		var l = $('#page-search').find('div.ui-select').find('span.ui-btn-text span:first')[1];
		if (l != undefined)
		  l.innerHTML = translated;
		
		translated = Localization[Localize.locale].dropdown.searchpage[ $(this).html() ];
// 		console.log( $(this).html()+" -> "+translated  );
		$(this).html( translated );
	      });
// 	      console.log ( $(this+" option").text() );
// 	      $(this).html();
	    })
	  }
	}
      }
      
      // checkboxes
      $('div.ui-checkbox span.ui-btn-text').each(function() {
// 	setTimeout(function() {
	  var cb = $(this).html();
	  var to_change = Localization[Localize.locale].checkbox.searchpage[cb];
  	console.log(cb+" - "+to_change);
  // 	console.log(this);
	  this.innerHTML = to_change ;
// 	  },2500);
      });
      
//       var labels = ["nome", "Cosa_cerchi"];
//       $('#sc_')
      
      

    },100);
  }
}

function safeField(val) {
  return (val == undefined) ? "" : val.replace(/ /g, "_").replace(/\./g, "").replace(/:/g, "").replace(/\?/g, "").replace(/#/g, "_").replace(/\$/g, "_");
}

// function setLocalization() {
//   if (PalerMobile.Global.language == "en") {   
//     
// //  $("#about"
//     $("label[for='sc_Search_for']").html(Localization.it.search_for);
//   }
// }

$(document).ready(function() {
  if (PalerMobile.Global.language_default != PalerMobile.Global.language)
    Localize.homepage();
});
// setLocalization();