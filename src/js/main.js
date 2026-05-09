function updateParkInformation() {
    document.getElementById("parkName").textContent = "Yellowstone"
    document.querySelector("#parkType").textContent = "National Park"
    document.querySelector("#parkStates").innerHTML = "ID, MT, WY"
    document.getElementById("heroImage").src = "/images/yellowstone.jpg"
}

updateParkInformation()

function addEventListeners() {
    const menuTrigger = document.querySelector("#header-menu-trigger");
    const menuOptions = document.querySelector("#header-menu-options");
    const overview = document.querySelector(".overview");

    if (menuTrigger && menuOptions) {
        menuTrigger.addEventListener("click", () => {
            menuOptions.classList.toggle("is-hidden");
        });
        menuOptions.addEventListener("click", (event) => {
            const itemName = event.target.textContent;
            console.log(itemName);
        })
    }

    if (overview) {
        overview.addEventListener("mouseenter", ()=> {
            overview.classList.add("overlay-hover");
        });

        overview.addEventListener("mouseleave", () => {
            overview.classList.remove("overlay-hover");
        });
    }
}

addEventListeners()

// Notes
// document.querySelector("#parkStates").innerHTML = "<p>ID, MT, WY</p>" ---- innerHTML allows us to add tags too
// document.getElementById("hero-image").src = "/images/yellowstone.jpg" ---- this allows us to adjust the tag by using .src