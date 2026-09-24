let names = ['Nancy', 'Blessing', 'Jorge', 'Svetlana', 'Bob'];

const namesB = names.filter((name) => name.charAt(0) === "B");


let namesLength = names.map((name) => name.length);



names.reduce((total, name) => total + name.length, 0) / names.length;


const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);

let esomeprazole = { 'id': 'mnb78932', 'amount': 23145, 'amountType': 'ct', 'expDate': '10/01/2021' }

const dose = esomeprazole[0].amount[0];