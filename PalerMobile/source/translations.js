var Localization = {
  common_fields: {
//     dep_drop_labels: ["Tipi di alloggio:","Tipi di divertimento:"],
    id_labels: ["search_address_label", "search_radius_label","search","search_reset"]
  },
  en: {
    button: {
      homepage: {
	id: {
	  "nearby-name": "Find me"
	},
	classes: {
	  "ui-btn-inner_ui-btn-text": {
	    "about": "About",
	    "search_page": "Filter",
	    "listview": "Results list"
	  }
	}
      },
      search_page: {
	id: {
	  "search_back": "Map",
	  "search_top": "Map"
	}
      },
      list_page: {
	back_to_map: "Back to map"
      },
      about_page: {
	"about_back": "Map"
      },
      details_page: {
	"back": "Back"
      }
    },    
    
    title: {
      // about page
      about_page: {
	"about_page_title": "About Us"
      },      
      //search page
      search_page: {
	"search_page_title": "Filter"
      },
      list_page: {
	"page-list-title": "Results list",
	"list_back": "Map",
	"search": "Search",
      },
      details_page: {
	"details": "Details"
      }
      
    },

    
    label: {
      search_page: {
	fixed: {
	  // this below must have same name of that specified in MapsLib.searchpage.columns.column in fusiontable_settings.js !
// 	  "nome": "Name",
	  "nome": "Name:"
	},
	id: {
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
	  // same name of fields in: "MapsLib.search_page.columns.label"
	  "Cosa cerchi?": "Searching for?",
	  "Tipi di alloggio:": "Accomodate type:",
	  "Tipi di divertimento:" : "Amusement type:",
	  "Tipi di ristoro:" : "Restaurant type:",
	  "Tipi di cucina:" : "Cooking type:",
	}
	
// 	,"min_accoglienza_stelle": "Stelle"
// 	,search_for_dropdown: {	}	
      },
      list_page: {
	class: {	  
	  "listpage-address": "Address: ",
	  "listpage-district": "district ",
	  'listpage-email': 'Email: ',
	  'listpage-web': 'Web: ',
	  "listpage-accomodate-stars": "Stars: ",
	  'listpage-cooking': "with cooking",
	  "listpage-hotel-stars-prefix": ": ",
	  "listpage-hotel-star-suffix": "stella",
	  "listpage-hotel-stars-suffix": "stelle",
	  "listpage-details-link": "Click to see details"	  
	}
      },
      details_page: {
	class: {
	  "details-tipo-opening_hours": "Opening hours: ",
	  "details-tipo-days": "Days: ",
	  "details-tipo-begin_hour": "Since ",
	  "details-tipo-end_hour": "to ",
	  "details-tipo-note": "Notes: ",
	  
	  "details-tipo-consulate": "Consul: ",
	  "details-tipo-monument": "Monument",
	  
	  "details-accomodate-category": "Category: ",
	  "details-accomodate-stars": "Stars: ",
	  'details-accomodate-rooms': "Rooms: ",
	  
	  
	  'details-accomodate-meeting': "Meeting rooms: ",
	  'details-accomodate-residences': "Residences: ",
	  'details-accomodate-manager': "Manager: ",
	  'details-accomodate-management': "Management: ",
	  'details-accomodate-informations': "Informations: ",
	  
	  'details-cooking': "Cooking: ",
	  
	  'details-services': 'Services: ',
	  'details-allowing-visit': 'Entering: ',
	  'details-price': 'Price: ',
	  'details-historical_informations': 'Historical informations: ',
	  'details-place-manager-phone': 'Management: ',
	  
	  'details-contacts': 'Contacts: ',
	  'details-landphone': 'Phone: ',
	  'details-mobile': 'Mobile: ',
	  
	  'details-email': 'Email: ',
	  'details-web': 'Web: ',
	  
	  'details-address-prefix': 'Address: ',
	  'details-district': 'District: ' // quartiere  
	  
	  
	}
      }
    },
    
    dropdown: {
      search_page: {
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
      search_page: {
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
      search_page: {
	"Orari di apertura per divertimento e ristoro:" :"Amusement and Refreshement opening hour:",
	"Orari di chiusura per divertimento e ristoro:" :"Amusement and Refreshement closing hour:",
	"Orari di apertura del consolato:" :"Consulate opening hour:",
	"Orari di chiusura del consolato:" : "Consulate closing hour:",
	"Stelle:": "Stars:"
      }
    },
    
    message: {
      map: {
	alert_message_text: "You are too far from Palermo. The map will be centered there."
      },
      details: {
	'no_details': 'Sorry, no further details are available.',
	'data_loading': 'Loading data...'
      }
    }
    
    
  }
}