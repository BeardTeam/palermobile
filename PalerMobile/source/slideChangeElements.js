$(document).on('change', 'select', function() {
	//console.log($(this).val() + "	" + $(this).find("option:selected").text()); // the selected options’s value
	if ($(this).val().indexOf("'ristoro'") !== -1 ) {
		//console.log("Entrato nel caso ristoro");
		//label e dropdown relativi a ristoro appaiono
		slideToggleRistoroElements(false);
		//le altre label e contenitori di tipi specifici scompaiono
		slideToggleDivertimentoElements(true);
		slideToggleAperitivoElements(true);
		slideToggleAccoglienzaElements(true);
		slideToggleCucinaElements(true);
		slideToggleConsolatoElements(true);
		slideToggleLuoghiDaVisitareElements(true);
	} else if ($(this).val().indexOf("'ristorante'") !== -1 ) {
		//console.log("Entrato nel caso tipi di cucina");
		//label e dropdown relativi a ristoro appaiono
		slideToggleCucinaElements(false);
		//le altre label e contenitori di tipi specifici scompaiono
		slideToggleDivertimentoElements(true);
		slideToggleAperitivoElements(true);
		slideToggleAccoglienzaElements(true);
		slideToggleConsolatoElements(true);
		slideToggleLuoghiDaVisitareElements(true);
	} else if ($(this).val().indexOf("'luogo da visitare'") !== -1 ) {
		//console.log("Entrato nel caso luoghi da visitare");
		//label e dropdown relativi a ristoro appaiono
		slideToggleLuoghiDaVisitareElements(false);
		//le altre label e contenitori di tipi specifici scompaiono
		slideToggleDivertimentoElements(true);
		slideToggleAperitivoElements(true);
		slideToggleAccoglienzaElements(true);
		slideToggleConsolatoElements(true);
		slideToggleCucinaElements(true);
		slideToggleRistoroElements(true);
	} else if ($(this).val().indexOf("'consolato'") !== -1 ) {
		//console.log("Entrato nel caso consolato");
		//slider relativi a consolato appaiono
		slideToggleConsolatoElements(false);
		//le altre label e contenitori di tipi specifici scompaiono
		slideToggleDivertimentoElements(true);
		slideToggleAperitivoElements(true);
		slideToggleAccoglienzaElements(true);
		slideToggleCucinaElements(true);
		slideToggleLuoghiDaVisitareElements(true);
		slideToggleRistoroElements(true);
	} else if ($(this).val().indexOf("'divertimento'") !== -1 ) {
		//console.log("Entrato nel caso divertimento");
		//label e dropdown relativi a ristoro appaiono
		slideToggleDivertimentoElements(false);
		//le altre label e contenitori di tipi specifici scompaiono
		slideToggleRistoroElements(true);
		slideToggleAperitivoElements(true);
		slideToggleAccoglienzaElements(true);
		slideToggleCucinaElements(true);
		slideToggleConsolatoElements(true);
		slideToggleLuoghiDaVisitareElements(true);
	} else if ($(this).val().indexOf("'Wine bar','Cocktail bar','Bar'") !== -1 ) {
		//console.log("Entrato nel caso aperitivo");
		//label e dropdown relativi a ristoro appaiono
		slideToggleAperitivoElements(false);
		//le altre label e contenitori di tipi specifici scompaiono
		slideToggleRistoroElements(true);
		slideToggleDivertimentoElements(true);
		slideToggleAccoglienzaElements(true);
		slideToggleCucinaElements(true);
		slideToggleConsolatoElements(true);
		slideToggleLuoghiDaVisitareElements(true);
	} else if ($(this).val().indexOf("'accoglienza'") !== -1 ) {
		//console.log("Entrato nel caso dove alloggiare");
		//label e dropdown relativi a ristoro appaiono
		slideToggleAccoglienzaElements(false);
		//le altre label e contenitori di tipi specifici scompaiono
		slideToggleRistoroElements(true);
		slideToggleDivertimentoElements(true);
		slideToggleAperitivoElements(true);
		slideToggleCucinaElements(true);
		slideToggleConsolatoElements(true);
		slideToggleLuoghiDaVisitareElements(true);
	} else if ($(this).val().indexOf("'discopub'") !== -1 || $(this).val().indexOf("'discoteca'") !== -1 
			|| $(this).val().indexOf("'italiana'") !== -1 || $(this).val().indexOf("'mediterranea'") !== -1
			|| $(this).val().indexOf("'pizza'") !== -1 || $(this).val().indexOf("'tipica'") !== -1
			|| $(this).val().indexOf("'tipica siciliana'") !== -1 || $(this).val().indexOf("'tipica palermitana'") !== -1
			|| $(this).val().indexOf("'internazionale'") !== -1 || $(this).val().indexOf("'europea'") !== -1
			|| $(this).val().indexOf("'spagnola'") !== -1 || $(this).val().indexOf("'fusion'") !== -1 
			|| $(this).find("option:selected").text() == "Qualunque tipo di divertimento"
			|| $(this).find("option:selected").text() == "Qualunque tipo di cucina"
			|| $(this).find("option:selected").text() == "Qualunque tipo di alloggio"
			|| $(this).val().indexOf("'Hotel'") !== -1 || $(this).val().indexOf("'Bed and Breakfast'") !== -1 
			|| $(this).val().indexOf("'Affittacamere'") !== -1 || $(this).val().indexOf("'Ostello'") !== -1 
			|| $(this).val().indexOf("'Casa ferie'") !== -1 || $(this).val().indexOf("'Residence'") !== -1 ) {
		//console.log("Entrato nel caso dei nodi foglia");
		//do nothing
	} else if ($(this).val().indexOf("'pizzeria'") !== -1 || $(this).val().indexOf("'pub'") !== -1
			|| $(this).val().indexOf("'american bar'") !== -1 || $(this).val().indexOf("'sushi bar'") !== -1
			|| $(this).val().indexOf("'street food'") !== -1 || $(this).find("option:selected").text() == "Qualunque tipo di ristoro") {
		//console.log("Entrato nel caso in cui la dropdown dei tipi di cucina deve essere chiusa");
		slideToggleCucinaElements(true);
	} else {
		//console.log("Entrato nel caso dove gli altri elementi devono essere chiusi");
		//tutti gli elementi specifici vengono nascosti se viene
		//selezionato un tipo non specificato precedentemente
		slideToggleAccoglienzaElements(true);
		slideToggleRistoroElements(true);
		slideToggleDivertimentoElements(true);
		slideToggleAperitivoElements(true);
		slideToggleCucinaElements(true);
		slideToggleConsolatoElements(true);
		slideToggleLuoghiDaVisitareElements(true);
	}
});



