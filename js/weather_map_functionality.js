"use strict";
// ADDS MAP TO #MAP DIV
mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 1,
    center: [-103.771556, 44.967243]
});

// FETCHES WEATHER OBJECT FOR GIVEN LAT/LON DECIMAL COORDINATES (auto parses JSON)
fetch(
    `${OPEN_WEATHER.base}weather?lat=44.967243&lon=-103.771556&units=imperial&appid=${OPEN_WEATHER.key}`,
    {method: 'GET'}
)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('There was an error:', error));


// MAPBOX GEOCODER CONTROL API - ADDS SEARCH BOX TO MAP
// Input field class: .mapboxgl-ctrl-geocoder--input
const geocoder = new MapboxGeocoder({
    accessToken: MAPBOX_KEY,
    marker: {
        color: 'orange',
    },
    mapboxgl: mapboxgl
});
map.addControl(geocoder);

// GETS THE GEOJSON OBJECT FOR THE GEOCODER SEARCH QUERY
geocoder.on('results', function(results) {
    console.log(results);
})