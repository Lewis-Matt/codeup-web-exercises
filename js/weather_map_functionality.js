"use strict";
(function () {
    // ADDS MAP TO #MAP DIV
    mapboxgl.accessToken = MAPBOX_KEY;
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/satellite-streets-v11',
        zoom: 1,
        center: [-103.771556, 44.967243]
    });

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

    // Adds a marker wherever the user clicks
    let marker = new mapboxgl.Marker();

    function add_marker (event) {
        let coordinates = event.lngLat;
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        marker.setLngLat(coordinates).addTo(map);
    }

    map.on('click', add_marker);




    // Geocoder search box added to nav element
    document.getElementById('geocoder-search').appendChild(geocoder.onAdd(map));





    // Declares the geoJSON lat/lon variable returned from the Mapbox geocoder
    let lon;
    let lat;


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
        let endpoint = `${OPEN_WEATHER.base}onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${OPEN_WEATHER.key}`;

        function getWeather(url) {
            fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(displayWeather);
        }

        getWeather(endpoint);

        // ADD CITY TO HTML
        $('#current-city').text(results.features[0].place_name);

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

    });

})();