function slideToggleDivertimentoElements(visibility) {
	//se gli elementi sono visibili allora verranno nascosti, e viceversa
	if ($('#sc_Tipi_di_divertimento').closest('.ui-select').is(":visible") == visibility){
		$("label[for='sc_Tipi_di_divertimento']").slideToggle();
		$('#sc_Tipi_di_divertimento').closest('.ui-select').slideToggle();
		$('#sc_divertimento-e-ristoro_orari_apertura').slideToggle();
		$('#sc_divertimento-e-ristoro_orari_chiusura').slideToggle();
	}
	//setto i dropdown e gli slider dei tipi specifici ai loro valori di default
	if ($('#sc_Tipi_di_divertimento').closest('.ui-select').is(":visible") == true) {
		$('#sc_Tipi_di_divertimento').find("option:selected").removeAttr("selected");
		$('#sc_Tipi_di_divertimento').selectmenu('refresh');
		$('#sc_min_divertimento-e-ristoro_orari_apertura').val(6.3);
		$('#sc_min_divertimento-e-ristoro_orari_apertura').slider('refresh');
		$('#sc_max_divertimento-e-ristoro_orari_apertura').val(23);
		$('#sc_max_divertimento-e-ristoro_orari_apertura').slider('refresh');
		$('#sc_min_divertimento-e-ristoro_orari_chiusura').val(0);
		$('#sc_min_divertimento-e-ristoro_orari_chiusura').slider('refresh');
		$('#sc_max_divertimento-e-ristoro_orari_chiusura').val(4);
		$('#sc_max_divertimento-e-ristoro_orari_chiusura').slider('refresh');
	}
}



