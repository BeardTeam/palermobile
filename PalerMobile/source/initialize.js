
//function initialize() {
$(function() {
    MapsLib.initialize();

    $("#about").click(function() { 
      MapsLib.onExitMap(); 
      // localization
      if (PalerMobile.Global.language_default != PalerMobile.Global.language)
	Localize.about();
    });
    $("#search_page").click(function() { 
      MapsLib.onExitMap();
      if (PalerMobile.Global.language_default != PalerMobile.Global.language) {
	Localize.searchpage();
      }
    });
    $("#listview").click(function(){
      MapsLib.onExitMap();
      MapsLib.getListView();
      if (PalerMobile.Global.language_default != PalerMobile.Global.language)
	Localize.searchpage();
      fixCSS();
    });
    $('#page-list').on(function(){ fixCSS(); });

    $("#about_back").click(function() { MapsLib.onEnterMap(); });
    $("#search_back").click(function() { MapsLib.onEnterMap(); });
    $("#list_back").click(function() { MapsLib.onEnterMap(); });

    $("#search").click(function(){
      MapsLib.onEnterMap();
      MapsLib.doSearch();
    });
    $("#search_top").click(function(){
      MapsLib.onEnterMap();
      MapsLib.doSearch();
    });
    $("#search_reset").click(function(){
      slideToggleAccoglienzaElements(true);
      slideToggleRistoroElements(true);
      slideToggleDivertimentoElements(true);
      slideToggleAperitivoElements(true);
      slideToggleCucinaElements(true);
      slideToggleConsolatoElements(true);
      slideToggleLuoghiDaVisitareElements(true);
      MapsLib.resetSearch();
    });
    window.addEventListener('popstate', function(e) { 
      MapsLib.onPopState();
    });
});
