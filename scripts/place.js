// Dates

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").textContent = document.lastModified;


// Windchill

const temperature = 23;
const windSpeed = 8;
const windChill = document.querySelector("#windChill");

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + (0.6215 * temperature) - (11.37 * windSpeed ** 0.16) + (0.3965 * temperature * windSpeed ** 0.16));
}

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.innerHTML = ` ${calculateWindChill(temperature, windSpeed).toFixed(0)}°C`;
} else {
    windChill.innerHTML = ` N/A`
}