function slideToggleRistoroElements(visibility) {
	//se gli elementi sono visibili allora verranno nascosti, e viceversa
	if ($('#sc_Tipi_di_ristoro').closest('.ui-select').is(":visible") == visibility){
		$("label[for='sc_Tipi_di_ristoro']").slideToggle();
		$('#sc_Tipi_di_ristoro').closest('.ui-select').slideToggle();
		$('#sc_divertimento-e-ristoro_orari_apertura').slideToggle();
		$('#sc_divertimento-e-ristoro_orari_chiusura').slideToggle();
	}
	//setto i dropdown dei tipi specifici ai loro valori di default
	if ($('#sc_Tipi_di_ristoro').closest('.ui-select').is(":visible") == true) {
		$('#sc_Tipi_di_ristoro').find("option:selected").removeAttr("selected");
		$('#sc_Tipi_di_ristoro').selectmenu('refresh');
		$('#sc_min_divertimento-e-ristoro_orari_apertura').val(6.3);
		$('#sc_min_divertimento-e-ristoro_orari_apertura').slider('refresh');
		$('#sc_max_divertimento-e-ristoro_orari_apertura').val(23);
		$('#sc_max_divertimento-e-ristoro_orari_apertura').slider('refresh');
		$('#sc_min_divertimento-e-ristoro_orari_chiusura').val(0);
		$('#sc_min_divertimento-e-ristoro_orari_chiusura').slider('refresh');
		$('#sc_max_divertimento-e-ristoro_orari_chiusura').val(4);
		$('#sc_max_divertimento-e-ristoro_orari_chiusura').slider('refresh');
	}
}



function slideToggleCucinaElements(visibility) {
	//se gli elementi sono visibili allora verranno nascosti, e viceversa
	if ($('#sc_Tipi_di_cucina').closest('.ui-select').is(":visible") == visibility){
		$("label[for='sc_Tipi_di_cucina']").slideToggle();
		$('#sc_Tipi_di_cucina').closest('.ui-select').slideToggle();
	}
	//setto i dropdown dei tipi specifici ai loro valori di default
	if ($('#sc_Tipi_di_cucina').closest('.ui-select').is(":visible") == true) {
		$('#sc_Tipi_di_cucina').find("option:selected").removeAttr("selected");
		$('#sc_Tipi_di_cucina').selectmenu('refresh');
	}
}



function slideToggleLuoghiDaVisitareElements(visibility) {
  //se gli elementi sono visibili allora verranno nascosti, e viceversa
  if ($("#sc_Chiese").closest('.ui-checkbox').is(":visible") == visibility) {
    $("#sc_Chiese").closest('.ui-checkbox').slideToggle();
    $("#sc_Teatri_storici").closest('.ui-checkbox').slideToggle();
    $("#sc_Oratori").closest('.ui-checkbox').slideToggle();
    $("#sc_Gallerie_artistiche_e_musei").closest('.ui-checkbox').slideToggle();
    $("#sc_Biblioteche").closest('.ui-checkbox').slideToggle();
    $("#sc_Zone_archeologiche").closest('.ui-checkbox').slideToggle();
    $("#sc_Monumenti").closest('.ui-checkbox').slideToggle();
    $("#sc_Palazzi").closest('.ui-checkbox').slideToggle();
    $("#sc_Dimore_e_Ville_Storiche").closest('.ui-checkbox').slideToggle();
    $("#sc_Santuari").closest('.ui-checkbox').slideToggle();
  }
  //setto le checkbox dei tipi specifici ai loro valori di default
  if ($("#sc_Chiese").closest('.ui-checkbox').is(":visible") == true) {
    console.log("here");
    $('#sc_Chiese').prop('checked', false).checkboxradio("refresh");
    $('#sc_Teatri_storici').prop('checked', false).checkboxradio("refresh");
    $('#sc_Oratori').prop('checked', false).checkboxradio("refresh");
    $('#sc_Gallerie_artistiche_e_musei').prop('checked', false).checkboxradio("refresh");
    $('#sc_Biblioteche').prop('checked', false).checkboxradio("refresh");
    $('#sc_Zone_archeologiche').prop('checked', false).checkboxradio("refresh");
    $('#sc_Monumenti').prop('checked', false).checkboxradio("refresh");
    $('#sc_Palazzi').prop('checked', false).checkboxradio("refresh");
    $('#sc_Dimore_e_Ville_Storiche').prop('checked', false).checkboxradio("refresh");
//     console.log  ( $('#sc_Dimore_e_Ville_Storiche') );
    $('#sc_Santuari').prop('checked', false).checkboxradio("refresh");
  }
}



