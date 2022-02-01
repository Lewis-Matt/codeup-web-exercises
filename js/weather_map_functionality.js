"use strict";
(function () {
    // Initialize weather/location data to a default location (San Antonio)
    let lon = -98.489765;
    let lat = 29.426742;
    let defaultCords = {
        lng: lon,
        lat: lat
    }

    // ADDS MAP TO #MAP DIV
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        zoom: 14,
        center: [lon, lat],
    });

    // MAPBOX GEOCODER CONTROL API: ADDS SEARCH BOX TO MAP
    // NOTE: Input field class: .mapboxgl-ctrl-geocoder--input
    const geocoder = new MapboxGeocoder({
        accessToken: MAPBOX_KEY, // Marker placed and styling
        marker: {
            color: 'orange',
        }, mapboxgl: mapboxgl
    }).setLimit(1);
    // NOTE: I set a limit to the number of results displayed, as the array created was random, and I could not reliably access the correct index to pass the lat/lon to the weather call

    // GEOCODER SEARCH BOX ADDED TO NAV ELEMENT
    document.getElementById('geocoder-search').appendChild(geocoder.onAdd(map));

    // ADDS A MARKER WHEREVER THE USER CLICKS AND UPDATES WEATHER
    let marker = new mapboxgl.Marker();

    function add_marker(event) {
        let coordinates = event.lngLat;
        console.log(coordinates)
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        marker.setLngLat(coordinates).addTo(map);
        lat = coordinates.lat;
        lon = coordinates.lng;
        endpoint = `${OPEN_WEATHER.base}onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${OPEN_WEATHER.key}`;
        // Reverse geocode to display clicked marker as the new location
        reverseGeocode(coordinates, MAPBOX_KEY).then(function (results) {
            $('#current-city').text(results);
        })
        getWeather(endpoint)
    }

    map.on('click', add_marker);
    // FETCHES WEATHER OBJECT FOR GIVEN DEFAULT COORDINATES
    let endpoint = `${OPEN_WEATHER.base}onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${OPEN_WEATHER.key}`;

    // GETS WEATHER FOR COORDINATES
    function getWeather(url) {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(displayWeather);
    }

    // GET NAME OF DEFAULT LOCATION
    reverseGeocode(defaultCords, MAPBOX_KEY).then(function (results) {
        $('#current-city').text(results);
    });
    // GET WEATHER FOR DEFAULT LOCATION
    getWeather(endpoint)

    // GETS THE GEOJSON OBJECT FOR THE GEOCODER SEARCH QUERY
    geocoder.on('results', function (results) {
        console.log(results);
        // Gets the coordinates from geoJSON object
        // Note: mapbox gl/geoJSON uses lon/lat, openweather uses lat/lon
        // The geocoder results.features[] is an array of the top 5 matches/suggestions.
        lon = results.features[0].geometry.coordinates[0];
        lat = results.features[0].geometry.coordinates[1];
        console.log(`Search result longitude: ${lon}`);
        console.log(`Search result latitude: ${lat}`);

        // FETCHES WEATHER OBJECT FOR GIVEN LAT/LON DECIMAL COORDINATES
        endpoint = `${OPEN_WEATHER.base}onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${OPEN_WEATHER.key}`;
        getWeather(endpoint);

        // ADD CITY TO HTML
        $('#current-city').text(results.features[0].place_name);
    });

    function reverseGeocode(coordinates, token) {
        let baseUrl = 'https://api.mapbox.com';
        let endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function (data) {
                return data.features[0].place_name;
            });
    }

    // ADDS WEATHER TO HTML ELEMENTS
    function displayWeather(response) {
        // TODAY
        $('#current-temp').text(response.current.temp)
        $('#current-conditions').text(response.current.weather[0].description)
        $('#currentHI').text(response.daily[0].temp.max)
        $('#currentLO').text(response.daily[0].temp.min)

        // FIVE-DAY FORECAST
        // Day 1
        let day1 = response.daily[1];
        $('#weekday1').text(aryDates[0])
        $('#icon1').text(day1.weather[0].description)
        $('#low1').text(day1.temp.min)
        $('#hi1').text(day1.temp.max)
        // Day 2
        let day2 = response.daily[2];
        $('#weekday2').text(aryDates[1])
        $('#icon2').text(day1.weather[0].description)
        $('#low2').text(day1.temp.min)
        $('#hi2').text(day1.temp.max)
        // Day 3
        let day3 = response.daily[3];
        $('#weekday3').text(aryDates[2])
        $('#icon3').text(day3.weather[0].description)
        $('#low3').text(day3.temp.min)
        $('#hi3').text(day3.temp.max)
        // Day 4
        let day4 = response.daily[4];
        $('#weekday4').text(aryDates[3])
        $('#icon4').text(day4.weather[0].description)
        $('#low4').text(day4.temp.min)
        $('#hi4').text(day4.temp.max)
        // Day 5
        let day5 = response.daily[5];
        $('#weekday5').text(aryDates[4])
        $('#icon5').text(day5.weather[0].description)
        $('#low5').text(day5.temp.min)
        $('#hi5').text(day5.temp.max)
    }
})();


