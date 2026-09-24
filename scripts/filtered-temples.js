// Dates

const year = document.querySelector("#currentyear");

const today = new Date();

year.innerHTML = `${today.getFullYear()}`;

document.getElementById("lastModified").textContent = document.lastModified;

// Hamburguer Button

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
})


// Temples

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Belém Brazil",
        location: "Belém, Brazil",
        dedicated: "2022, November, 20",
        area: 28675,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/belem-brazil/400x250/belem_brazil_temple_exterior.jpg"
    },
    {
        templeName: "Montreal Quebec",
        location: "Longueuil, Quebec, Canada",
        dedicated: "2000, June, 4",
        area: 11550,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/400x250/montreal-quebec-temple-lighted-1169263-wallpaper.jpg"
    },
    {
        templeName: "São Paulo Brazil",
        location: "São Paulo, Brazil",
        dedicated: "1978, November, 2",
        area: 59246,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
    },
];

createTempleCard(temples);

const homeTemples = document.querySelector("#home");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

homeTemples.addEventListener("click", () => {
    createTempleCard(temples); 
});

oldTemples.addEventListener("click", () => {
    let oldTemplesList = temples.filter(temple => (temple.dedicated.split(",")[0]) < 1900);
    createTempleCard(oldTemplesList);
});

newTemples.addEventListener("click", () => {
    let newTemplesList = temples.filter(temple => (temple.dedicated.split(",")[0]) > 1900);
    createTempleCard(newTemplesList);
});

largeTemples.addEventListener("click", () => {
    let largeTemplesList = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemplesList);
});

smallTemples.addEventListener("click", () => {
    let smallTemplesList = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemplesList);
});


function createTempleCard(filteredTempleList) {
    document.querySelector(".pictures").innerHTML = "";
    
    filteredTempleList.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="info">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="info">Dedication:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="info">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".pictures").appendChild(card);

    });
    

}