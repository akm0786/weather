function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8a8b6d22685195a196f66469c7f426a3&units=metric`;
    fetch(url)
        .then(response => { 
            if(response.status === 404){
                alert("City not found");
            }
            return response.json();
        })
        .then(result => {
            const cityname = document.getElementById('cityname');
            const temp = document.getElementById('temp');
            const humidity = document.getElementById('humidity');
            const windSpeed = document.getElementById('windSpeed');
            const sunrise = document.getElementById('sunrise');
            const sunset = document.getElementById('sunset');

            temp.innerHTML = result.main.temp + "&deg;c";
            humidity.innerHTML = result.main.humidity + " %";
            windSpeed.innerHTML = result.wind.speed + " m/s";
            cityname.innerHTML = result.name;
            
            let rise = result.sys.sunrise;
            let set = result.sys.sunset;
            const date = new Date(rise * 1000);
            const date2 = new Date(set * 1000);

            sunrise.innerHTML = date.toLocaleTimeString();
            sunset.innerHTML = date2.toLocaleTimeString();

            console.log(result);

        })
        .catch(error => console.log('error', error));
}

fetchWeather('Lucknow');

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('search').addEventListener('click', (e) => {
        e.preventDefault();
        const city = document.getElementById('citysearch').value;
        console.log(city);

        fetchWeather(city);

    });
});

