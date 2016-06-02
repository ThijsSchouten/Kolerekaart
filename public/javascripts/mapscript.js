"use strict";

$(document).ready(function() {
	var dates = ['01_06','02_06','03_06','04_06','05_06','06_06','07_06','08_06','09_06','10_06','11_06','12_06','13_06','14_06','15_06','16_06','17_06','18_06','19_06','20_06','21_06','22_06','23_06','24_06','25_06','26_06','27_06','29_06','29_06','30_06','01_07','02_07','03_07','04_07','05_07','06_07','07_07','08_07','09_07','10_07','11_07','12_07','13_07','14_07','15_07','16_07','17_07','18_07','19_07','20_07','21_07','22_07','23_07','24_07','25_07','26_07','27_07','29_07','29_07','30_07','31_07','01_08','02_08','03_08','04_08','05_08','06_08','07_08','08_08','09_08','10_08','11_08','12_08','13_08','14_08','15_08','16_08','17_08','18_08','19_08','20_08','21_08','22_08','23_08','24_08','25_08','26_08','27_08','29_08','29_08','31_08','01_09','02_09','03_09','04_09','05_09','06_09','07_09','08_09','09_09','10_09','11_09','12_09','13_09','14_09','15_09','16_09','17_09','18_09','19_09','20_09','21_09','22_09','23_09','24_09','25_09','26_09','27_09','29_09','29_09','30_09','01_10','02_10','03_10','04_10','05_10','06_10','07_10','08_10','09_10','10_10','11_10','12_10','13_10','14_10','15_10','16_10','17_10','18_10','19_10','20_10','21_10','22_10','23_10','24_10','25_10','26_10','27_10','29_10','29_10','30_10','31_10']
	var months = ['','','','','','','Juni','Juli','Augustus','September','Oktober'];
	var day = '01_06'

	d3.csv("data/sterfgevallen.csv", function(data){

		console.log(data);

		// when date is clicked, place makers & set tooltip
		$( ".fn" ).click(function() {
	  		placeMarker(this.id);
	  		placeTooltip(this.id);
	  		day = this.id;
		});

		// on window resize, place tooltip
		$(window).resize(function(){
			placeTooltip(day);
		});

		var clicked = false

		$( "#playbtn" ).click(function() {
	  		clicked = !clicked
	  		var i = 0, loops = 151;
	  		if (clicked) {
				function f() {
				    i++;

				    if (!clicked) {
				    	return;
				    }

				    placeTooltip(dates[i])
				    placeMarker(dates[i])

				    if( i < loops){
				        setTimeout( f, 225 );
				    } else {
				    	placeTooltip('01_06')
				    }
				}
				f();  			
	  		}

	  		
	  		console.log(clicked)
		});


		//initialize the map         
		var map = L.map('intromap', { zoomControl: false }).setView([52.37191, 4.90027], 14);

		new L.Control.Zoom({ position: 'topright' }).addTo(map);

		L.tileLayer('tiles_nbh/{z}/{x}/{y}.png',
		{
			attribution: 'Map data', 
			tms:false,
		    minZoom: 13,
		    maxZoom: 17
		}).addTo(map);  

		var day = "01_06"

		// make a clustergroup for markers

		var markers = new L.FeatureGroup();
		map.addLayer(markers);

		// define icon
	    var pulseIcon = L.divIcon({
	    	className: 'svg-marker',
	    	html: "<div class='pulseIcon'><div class='dot'></div><div class='pulse'></div></div>",
	    	iconSize: null,
	    	iconAnchor: null
		});


		
		function placeMarker(date) {
			// clear marker laag 
			markers.clearLayers();

			for (var i = 0; i < data.length; i++) {
				if (data[i].date == date) {
					var marker = L.marker([data[i].lat, data[i].lon], { icon:pulseIcon });
					marker.bindPopup(data[i].street_name + " " + data[i].street_num)
					markers.addLayer(marker);					
				}

			}

			
			// verwijder alle markers
			// zoek de 
	        //marker = new L.Marker(e.latlng, {draggable:true});
	        //map.addLayer(marker);
	        //marker.bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
		}

		

		function getPos(el) {
		    // yay readability
		    for (var lx=0, ly=0;
		         el != null;
		         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
		    return {x: lx,y: ly};
		}

		function placeTooltip(day) {
			// coordinates of the day div
			var pos = getPos(document.getElementById(day));


			$("#toolt_today").css({left:(pos.x-50)});
			$("#datestamp").text(formatDate(day));

		}

		function formatDate(day) {
			return day.substring(0,2) + " " + months[parseInt(day.substring(3,5))] + " 1866"
		}

		placeMarker(day);	
		placeTooltip(day);
	});
});
