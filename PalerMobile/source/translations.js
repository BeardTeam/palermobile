var Localization = {
  common_fields: {
//     dep_drop_labels: ["Tipi di alloggio:","Tipi di divertimento:"],
    id_labels: ["search_address_label", "search_radius_label","search","search_reset"]
  },
  en: {
//     you_are_here: "You are here",    
    id: {
      leaf: {
	// home page
	homepage: {
	  "nearby-name": "Find me"
	}
      },
      class: {
	"ui-btn-inner_ui-btn-text": {
	  // home page
	  homepage: {
	    "about": "About",
	    "search_page": "Filter",
	    "listview": "Results list"
	  },
	  // about page
	  aboutpage: {	
	    "about_back": "Map"
	  },	
	  //search page
	  searchpage: {
	    "search_back": "Map",
	    "search_top": "Search"
	  }
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
	fixed: {
	  // this below must have same name of that specified in MapsLib.searchpage.columns.column in fusiontable_settings.js !
// 	  "nome": "Name",
	  "nome": "Name:"
	},
	"by_id": {
	  // fixed, don't touch below!
	  leaf: {
	    "search_address_label": "Address:",
	    "search_radius_label": "Search radius:"
	  },
	  with_sibling: {
	    "search": "Do Search",
	    "search_reset": "Reset fields"
	  }
	},
	placeholder: {
	  // "Cercherà qualunque nome contenente questo testo"
	  sc_nome: "Find any name containing specified text",
// 	 "Se non specificato riporterà al centro della mappa"
	  search_address: "If address is not entered, map center will be used"
	},
	
	various: {
	  // same name of fields in: "MapsLib.searchpage.columns.label"
	  "Cosa cerchi?": "Searching for?",
	  "Tipi di alloggio:": "Accomodate type:",
	  "Tipi di divertimento:" : "Amusement type:",
	  "Tipi di ristoro:" : "Restaurant type:",
	  "Tipi di cucina:" : "Cooking type:",
	}
	
// 	,"min_accoglienza_stelle": "Stelle"
// 	,search_for_dropdown: {	}	
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
    },
    slider: {
      searchpage: {
	"Orari di apertura per divertimento e ristoro:" :"Amusement and Refreshement opening hour:",
	"Orari di chiusura per divertimento e ristoro:" :"Amusement and Refreshement closing hour:",
	"Orari di apertura del consolato:" :"Consulate opening hour:",
	"Orari di chiusura del consolato:" : "Consulate closing hour:",
	"Stelle:": "Stars:"
      }
    },
    alert_message_text: "You are too far from Palermo. The map will be centered there."
    
  }
}