"use strict";

$(document).ready(function() {

	var data_nbh = {"MM":[["0601","0"],["0608","0"],["0615","0"],["0622","2"],["0629","0"],["0706","0"],["0713","0"],["0720","0"],["0727","2"],["0803","3"],["0810","0"],["0817","0"],["0824","2"],["0831","1"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"N":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","1"],["0706","0"],["0713","4"],["0720","2"],["0727","6"],["0803","4"],["0810","3"],["0817","0"],["0824","4"],["0831","2"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","1"],["1012","0"],["1019","0"],["1026","0"]],"NN":[["0601","0"],["0608","1"],["0615","1"],["0622","0"],["0629","2"],["0706","1"],["0713","3"],["0720","3"],["0727","5"],["0803","1"],["0810","1"],["0817","3"],["0824","1"],["0831","0"],["0907","0"],["0914","0"],["0921","4"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"O":[["0601","0"],["0608","0"],["0615","4"],["0622","1"],["0629","3"],["0706","1"],["0713","1"],["0720","0"],["0727","4"],["0803","2"],["0810","1"],["0817","2"],["0824","1"],["0831","0"],["0907","2"],["0914","3"],["0921","1"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"OO":[["0601","0"],["0608","0"],["0615","1"],["0622","0"],["0629","1"],["0706","2"],["0713","1"],["0720","3"],["0727","0"],["0803","1"],["0810","0"],["0817","0"],["0824","1"],["0831","0"],["0907","0"],["0914","1"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"P":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","2"],["0713","5"],["0720","6"],["0727","7"],["0803","8"],["0810","3"],["0817","3"],["0824","4"],["0831","6"],["0907","2"],["0914","0"],["0921","1"],["0928","2"],["1005","2"],["1012","0"],["1019","1"],["1026","0"]],"PP":[["0601","0"],["0608","0"],["0615","0"],["0622","1"],["0629","1"],["0706","3"],["0713","5"],["0720","2"],["0727","4"],["0803","2"],["0810","1"],["0817","0"],["0824","0"],["0831","3"],["0907","2"],["0914","3"],["0921","2"],["0928","0"],["1005","1"],["1012","0"],["1019","1"],["1026","0"]],"Q":[["0601","1"],["0608","0"],["0615","0"],["0622","0"],["0629","2"],["0706","1"],["0713","6"],["0720","6"],["0727","3"],["0803","2"],["0810","1"],["0817","1"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","1"],["0928","7"],["1005","2"],["1012","1"],["1019","0"],["1026","0"]],"QQ":[["0601","0"],["0608","2"],["0615","2"],["0622","1"],["0629","6"],["0706","1"],["0713","6"],["0720","10"],["0727","13"],["0803","9"],["0810","8"],["0817","7"],["0824","14"],["0831","3"],["0907","7"],["0914","5"],["0921","5"],["0928","2"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"R":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","1"],["0706","0"],["0713","6"],["0720","8"],["0727","4"],["0803","3"],["0810","0"],["0817","2"],["0824","0"],["0831","3"],["0907","2"],["0914","1"],["0921","1"],["0928","0"],["1005","3"],["1012","1"],["1019","0"],["1026","0"]],"S":[["0601","0"],["0608","0"],["0615","0"],["0622","2"],["0629","15"],["0706","8"],["0713","6"],["0720","15"],["0727","5"],["0803","2"],["0810","3"],["0817","1"],["0824","0"],["0831","3"],["0907","1"],["0914","0"],["0921","0"],["0928","1"],["1005","0"],["1012","4"],["1019","0"],["1026","0"]],"SS":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","0"],["0713","0"],["0720","3"],["0727","0"],["0803","0"],["0810","0"],["0817","1"],["0824","1"],["0831","0"],["0907","1"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","1"]],"T":[["0601","0"],["0608","0"],["0615","1"],["0622","1"],["0629","4"],["0706","0"],["0713","2"],["0720","3"],["0727","2"],["0803","7"],["0810","6"],["0817","2"],["0824","16"],["0831","11"],["0907","11"],["0914","6"],["0921","1"],["0928","2"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"TT":[["0601","0"],["0608","1"],["0615","1"],["0622","0"],["0629","4"],["0706","1"],["0713","6"],["0720","3"],["0727","3"],["0803","1"],["0810","0"],["0817","0"],["0824","0"],["0831","1"],["0907","1"],["0914","1"],["0921","0"],["0928","0"],["1005","1"],["1012","0"],["1019","0"],["1026","0"]],"U":[["0601","0"],["0608","0"],["0615","0"],["0622","2"],["0629","0"],["0706","1"],["0713","3"],["0720","2"],["0727","2"],["0803","3"],["0810","0"],["0817","0"],["0824","3"],["0831","0"],["0907","2"],["0914","3"],["0921","4"],["0928","2"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"UU":[["0601","2"],["0608","0"],["0615","3"],["0622","1"],["0629","3"],["0706","2"],["0713","6"],["0720","4"],["0727","1"],["0803","1"],["0810","0"],["0817","3"],["0824","0"],["0831","3"],["0907","0"],["0914","0"],["0921","0"],["0928","1"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"V":[["0601","0"],["0608","1"],["0615","1"],["0622","1"],["0629","1"],["0706","3"],["0713","1"],["0720","10"],["0727","9"],["0803","3"],["0810","2"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","1"],["1012","1"],["1019","0"],["1026","0"]],"VV":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","0"],["0713","0"],["0720","1"],["0727","1"],["0803","0"],["0810","0"],["0817","0"],["0824","8"],["0831","1"],["0907","1"],["0914","3"],["0921","0"],["0928","0"],["1005","1"],["1012","1"],["1019","1"],["1026","0"]],"W":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","3"],["0706","5"],["0713","11"],["0720","9"],["0727","12"],["0803","3"],["0810","4"],["0817","1"],["0824","2"],["0831","2"],["0907","3"],["0914","4"],["0921","0"],["0928","1"],["1005","1"],["1012","0"],["1019","0"],["1026","0"]],"WW":[["0601","0"],["0608","1"],["0615","1"],["0622","0"],["0629","0"],["0706","1"],["0713","0"],["0720","0"],["0727","0"],["0803","0"],["0810","0"],["0817","1"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"X":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","2"],["0713","0"],["0720","2"],["0727","0"],["0803","1"],["0810","0"],["0817","1"],["0824","0"],["0831","0"],["0907","1"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"XX":[["0601","0"],["0608","1"],["0615","2"],["0622","1"],["0629","0"],["0706","2"],["0713","2"],["0720","1"],["0727","2"],["0803","1"],["0810","1"],["0817","2"],["0824","1"],["0831","0"],["0907","0"],["0914","1"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"Y":[["0601","0"],["0608","1"],["0615","0"],["0622","1"],["0629","0"],["0706","0"],["0713","0"],["0720","0"],["0727","1"],["0803","0"],["0810","0"],["0817","0"],["0824","0"],["0831","1"],["0907","0"],["0914","0"],["0921","2"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"YY":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","0"],["0713","0"],["0720","1"],["0727","0"],["0803","0"],["0810","0"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"Z":[["0601","0"],["0608","1"],["0615","3"],["0622","1"],["0629","0"],["0706","1"],["0713","0"],["0720","0"],["0727","2"],["0803","1"],["0810","1"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","1"],["1012","0"],["1019","0"],["1026","0"]],"ZZ":[["0601","0"],["0608","0"],["0615","0"],["0622","1"],["0629","2"],["0706","3"],["0713","2"],["0720","2"],["0727","2"],["0803","2"],["0810","1"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"A":[["0601","0"],["0608","1"],["0615","0"],["0622","0"],["0629","1"],["0706","0"],["0713","0"],["0720","2"],["0727","3"],["0803","1"],["0810","0"],["0817","0"],["0824","1"],["0831","1"],["0907","1"],["0914","1"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"AA":[["0601","0"],["0608","0"],["0615","0"],["0622","2"],["0629","1"],["0706","2"],["0713","2"],["0720","3"],["0727","5"],["0803","2"],["0810","0"],["0817","1"],["0824","1"],["0831","2"],["0907","0"],["0914","2"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"B":[["0601","1"],["0608","2"],["0615","3"],["0622","1"],["0629","1"],["0706","3"],["0713","3"],["0720","0"],["0727","0"],["0803","1"],["0810","1"],["0817","0"],["0824","1"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"BB":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","1"],["0713","0"],["0720","3"],["0727","0"],["0803","1"],["0810","0"],["0817","0"],["0824","0"],["0831","1"],["0907","0"],["0914","1"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"C":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","1"],["0706","2"],["0713","1"],["0720","5"],["0727","2"],["0803","2"],["0810","0"],["0817","1"],["0824","3"],["0831","3"],["0907","2"],["0914","1"],["0921","1"],["0928","1"],["1005","2"],["1012","0"],["1019","0"],["1026","0"]],"CC":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","1"],["0706","1"],["0713","0"],["0720","1"],["0727","0"],["0803","1"],["0810","0"],["0817","1"],["0824","2"],["0831","4"],["0907","1"],["0914","1"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"D":[["0601","0"],["0608","1"],["0615","0"],["0622","0"],["0629","0"],["0706","0"],["0713","0"],["0720","0"],["0727","0"],["0803","0"],["0810","0"],["0817","1"],["0824","1"],["0831","1"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"DD":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","1"],["0713","1"],["0720","0"],["0727","1"],["0803","2"],["0810","0"],["0817","3"],["0824","6"],["0831","1"],["0907","1"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"E":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","1"],["0713","0"],["0720","0"],["0727","0"],["0803","0"],["0810","0"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"EE":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","6"],["0706","3"],["0713","3"],["0720","2"],["0727","4"],["0803","1"],["0810","2"],["0817","2"],["0824","3"],["0831","3"],["0907","2"],["0914","0"],["0921","0"],["0928","1"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"F":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","1"],["0713","0"],["0720","0"],["0727","0"],["0803","1"],["0810","1"],["0817","0"],["0824","1"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"FF":[["0601","0"],["0608","0"],["0615","0"],["0622","1"],["0629","6"],["0706","1"],["0713","3"],["0720","3"],["0727","3"],["0803","0"],["0810","4"],["0817","1"],["0824","2"],["0831","1"],["0907","0"],["0914","0"],["0921","0"],["0928","1"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"G":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","0"],["0713","1"],["0720","1"],["0727","0"],["0803","0"],["0810","0"],["0817","1"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"GG":[["0601","0"],["0608","1"],["0615","0"],["0622","1"],["0629","3"],["0706","1"],["0713","8"],["0720","6"],["0727","7"],["0803","5"],["0810","2"],["0817","2"],["0824","3"],["0831","3"],["0907","2"],["0914","2"],["0921","2"],["0928","1"],["1005","0"],["1012","1"],["1019","0"],["1026","0"]],"H":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","1"],["0706","3"],["0713","4"],["0720","4"],["0727","1"],["0803","1"],["0810","0"],["0817","1"],["0824","0"],["0831","0"],["0907","1"],["0914","2"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"HH":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","1"],["0713","3"],["0720","3"],["0727","5"],["0803","2"],["0810","3"],["0817","1"],["0824","2"],["0831","3"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"J":[["0601","0"],["0608","0"],["0615","1"],["0622","1"],["0629","1"],["0706","1"],["0713","0"],["0720","0"],["0727","4"],["0803","0"],["0810","4"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","2"],["0921","1"],["0928","0"],["1005","1"],["1012","0"],["1019","0"],["1026","0"]],"JJ":[["0601","0"],["0608","0"],["0615","2"],["0622","3"],["0629","1"],["0706","2"],["0713","2"],["0720","4"],["0727","3"],["0803","2"],["0810","2"],["0817","2"],["0824","1"],["0831","1"],["0907","1"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","1"],["1019","0"],["1026","0"]],"K":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","1"],["0706","0"],["0713","0"],["0720","1"],["0727","0"],["0803","1"],["0810","0"],["0817","0"],["0824","0"],["0831","0"],["0907","1"],["0914","0"],["0921","1"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"KK":[["0601","0"],["0608","0"],["0615","1"],["0622","2"],["0629","1"],["0706","0"],["0713","0"],["0720","2"],["0727","2"],["0803","1"],["0810","0"],["0817","0"],["0824","1"],["0831","1"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"RR":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","0"],["0713","0"],["0720","0"],["0727","0"],["0803","0"],["0810","0"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"L":[["0601","0"],["0608","2"],["0615","1"],["0622","0"],["0629","2"],["0706","1"],["0713","1"],["0720","3"],["0727","4"],["0803","1"],["0810","1"],["0817","0"],["0824","3"],["0831","0"],["0907","0"],["0914","1"],["0921","0"],["0928","0"],["1005","1"],["1012","0"],["1019","0"],["1026","0"]],"LL":[["0601","0"],["0608","0"],["0615","0"],["0622","0"],["0629","0"],["0706","0"],["0713","0"],["0720","0"],["0727","1"],["0803","1"],["0810","0"],["0817","0"],["0824","0"],["0831","0"],["0907","0"],["0914","0"],["0921","0"],["0928","0"],["1005","0"],["1012","0"],["1019","0"],["1026","0"]],"M":[["0601","0"],["0608","1"],["0615","0"],["0622","0"],["0629","5"],["0706","2"],["0713","4"],["0720","2"],["0727","1"],["0803","1"],["0810","1"],["0817","0"],["0824","1"],["0831","3"],["0907","0"],["0914","1"],["0921","2"],["0928","0"],["1005","2"],["1012","0"],["1019","0"],["1026","0"]]}
	var data_place = [{"id":"B","percentage":0.501,"name":"Bovenkamer"},{"id":"K","percentage":0.102,"name":"Kelder"},{"id":"S","percentage":0.27,"name":"Schip"},{"id":"N","percentage":0.37,"name":"No data"},{"id":"O","percentage":0.3,"name":"Onderhuis"},{"id":"I","percentage":0.303,"name":"In huis"}]

	//initialize the map         
	var map1 = L.map('sterf_per_buurt', { zoomControl: false }).setView([52.37191, 4.90027], 14);
	map1.scrollWheelZoom.disable();

	L.tileLayer('tiles_nbh2/{z}/{x}/{y}.png',
	{
		attribution: 'Map data', 
		tms:false,
	    minZoom: 13,
	    maxZoom: 16
	}).addTo(map1); 

	d3.json('data/buurtgrenzen.geojson', function (error, data) {

		console.log(data)

		L.geoJson(data, {
		    onEachFeature: onEachFeature,
		    color: '#555'
		}).addTo(map1);

		function onEachFeature(feature, layer) {
		    layer.on('click', function (e) {
		        var id = feature.properties.nbhs;
		        d3draw_nbhtime(data_nbh[id], id)
		    });
		}
	});

	new L.Control.Zoom({ position: 'topright' }).addTo(map1);
	

	//initialize the map         
	var map2 = L.map('sterf_per_loc', { zoomControl: false }).setView([52.37191, 4.90027], 14);
	map2.scrollWheelZoom.disable();

	L.tileLayer('sterfgevallenZP/{z}/{x}/{y}.png',
	{
		attribution: 'Map data', 
		tms:false,
	    minZoom: 13,
	    maxZoom: 16
	}).addTo(map2);  

	new L.Control.Zoom({ position: 'topright' }).addTo(map2);




	var mapQQ = L.map('buurtQQ', { zoomControl: false }).setView([52.381834, 4.883595], 17);
	mapQQ.scrollWheelZoom.disable();
	new L.Control.Zoom({ position: 'topright' }).addTo(mapQQ);
	L.tileLayer('tiles_punten/{z}/{x}/{y}.png',
	{
		attribution: 'Map data', 
		tms:false,
	    minZoom: 16,
	    maxZoom: 18
	}).addTo(mapQQ);  	

	var mapS = L.map('buurtS', { zoomControl: false }).setView([52.369864, 4.906125], 17);
	mapS.scrollWheelZoom.disable();
	new L.Control.Zoom({ position: 'topright' }).addTo(mapS);
	L.tileLayer('tiles_punten/{z}/{x}/{y}.png',
	{
		attribution: 'Map data', 
		tms:false,
	    minZoom: 16,
	    maxZoom: 18
	}).addTo(mapS);  	

	var mapJJ = L.map('buurtJJ', { zoomControl: false }).setView([52.365145, 4.882715], 17);
	mapJJ.scrollWheelZoom.disable();
	new L.Control.Zoom({ position: 'topright' }).addTo(mapJJ);
	L.tileLayer('tiles_punten/{z}/{x}/{y}.png',
	{
		attribution: 'Map data', 
		tms:false,
	    minZoom: 16,
	    maxZoom: 18
	}).addTo(mapJJ);  	















	/* d3 dingen */

	var margin = {top: 6, right: 20, bottom: 5, left: 20},
    width = 700 - margin.left - margin.right,
    height = 160 - margin.top - margin.bottom;

    var formatDate = d3.time.format("%m-%d");

    var x = d3.time.scale()
	    .range([0, width]);

	var y = d3.scale.linear()
		.range([height, 0]);

	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y)
	    .orient("left");

	var line = d3.svg.line()
	    .x(function(d) {return x(d[0]); })
	    .y(function(d) {return y(d[1]); })
	    .interpolate("basis-open")


	// ToDo: transities ipv redraw

	function d3draw_nbhtime(data, title) {

		$("#d3_per_buurt").empty(); 
		var svg = d3.select("#d3_per_buurt").append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


		x.domain(d3.extent(data, function(d) { return d[0]; }));
  		y.domain([0, 20]);

  		svg.append("g")
		      .attr("class", "x axis")
		      .attr("transform", "translate(0," + height + ")")
		      .call(xAxis);

		  svg.append("g")
		      .attr("class", "y axis")
		      .call(yAxis)
		    .append("text")
		      .attr("transform", "rotate(-90)")
		      .attr("y", 6)
		      .attr("dy", ".71em")
		      .style("text-anchor", "end")
		      .text("Aantal");

		  svg.append("path")
		      .datum(data)
		      .attr("class", "line")
		      .attr("d", line);

		function type(d) {
		  d[0] = formatDate.parse(d[0]);
		  return d;
		}

	}


	d3draw_nbhtime(data_nbh['A'], 'A');


	function d3draw_origin(data) {

		/* D3 code */
		var margin = {top: 5, right: 25, bottom: 17, left: 35},
		    width = 200 - margin.left - margin.right,
		    height = 345 - margin.top - margin.bottom;

		var x = d3.scale.ordinal()
		    .rangeRoundBands([0, width], .1);

		var y = d3.scale.linear()
		    .range([height, 0]);

		var xAxis = d3.svg.axis()
		    .scale(x)
		    .orient("bottom");

		var yAxis = d3.svg.axis()
		    .scale(y)
		    .orient("left")
		    .ticks(10, "%");

		var svg = d3.select("#d3_per_loc")
			.append("div")
			.classed("svg-container", true)

		.append("svg")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			x.domain(data.map(function(d) { return d.id; }));
	  		y.domain([0, d3.max(data, function(d) { return d.percentage; })]);

			svg.append("g")
			      .attr("class", "x axis")
			      .attr("transform", "translate(0," + height + ")")
			      .call(xAxis);
			svg.append("g")
			  .attr("class", "y axis")
			  .call(yAxis)
			.append("text")
			  .attr("transform", "rotate(-90)")
			  .attr("y", 6)
			  .attr("dy", ".71em")


			svg.selectAll(".bar")
			  .data(data)
			.enter().append("rect")
			  .attr("class", function(d) {return d.id})
			  .attr("class", "bar")
			  .attr("x", function(d) { return x(d.id); })
			  .attr("width", x.rangeBand())
			  .attr("y", function(d) { return y(d.percentage); })
			  .attr("height", function(d) { return height - y(d.percentage); });
	}	

	d3draw_origin(data_place)

});
