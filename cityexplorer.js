////////////////////////////////////////////////////////////
				
$('#home').live('pageinit', function() {
	$('#map_canvas_home').gmap().bind('init', function(evt, map) {
		$('#map_canvas_home').gmap('getCurrentPosition', function(position, status) {
			if ( status === 'OK' ) {
				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				$('#map_canvas_home').gmap('addMarker', {'position': clientPosition, 'bounds': true});
				$('#map_canvas_home').gmap('addShape', 'Circle', { 
					'strokeWeight': 0, 
					'fillColor': "#008595", 
					'fillOpacity': 0.25, 
					'center': clientPosition, 
					'radius': 15, 
					'clickable': false 
				});
			}
		});   
	});
});

$('#route_search_results').live('pageinit', function() {
	$('#map_canvas_route_search_results').gmap().bind('init', function(evt, map) {
		$('#map_canvas_route_search_results').gmap('getCurrentPosition', function(position, status) {
			if ( status === 'OK' ) {
				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				$('#map_canvas_route_search_results').gmap('addMarker', {'position': clientPosition, 'bounds': true});
				$('#map_canvas_route_search_results').gmap('addShape', 'Circle', { 
					'strokeWeight': 0, 
					'fillColor': "#008595", 
					'fillOpacity': 0.25, 
					'center': clientPosition, 
					'radius': 15, 
					'clickable': false 
				});
			}
		});   
	});
});

$('#route_search_results_filtered').live('pageinit', function() {
	$('#map_canvas_route_search_results_filtered').gmap().bind('init', function(evt, map) {
		$('#map_canvas_route_search_results_filtered').gmap('getCurrentPosition', function(position, status) {
			if ( status === 'OK' ) {
				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				$('#map_canvas_route_search_results_filtered').gmap('addMarker', {'position': clientPosition, 'bounds': true});
				$('#map_canvas_route_search_results_filtered').gmap('addShape', 'Circle', { 
					'strokeWeight': 0, 
					'fillColor': "#008595", 
					'fillOpacity': 0.25, 
					'center': clientPosition, 
					'radius': 15, 
					'clickable': false 
				});
			}
		});   
	});
});

////////////////////////////////////////////////////////////

var prevSelection = "tab1";
$("#navbar ul li").live("click",function(){
	var newSelection = $(this).children("a").attr("data-tab-class");
	$("."+prevSelection).addClass("ui-screen-hidden");
	$("."+newSelection).removeClass("ui-screen-hidden");
	prevSelection = newSelection;
});

var prevSelectionFilter = "tab2_filter";
$("#navbar_filter ul li").live("click",function(){
	var newSelection = $(this).children("a").attr("data-tab-class");
	$("."+prevSelectionFilter).addClass("ui-screen-hidden");
	$("."+newSelection).removeClass("ui-screen-hidden");
	prevSelectionFilter = newSelection;
});