// Dates

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").textContent = document.lastModified;

// Products List
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const selectList = document.querySelector("#products");

products.forEach(product => {
    createListItem(product.id, product.name);
});

function createListItem(id,name) {
    let option = document.createElement("option");
    option.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    option.setAttribute("value", id);
    selectList.appendChild(option);
};


// Local Storage storing
const form = document.querySelector("form")
let reviewsCompleted = Number(window.localStorage.getItem("reviewsCompletedLs")) || 0;

form.addEventListener("submit", function () {
    reviewsCompleted++;
    localStorage.setItem("reviewsCompletedLs", reviewsCompleted);
});


