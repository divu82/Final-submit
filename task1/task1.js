document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'f4869762404bfa13cd1893a72ba546a3';
    document.getElementById('cityInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            searchWeather();
        }
    });
    function searchWeather() {
        const city = document.getElementById('cityInput').value.trim();
        if (city !== '') {
            fetchWeather(city);
        }
    }

    // Fetch data from OpenWeatherMap API
    function fetchWeather(city) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}&q=${city},IN&units=metric`;
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displaydata(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                updateWeatherInfo('Failed to fetch weather data.');
            });
    }
    function timetoist(time){
        const date = new Date(time * 1000); 
        const ist = 5.5 * 60 * 60 * 1000;
        const istDate = new Date(date.getTime() + ist); 
        return istDate.toLocaleTimeString('en-IN', { hour12: false });
    }
    function displaydata(data) {
        const city=document.getElementById("city");
        const temperature=document.getElementById('temperature');
        const weatherstatus=document.getElementById("weatherstatus")
        const visibility=document.getElementById('visibility');
        const windspeed=document.getElementById('windspeed');
        const humidity=document.getElementById('humidity');
        const sunrise=document.getElementById('sunrise');
        const sunset=document.getElementById('sunset');

        city.innerText=data.name;
        temperature.innerText= `${data.main.temp} °C`;
        weatherstatus.innerText=  data.weather[0].main;
        windspeed.innerText= `${data.visibility} meters`;
        visibility.innerText=data.visibility;
        humidity.innerText= data.humidity;
        sunrise.innerText=timetoist(data.sys.sunrise);
        sunset.innerText=timetoist(data.sys.sunset);
    }
});
