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


// Order System

let pizzaValues = {
    traditional: 23.99,
    premium: 31.99,
    dessert: 21.99
};

let values = [];

const traditionalRemoveButtons = document.querySelectorAll(".traditional-negative");
const traditionalAddButtons = document.querySelectorAll(".traditional-addition");

const premiumRemoveButtons = document.querySelectorAll(".premium-negative");
const premiumAddButtons = document.querySelectorAll(".premium-addition");

const dessertRemoveButtons = document.querySelectorAll(".dessert-negative");
const dessertAddButtons = document.querySelectorAll(".dessert-addition");


traditionalRemoveButtons.forEach(button => {
    button.addEventListener("click", () => {
        let currentPizza = button.closest(".order-description");
        let pizzaQuantity = currentPizza.querySelector(".order-quantity")

        let value = Number(pizzaQuantity.textContent);

        if (value > 0) {
            value = value - 1
            RemovePizzaValue(pizzaValues.traditional);
        };
        pizzaQuantity.innerHTML = `${value}`;
    });
});

traditionalAddButtons.forEach(button => {
    button.addEventListener("click", () => {
        let currentPizza = button.closest(".order-description");
        let pizzaQuantity = currentPizza.querySelector(".order-quantity")

        let value = Number(pizzaQuantity.textContent);

        if (value >= 0) {
            value = value + 1
            AddPizzaValue(pizzaValues.traditional);
        };
        pizzaQuantity.innerHTML = `${value}`;
    });
});


premiumRemoveButtons.forEach(button => {
    button.addEventListener("click", () => {
        let currentPizza = button.closest(".order-description");
        let pizzaQuantity = currentPizza.querySelector(".order-quantity")

        let value = Number(pizzaQuantity.textContent);

        if (value > 0) {
            value = value - 1
            RemovePizzaValue(pizzaValues.premium);
        };
        pizzaQuantity.innerHTML = `${value}`;
    });
});

premiumAddButtons.forEach(button => {
    button.addEventListener("click", () => {
        let currentPizza = button.closest(".order-description");
        let pizzaQuantity = currentPizza.querySelector(".order-quantity")

        let value = Number(pizzaQuantity.textContent);

        if (value >= 0) {
            value = value + 1
            AddPizzaValue(pizzaValues.premium);
        };
        pizzaQuantity.innerHTML = `${value}`;
    });
});


dessertRemoveButtons.forEach(button => {
    button.addEventListener("click", () => {
        let currentPizza = button.closest(".order-description");
        let pizzaQuantity = currentPizza.querySelector(".order-quantity")

        let value = Number(pizzaQuantity.textContent);

        if (value > 0) {
            value = value - 1
            RemovePizzaValue(pizzaValues.dessert);
        };
        pizzaQuantity.innerHTML = `${value}`;
    });
});

dessertAddButtons.forEach(button => {
    button.addEventListener("click", () => {
        let currentPizza = button.closest(".order-description");
        let pizzaQuantity = currentPizza.querySelector(".order-quantity")

        let value = Number(pizzaQuantity.textContent);

        if (value >= 0) {
            value = value + 1
            AddPizzaValue(pizzaValues.dessert);
        };
        pizzaQuantity.innerHTML = `${value}`;
    });
});

const totalPrice = document.querySelector("#order-total");


function CalculateTotal(array) {
    const submitButton = document.querySelector("#submit-button");
    const initialValue = 0;
    const total = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,);
    
    if (total != 0) {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
    totalPrice.innerHTML = `Total: $${total.toFixed(2)}`;
}

function AddPizzaValue(price) {
    values.push(price);
    CalculateTotal(values)
}

function RemovePizzaValue(price) { 

    let index = values.indexOf(price);
    
    if (index != -1) {
        
        values.splice(index, 1);
    } else { }
    
    CalculateTotal(values);
}
// LocalStorage

const form = document.querySelector(".form")
let ordersSent = Number(window.localStorage.getItem("ordersSentLs")) || 0;

form.addEventListener("submit", function () {
    ordersSent++;
    localStorage.setItem("ordersSentLs", ordersSent);
});