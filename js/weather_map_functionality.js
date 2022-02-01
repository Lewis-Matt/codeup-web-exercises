"use strict";
// ADDS MAP TO #MAP DIV
mapboxgl.accessToken = MAPBOX_KEY;
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    zoom: 1,
    center: [-103.771556, 44.967243]
});

// FETCHES WEATHER OBJECT FOR GIVEN LAT/LON DECIMAL COORDINATES
// Openweather 'onecall' api call
const endpoint = `${OPEN_WEATHER.base}onecall?lat=33.4&lon=-94.04&units=imperial&exclude=minutely&appid=${OPEN_WEATHER.key}`;
fetch(endpoint,
    {method: 'get'}
)
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error('There was an error:', error));

// MAPBOX GEOCODER CONTROL API: ADDS SEARCH BOX TO MAP
// NOTE: Input field class: .mapboxgl-ctrl-geocoder--input
const geocoder = new MapboxGeocoder({
    accessToken: MAPBOX_KEY,
    // Marker placed and styling
    marker: {
        color: 'orange',
    },
    mapboxgl: mapboxgl
}).setLimit(1);
// NOTE: I set a limit to the number of results displayed, as the array created was random, and I could not reliably access the correct index to pass the lat/lon to the weather call

// Geocoder search box in nav element
document.getElementById('geocoder-search').appendChild(geocoder.onAdd(map));


// References the geoJSON lat/lon returned from the Mapbox geocoder
let coordsFromGeocoder = [];

// GETS THE GEOJSON OBJECT FOR THE GEOCODER SEARCH QUERY
geocoder.on('results', function (results) {
    console.log(results);
    // Gets the coordinates from geoJSON object
    // Note: need to reverse the coordinates as mapbox gl uses lon/lat, openweather uses lat/lon
    // The geocoder results.features[] is an array of the top 5 matches/suggestions.
    // results.features.forEach(){};
});

