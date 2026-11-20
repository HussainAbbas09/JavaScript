async function getWeather() {

    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        let cityURL = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        let cityResponse = await fetch(cityURL);
        let cityData = await cityResponse.json();

        if (!cityData.results) {
            alert("City not found!");
            return;
        }

        let latitude = cityData.results[0].latitude;
        let longitude = cityData.results[0].longitude;

        let cityName = cityData.results[0].name;

        let weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;

        let weatherResponse = await fetch(weatherURL);
        let weatherData = await weatherResponse.json();

        let current = weatherData.current;

        document.getElementById("cityName").innerText = cityName;
        document.getElementById("temperature").innerText =
            current.temperature_2m + " °C";

        document.getElementById("humidity").innerText =
            current.relative_humidity_2m;

        document.getElementById("wind").innerText =
            current.wind_speed_10m;

        let code = current.weather_code;
        let condition = "";
        let icon = "";

        if (code === 0) {
            condition = "Clear Sky";
            icon = "☀️";
        }
        else if (code <= 3) {
            condition = "Partly Cloudy";
            icon = "🌤️";
        }
        else if (code <= 48) {
            condition = "Foggy";
            icon = "🌫️";
        }
        else if (code <= 67) {
            condition = "Rainy";
            icon = "🌧️";
        }
        else if (code <= 77) {
            condition = "Snowy";
            icon = "❄️";
        }
        else if (code <= 82) {
            condition = "Rain Showers";
            icon = "🌦️";
        }
        else if (code <= 99) {
            condition = "Thunderstorm";
            icon = "⛈️";
        }

        document.getElementById("condition").innerText = condition;
        document.getElementById("icon").innerText = icon;

    }
    catch (error) {
        alert("Something went wrong. Please try again.");
    }
}