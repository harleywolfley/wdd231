export function renderWeatherCard(data) {
    const weatherObj = document.getElementById("weather")
    weatherObj.innerHTML = `
    <h2>${data.location} ${data.icon}</h2>
    <h3>Condition: ${data.condition}</h3>
    <h3>Temperature: ${data.temperature}</h3>
    <h3>Windspeed: ${data.windspeed}</h3>
    `
}