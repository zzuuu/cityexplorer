////////////////////////////////////////////////////////////

var mapCenterCoordinates = '51.521428,-0.071754';
var mapCenter = { 'center': mapCenterCoordinates };
var mapCenterMarker = { /*id:'m_1',*/ 'position': mapCenterCoordinates }
var mapZoom = 16;

$( document ).delegate("#home", "pageshow", function() {
	$('#map_canvas_home').gmap(mapCenter);
	$('#map_canvas_home').gmap('option', 'zoom', mapZoom);
	$('#map_canvas_home').gmap('addMarker', mapCenterMarker );
});

$( document ).delegate("#route_search_results", "pageshow", function() {
	$('#map_canvas_route_search_results').gmap(mapCenter);
	$('#map_canvas_route_search_results').gmap('option', 'zoom', mapZoom);
	$('#map_canvas_route_search_results').gmap('addMarker', mapCenterMarker );
	$('#map_canvas_route_search_results').gmap('displayDirections',
		{
			'origin': '51.521428,-0.071754',
			'destination': '51.521428,-0.071754',
			'waypoints': [
				{ "location": '51.522483,-0.070157' },
				{ "location": 'Weavers Community Space 15 Kelsey St, London, UK E2 6HD' },
				{ "location": 'Tas Firin Restaurant, 160 Bethnal Green Road, City of London, London, Greater London E2 6DG' },
				{ "location": 'Elemental - Antiques, 67 Brushfield Street, City of London, London, Greater London E1 6AA' },
				{ "location": '51.521849,-0.067776' }
			],
			'travelMode': google.maps.DirectionsTravelMode.WALKING
		},
		{},
		function(result, status) {}
	);
});

$( document ).delegate("#route_progress", "pageshow", function() {
	$('#map_canvas_route_progress').gmap('addMarker', { 'position': '51.52299,-0.066175' } );
	$('#map_canvas_route_progress').gmap('displayDirections',
		{
			'origin': '51.521428,-0.071754',
			'destination': '51.521428,-0.071754',
			'waypoints': [
				{ "location": '51.522483,-0.070157' },
				{ "location": 'Weavers Community Space 15 Kelsey St, London, UK E2 6HD' },
				{ "location": 'Tas Firin Restaurant, 160 Bethnal Green Road, City of London, London, Greater London E2 6DG' },
				{ "location": 'Elemental - Antiques, 67 Brushfield Street, City of London, London, Greater London E1 6AA' },
				{ "location": '51.521849,-0.067776' }
			],
			'travelMode': google.maps.DirectionsTravelMode.WALKING
		},
		{},
		function(result, status) {
			window.setTimeout(
				function() {
					$('#map_canvas_route_progress').gmap('option', 'zoom', 17);
					$('#map_canvas_route_progress').gmap('option', 'center', new google.maps.LatLng(51.52299, -0.066175));
				},
				1
			);
			
		}
	);
	
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
	if(newSelection == "tab1_filter") {
		$('#map_canvas_route_search_results_filtered').gmap(mapCenter);
		$('#map_canvas_route_search_results_filtered').gmap('option', 'zoom', mapZoom);
		$('#map_canvas_route_search_results_filtered').gmap('addMarker', mapCenterMarker );
		$('#map_canvas_route_search_results_filtered').gmap('displayDirections',
			{
				'origin': '51.521428,-0.071754',
				'destination': '51.521428,-0.071754',
				'waypoints': [
					{ "location": '51.522483,-0.070157' },
					{ "location": 'Weavers Community Space 15 Kelsey St, London, UK E2 6HD' },
					{ "location": 'Tas Firin Restaurant, 160 Bethnal Green Road, City of London, London, Greater London E2 6DG' },
					{ "location": 'Elemental - Antiques, 67 Brushfield Street, City of London, London, Greater London E1 6AA' },
					{ "location": '51.521849,-0.067776' }
				],
				'travelMode': google.maps.DirectionsTravelMode.WALKING
			},
			{},
			function(result, status) {}
		);
	}
	prevSelectionFilter = newSelection;
});