function slideToggleAperitivoElements(visibility) {
	//se gli elementi sono visibili allora verranno nascosti, e viceversa
// 	if ($("span:contains('Wine bar')").closest('.ui-checkbox').is(":visible") == visibility) {
	if ($("#sc_Wine_bar").closest('.ui-checkbox').is(":visible") == visibility) {
// 		$("span:contains('Wine bar')")
	  $('#sc_Wine_bar')
		.closest('.ui-checkbox').slideToggle();
// 		$("span:contains('Cocktail bar')")
	  $('#sc_Cocktail_bar')
		.closest('.ui-checkbox').slideToggle();
	  $('#sc_Bar')
// 		$("span:contains('Bar')")
		.closest('.ui-checkbox').slideToggle();
	}
	//setto le checkbox dei tipi specifici ai loro valori di default
// 	if ($("span:contains('Wine bar')").closest('.ui-checkbox').is(":visible") == true) {
	if ($("#sc_Wine_bar").closest('.ui-checkbox').is(":visible") == true) {
		$('#sc_Wine_bar').prop('checked', false).checkboxradio("refresh");
		$('#sc_Cocktail_bar').prop('checked', false).checkboxradio("refresh");
		$('#sc_Bar').prop('checked', false).checkboxradio("refresh");
	}
}


function slideToggleAccoglienzaElements(visibility) {
	//se gli elementi sono visibili allora verranno nascosti, e viceversa
// 	if ($("span:contains('Sale meeting')").closest('.ui-checkbox').is(":visible") == visibility){
	if ($("#sc_Sale_meeting").closest('.ui-checkbox').is(":visible") == visibility) {
// 		$("span:contains('Sale meeting')").closest('.ui-checkbox').slideToggle();
		$("#sc_Sale_meeting").closest('.ui-checkbox').slideToggle();
		$('#sc_accoglienza_stelle').slideToggle();
		$("label[for='sc_Tipi_di_alloggio']").slideToggle();
		$('#sc_Tipi_di_alloggio').closest('.ui-select').slideToggle();
	}
	//setto le checkbox e lo slider dei tipi specifici ai loro valori di default
// 	if ($("span:contains('Sale meeting')").closest('.ui-checkbox').is(":visible") == true) {
	if ($("#sc_Sale_meeting").closest('.ui-checkbox').is(":visible") == visibility) {
		$('#sc_Sale_meeting').prop('checked', false).checkboxradio("refresh");
		$('#sc_min_accoglienza_stelle').val(1);
		$('#sc_min_accoglienza_stelle').slider('refresh');
		$('#sc_max_accoglienza_stelle').val(5);
		$('#sc_max_accoglienza_stelle').slider('refresh');
		$('#sc_Tipi_di_alloggio').find("option:selected").removeAttr("selected");
		$('#sc_Tipi_di_alloggio').selectmenu('refresh');
	}
}



function slideToggleConsolatoElements(visibility) {
	//se gli elementi sono visibili allora verranno nascosti, e viceversa
	if ($('#sc_consolato_orari_apertura').is(":visible") == visibility){
		$('#sc_consolato_orari_apertura').slideToggle();
		$('#sc_consolato_orari_chiusura').slideToggle();
	}
	//setto gli slider dei tipi specifici ai loro valori di default
	if ($('#sc_consolato_orari_apertura').is(":visible") == true) {
		$('#sc_min_consolato_orari_apertura').val(8.3);
		$('#sc_min_consolato_orari_apertura').slider('refresh');
		$('#sc_max_consolato_orari_apertura').val(16.3);
		$('#sc_max_consolato_orari_apertura').slider('refresh');
		$('#sc_min_consolato_orari_chiusura').val(12);
		$('#sc_min_consolato_orari_chiusura').slider('refresh');
		$('#sc_max_consolato_orari_chiusura').val(20);
		$('#sc_max_consolato_orari_chiusura').slider('refresh');
	}
}
