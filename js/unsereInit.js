

var map;
var smallWidth = false; //bool to indicate mobile device


$(window).load(function() {

	$('.location-img').height($(window).height() / 2);

});

$(window).on('resize', function() {
	$('.location-img').height($(window).height() / 2);
});


$(document).on('pagebeforecreate', '#map-page', function() {

	// first time playing?
	if (readCookie("game") != 1){
	


	}
	
	$(document).on('pagebeforecreate', '#map-page', function() {
		if (getValue('intro') != 1) {
			$(':mobile-pagecontainer').pagecontainer('change', '#intro-page1');
			setValue('intro', 1);
		}

	});

	$(document).ready(function(){
		$('#note-button').click(function(){
	         var notes1 = $('#notiz1').val();
	         var notes2 = $('#notiz2').val();
	         var notes3 = $('#notiz3').val();
	         var notes4 = $('#notiz4').val();
	         var notes5 = $('#notiz5').val();
	         var notes6 = $('#notiz6').val();
	         var notes7 = $('#notiz7').val();
	         $("#note-one").text(notes1);
	         $('#note-two').text(notes2);
	         $("#note-three").text(notes3);
	         $('#note-four').text(notes4);
	         $("#note-five").text(notes5);
	         $('#note-six').text(notes6);
	         $("#note-seven").text(notes7);
		});
	});

/*********MAP*********/

	



	map = L.map('map').setView([50.491944,6.627778], 15);

   function addMarker(i) {

		var feat = myPlaces.features[i];
		var marker = L.marker(feat.geometry.coordinates, {icon: spqrIcon});

		marker.on('click', function(e){

			

		});

		marker.addTo(map).bindPopup("<b>"+feat.properties.name+"</b>");
	}
	 
	L.tileLayer('https://api.mapbox.com/styles/v1/apietsch/ciwia9ugp00602pnvmsnmrysz/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXBpZXRzY2giLCJhIjoiY2l3aTd6c3VrMDAweDJ0bWk5NnE2M3VqMyJ9.AcMBmTrQggYt7BON9BIlFg', {
		attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a>, <a href="http://mapbox.com">Mapbox</a>',
		maxZoom: 20,
		id: 'mapbox.dark',
		accessToken: "pk.eyJ1IjoiYXBpZXRzY2giLCJhIjoiY2l3aTd6c3VrMDAweDJ0bWk5NnE2M3VqMyJ9.AcMBmTrQggYt7BON9BIlFg"

	}).addTo(map);
		 	



	var spqrIcon = L.icon({
		 iconUrl: 'https://cdn3.iconfinder.com/data/icons/halloween-2/512/axe-icon.png',

		 iconSize:     [38, 95], // size of the icon
		 iconAnchor:   [3, 87], // point of the icon which will correspond to marker's location
		 popupAnchor:  [13, -76] // point from which the popup should open relative to the iconAnchor
	});

	//filling map with points
	for (var i = 0; i < myPlaces.features.length; i++){

        addMarker(i);
	}



/*******MAP INITIALISED********/

});


