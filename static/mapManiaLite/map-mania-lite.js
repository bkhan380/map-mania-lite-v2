


var gMap;
var favoritePlaces = [
    {content: '<strong>#1: Bolingbrook, IL... My HOME!<strong>', coordinates:{lat:41, lng:-88}, iconImagePath:"ong.png"},
    {content:'<strong>#2: Quetico!<strong>', coordinates:{lat:48.5,lng:-91.3}, iconImagePath:"two.png"},
    {content:'Santorini, Greece', coordinates:{lat:36.3932,lng:25.4615}, iconImagePath:"flag.png"},
    {content:'Florence, Italy', coordinates:{lat:43.7696,lng:11.2558}, iconImagePath:"flag.png"},
    {content:'Myrtle Beach, SC', coordinates:{lat:33.6891,lng:-78.8867}, iconImagePath:"flag.png"},
    {content:'Prague, Czechia', coordinates:{lat:50.0755,lng:14.4378}, iconImagePath:"flag.png"},
    {content:'Nelson, New Zealand', coordinates:{lat:-41.2706,lng:173.2840}, iconImagePath:"flag.png"},
    {content:'Krakow, Poland', coordinates:{lat:50.0647,lng:19.9450}, iconImagePath:"flag.png"},
    {content:'Zakopane, Poland', coordinates:{lat:49.2992,lng:19.9496}, iconImagePath:"flag.png"},
    {content:'Canoe Bay, WI', coordinates:{lat:45.3306,lng:-91.4918}, iconImagePath:"flag.png"}
];

var currentPlaceIndex = 9;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 10;

function initApplication() {
    console.log('Map Mania Lite - Starting!');
}

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file. 
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    // Add a marker for Canoe Bay, WI    
    var marker = new google.maps.Marker({position:{lat:41,lng:-88}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker3 = new google.maps.Marker({position:{lat:25.761681,lng:-80.191788}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker4 = new google.maps.Marker({position:{lat:35.920834,lng:74.308334}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker5 = new google.maps.Marker({position:{lat:24.860966,lng:66.990501}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker6 = new google.maps.Marker({position:{lat:37.773972,lng:-122.431297}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker7 = new google.maps.Marker({position:{lat:38.936604,lng:-119.986649}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker8 = new google.maps.Marker({position:{lat:33.770050,lng:-118.193741}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker9 = new google.maps.Marker({position:{lat:40.730610,lng:-73.935242}, map:gMap});
    //Add Another Marker For My Favorite Place
    var marker10 = new google.maps.Marker({position:{lat:43.651070,lng:-79.347015}, map:gMap});








    // Add a second marking with a custom icon, an Info window, and a listener.
    var marker2 = new google.maps.Marker({position:{lat:36.3932,lng:25.4615}, map:gMap});
    marker2.setIcon('https://maps.google.com/mapfiles/kml/shapes/info-i_maps.png');

    var infoWindow = new google.maps.InfoWindow({content:'Santorini, Greece'});
    marker2.addListener('click', function() {
        infoWindow.open(gMap, marker2);
    });

    // Note that several message boards suggested using 'idle' instead of 'bounds_changed' because 
    // 'bounds_changed' gets called over and over when the user drags the map.
    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

    SetHint("Hint 1");
    SetScore(score);
}

function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;

    // Check if Canoe Bay, WI is in the currently displayed map
    if (gMap.getBounds().contains({lat:45.3306,lng:-91.4918})) {
        inBounds = true;
    }

    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}

function SetScore() {
    document.getElementById("score-id").value = score; 
}
