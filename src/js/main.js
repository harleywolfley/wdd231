function updateParkInformation() {
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.querySelector("#parkStates").innerHTML = "ID, MT, WY"
    document.getElementById("heroImage").src = "/images/yellowstone.jpg"
}

updateParkInformation()

addEventListener

// Notes
// document.querySelector("#parkStates").innerHTML = "<p>ID, MT, WY</p>" ---- innerHTML allows us to add tags too
// document.getElementById("hero-image").src = "/images/yellowstone.jpg" ---- this allows us to adjust the tag by using .src