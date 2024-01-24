const apiKey = "6f25dea7cb8c3769f7158c4f38de781f";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIocn = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

    if(data.weather[0].main== "Clouds"){
        weatherIocn.src = "images/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIocn.src="images/rain.png"
    }
    else if(data.weather[0].main=="Clear"){
        weatherIocn.src="images/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        weatherIocn.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIocn.src="images/mist.png"
    }
    document.querySelector(".weather").style.display="block"
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
}); 

