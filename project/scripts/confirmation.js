// Hamburguer Button

const hamButton = document.querySelector(".menu");
const navigation = document.querySelector(".navigation");
let menuLists = document.querySelectorAll(".menu-list");

hamButton.addEventListener("click", addOpenClasses)

function addOpenClasses() {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");

    menuLists.forEach(list => {
        list.classList.toggle("open");
    });
}

// LocalStorage

let ordersSent = Number(window.localStorage.getItem("ordersSentLs")) || 0;

const orders = document.querySelector("#confirmation-text");
if (ordersSent === 1) {
    orders.innerHTML = `Thank you for your 1st Order! <br> We hope to see you again soon!`;
} else if (ordersSent === 0) {
    orders.innerHTML = `Seems like you haven't ordered yet. <br> Visit our Order Website to get started!`
} else {
    orders.innerHTML = `You have sent ${ordersSent} Orders by now! <br> Thank you for the continued Support!`;
}

const confirmationTime = document.querySelector("#confirmation-time");

if (ordersSent !== 0) {
    confirmationTime.innerHTML = `Your order will be ready for Pickup in around 20 Minutes.`
}
