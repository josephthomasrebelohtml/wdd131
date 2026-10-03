// Dates

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").textContent = document.lastModified;


// Local Storage

let reviewsCompleted = Number(window.localStorage.getItem("reviewsCompletedLs")) || 0;

const reviews = document.querySelector("#reviews");
if (reviewsCompleted === 1) {
    reviews.innerHTML = `1 Review`;
} else {
    reviews.innerHTML = `${reviewsCompleted} Reviews`;
}