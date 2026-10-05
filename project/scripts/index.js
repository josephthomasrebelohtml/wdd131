// Hamburguer Button

const hamButton = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
let menuLists = document.querySelectorAll(".menu-list");

hamButton.addEventListener("click",addOpenClasses)

function addOpenClasses() {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    menuLists.forEach(list => {
        list.classList.toggle("open");
    });

    
}