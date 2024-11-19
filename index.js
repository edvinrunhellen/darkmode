window.onload = function () {
    const button = document.querySelector("#toggle-button");
    button.addEventListener("click", toggle)

    const body = document.querySelector("body");
    const gradient = document.querySelector(".background-gradient");
    const logo = document.querySelector(".logo");
    const headline = document.querySelector("#headline");
    const day = document.querySelector(".dark-mode-day");
    const night = document.querySelector(".dark-mode-night");
    const portrait = document.querySelector(".portrait");

    background

    function toggle(event) {
        if (event.target.checked) {
            goDark()
        } else {
            goLight()
        }
    }

    function goDark() {
        body.style.backgroundImage =
            "linear-gradient(180deg, #10091d 0%, #28193d 100%)";
        body.style.color = "#ffffff";
        gradient.setAttribute("src", "/darkmode/dark-bg.png")
        logo.setAttribute("src", "tasktailLight.png");
        portrait.style.filter = 'grayscale(1) brightness(0.7)';
        day.style.color = "#ffffff4d"
        night.style.color = "#ffffff"
        headline.innerText = "Edvin"

    }

    function goLight() {
        body.style.backgroundImage =
            "linear-gradient(180deg, #e7f0f8 0%, #ffffff 100%)";
        body.style.color = "#262626";
        gradient.setAttribute("src", "light-bg.png")
        logo.setAttribute("src", "tasktailDark.png");
        portrait.style.filter = "unset"
        day.style.color = "#262626"
        night.style.color = "#2626268d"
        headline.innerText = "Light"
    }
};

