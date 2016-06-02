"use strict";

$(document).ready(function() {
	var width = 700;
	var height = 700;

	var svg = d3.select(".spreidingnl")
	.append("div")
	.classed("svg-container", true)
	.append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
   	.attr("viewBox", "0 0 "+ width +" " + height)
   	.classed("svg-content-responsive", true); 

	d3.json("data/nl1859.geojson", function(error, nlshapecollection){
		if (error) return console.error(error)
			d3.json("data/nl1859points.geojson", function(error, pointcollection){
				if (error) return console.error(error)

					console.log(nlshapecollection, pointcollection)

				var projection = d3.geo.mercator()
				    .scale(8400)
				    .center([5.4, 52.1])
				    .translate([width/2, height/2]);

				var path = d3.geo.path()
				    .projection(projection)

				svg.selectAll(".nederland")
				    .data(nlshapecollection.features)
				    .enter().append("path")
				    .classed("region", true)
				    .attr("d", path)
				    .style("fill", "lightgrey")

				svg.selectAll("circle")
				    .data(pointcollection.features)
				    .enter().append("circle")
			           .attr("cx", function(d) {
			                return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[0];
			           })
			           .attr("cy", function(d) {
			                return projection([d.geometry.coordinates[0], d.geometry.coordinates[1]])[1];;
			           })
			           .attr("r", function(d) {
			           		return (d.properties.overleden) / 13 + 3
			           })
			           .style("fill", "tomato")
			           .style("opacity", 0)
			           .attr("start", function(d) {

			           	return (parseInt(d.properties.aanvang.substring(0,3)) +
			           			parseInt(d.properties.aanvang.substring(4,6)))
			           })
			           .attr("end", function(d) {
			           	return (parseInt(d.properties.eind.substring(0,3)) +
			           			parseInt(d.properties.eind.substring(4,6)))
			           });

		    	function viscircles(int) {
					$( "circle" ).each(function( index ) {
						var start = ($( this ).attr( "start" )) 
						var end = ($( this ).attr( "end"))

						if (int > start && int < end) {
							$(this).fadeTo("fast", 0.3);
						} else {
							$(this).fadeTo("fast", 0);
						}
					})
				}

				for (var i = 0; i < 130; i++) {
					viscircles(i)
					
					// if(i){
			  //       	setTimeout( viscircles(i), 1 );
			  //   	}

			    	// get element by ID 
				}


			})
	})



});
