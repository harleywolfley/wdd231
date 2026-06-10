import { getWeatherData } from "./weather-api.js"
import { renderWeatherCard } from "./weather-render.js"
// function getWeatherData(){
//         //api.js
//         const data = {
//             "location" : "Rexburg",
//             "condition" : "Sunny",
//             "icon" : "&#9728",
//             "temperature" : "50 Degrees",
//             "windspeed" : "2 MPH"
//         };
//         return data;
// }

// function renderWeatherCard(data) {
//     //render.js
//     const weatherObj = document.getElementById("weather")
//     weatherObj.innerHTML = `
//     <h2>${data.location} ${data.icon}</h2>
//     <h3>Condition: ${data.condition}</h3>
//     <h3>Temperature: ${data.temperature}</h3>
//     <h3>Windspeed: ${data.windspeed}</h3>
//     `
// }

function doWeather(){
    //main.js
    const data = getWeatherData()
    renderWeatherCard(data)
}

doWeather()