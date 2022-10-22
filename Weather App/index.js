const searchTerm = document.getElementById("searchTerm");
const search = document.getElementById("search");
const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const image = document.getElementById("image");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const form = document.getElementById("form");


const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const API_key = "3cdc09f119d0cd3ca3f7c3b0d5da3635";

async function getWeather (cityname) {
    const resp = await fetch(API_URL + cityname + "&appid=" + API_key);
    const respData = await resp.json();

    showWeather(respData);
}

getWeather("indore")

function showWeather(data) {
    city.innerHTML = `Weather in ${data.name}`;
    temperature.innerHTML = data.main.temp;
    description.innerHTML = data.weather[0].description;
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    windSpeed.innerHTML = `Wind speed: ${data.wind.speed} km/h`;
    image.src = ``;

    image.innerHTML = `
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                    `
}

// form.addEventListener("submit", (e) => {
    

//     const city = searchTerm.value;
        
//         if(city) {
//             getWeather(city);
//         }
        
//         searchTerm.value = ""

//         e.preventDefault();
        
// })
    








