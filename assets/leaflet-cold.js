var map = L.map('map', {
  center: [44.4166,26.1],
  zoom: 7,
  maxZoom: 9,
  minZoom: 7
});

var traseuA = [[48.516667, 20.383333], [44.4166,26.1]];
var traseuB = [[48.516667, 20.383333], [44.4166,26.1]];
var traseuC = [[48.516667, 20.383333], [44.4166,26.1]];
var traseuD = [[48.516667, 20.383333], [44.4166,26.1]];
var traseuE = [[48.516667, 20.383333], [44.4166,26.1]];

var santaIcon = L.icon({
    iconUrl: 'assets/santaHead.png',
    shadowUrl: 'assets/santaShadow.png',

    iconSize:     [48, 73], // size of the icon
    shadowSize:   [48, 68], // size of the shadow
    iconAnchor:   [25, 82], // point of the icon which will correspond to marker's location
    shadowAnchor: [13, 77],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var presentIcon = L.icon({
    iconUrl: 'assets/present.png',

    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [25, 82], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, <a href="http://geo-spatial.org/">Geo-spatial</a> and <a href="http://gisbusters.com/">GisBusters</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mirceaciu.8a527c1d',
    accessToken: 'pk.eyJ1IjoibWlyY2VhY2l1IiwiYSI6IjNkNGFiMTU5NjRlNGNkZTA1ZGExMDVkNjUxYzZmZDlhIn0.5E0fCQOJlyAJFjkEYX1NGg'
}).addTo(map);


var marker2 = L.Marker.movingMarker(traseuA,
    [3000], {autostart: true, loop: true, icon: santaIcon}).addTo(map);

L.marker([44, 26], {icon: presentIcon}).addTo(map);
L.marker([46, 25], {icon: presentIcon}).addTo(map);


// ora 1
if (hour == 18) {

} else {
}


// ora 2
if (hour == 19) {

} else {
}


// ora 3
if (hour == 20) {

} else {
}

// ora 4
if (hour == 21) {

} else {
}

// ora 5
if (hour == 22) {

} else {
}
