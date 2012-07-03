////////////////////////////////////////////////////////////

// https://maps.google.co.uk/maps?q=150+Brick+Lane,+London&hl=en&ll=51.521428,-0.071754&spn=0.007797,0.018926&sll=51.521548,-0.071325&sspn=0.007797,0.018926&hnear=150+Brick+Ln,+London+E1+6RU,+United+Kingdom&t=m&z=16

$('#home').live('pageinit', function() {
	$('#map_canvas_home').gmap({ 'center': '51.521428,-0.071754' });
	$('#map_canvas_home').gmap('option', 'zoom', 16);
	$('#map_canvas_home').gmap('addMarker', { /*id:'m_1',*/ 'position': '51.521428,-0.071754' } );
	$('#map_canvas_home').gmap('displayDirections',
		{
			'origin': '51.521428,-0.071754',
			'destination': '51.521428,-0.071754',
			//'waypoints': ['51.621428,-0.071754'],
			'travelMode': google.maps.DirectionsTravelMode.WALKING
		},
		{
			'panel': document.getElementById('panel')
		},
		function(result, status) {
			if ( status === 'OK' ) {
				console.log(result);
			}
	});
});

// $('#route_search_results').live('pageinit', function() {
// 	$('#map_canvas_route_search_results').gmap().bind('init', function(evt, map) {
// 		$('#map_canvas_route_search_results').gmap('getCurrentPosition', function(position, status) {
// 			if ( status === 'OK' ) {
// 				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
// 				$('#map_canvas_route_search_results').gmap('addMarker', {'position': clientPosition, 'bounds': true});
// 				$('#map_canvas_route_search_results').gmap('addShape', 'Circle', { 
// 					'strokeWeight': 0, 
// 					'fillColor': "#008595", 
// 					'fillOpacity': 0.25, 
// 					'center': clientPosition, 
// 					'radius': 15, 
// 					'clickable': false 
// 				});
// 			}
// 		});   
// 	});
// });
// 
// $('#route_search_results_filtered').live('pageinit', function() {
// 	$('#map_canvas_route_search_results_filtered').gmap().bind('init', function(evt, map) {
// 		$('#map_canvas_route_search_results_filtered').gmap('getCurrentPosition', function(position, status) {
// 			if ( status === 'OK' ) {
// 				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
// 				$('#map_canvas_route_search_results_filtered').gmap('addMarker', {'position': clientPosition, 'bounds': true});
// 				$('#map_canvas_route_search_results_filtered').gmap('addShape', 'Circle', { 
// 					'strokeWeight': 0, 
// 					'fillColor': "#008595", 
// 					'fillOpacity': 0.25, 
// 					'center': clientPosition, 
// 					'radius': 15, 
// 					'clickable': false 
// 				});
// 			}
// 		});   
// 	});
// });
// 
// $('#route_progress').live('pageinit', function() {
// 	$('#map_canvas_route_progress').gmap().bind('init', function(evt, map) {
// 		$('#map_canvas_route_progress').gmap('getCurrentPosition', function(position, status) {
// 			if ( status === 'OK' ) {
// 				var clientPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
// 				$('#map_canvas_route_progress').gmap('addMarker', {'position': clientPosition, 'bounds': true});
// 				$('#map_canvas_route_progress').gmap('addShape', 'Circle', { 
// 					'strokeWeight': 0, 
// 					'fillColor': "#008595", 
// 					'fillOpacity': 0.25, 
// 					'center': clientPosition, 
// 					'radius': 15, 
// 					'clickable': false 
// 				});
// 			}
// 		});   
// 	});
// });

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