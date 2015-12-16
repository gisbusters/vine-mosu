var map = L.map('map', {
  center: [44.4166,26.1],
  zoom: 7,
  maxZoom: 9,
  minZoom: 6
});

var londonParisRomeBerlinBucarest = [[48.516667, 20.383333], [44.4166,26.1]];

var d = new Date();
var hour = d.getHours();
var min = d.getMinutes();

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>, <a href="http://geo-spatial.org/">Geo-spatial</a> and <a href="http://gisbusters.com/">GisBusters</a>, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mirceaciu.8a527c1d',
    accessToken: 'pk.eyJ1IjoibWlyY2VhY2l1IiwiYSI6IjNkNGFiMTU5NjRlNGNkZTA1ZGExMDVkNjUxYzZmZDlhIn0.5E0fCQOJlyAJFjkEYX1NGg'
}).addTo(map);


if (hour == 18 && min < 40 ) {
  var marker2 = L.Marker.movingMarker(londonParisRomeBerlinBucarest,
      [6000], {autostart: true, loop: true}).addTo(map);
} else {
    alert('mosu nu a plecat')
}
