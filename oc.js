function getUserAge() {
    //"TODO - obsługa błędu w przypadku podania złych wartości"
    var age = Number(prompt("Podaj swój wiek"));
    return age;
}

function getManufacturer() {
    var manufacturer = prompt("Podaj markę samochodu").toUpperCase();
    return manufacturer;
}


function computePrice() {
    var age = getUserAge();
    var manufacturer = getManufacturer();
    var basePrice = 6000;
    var price = 1000;
    if (age < 18) {
        return -1;
    } else if (age <= 100) {
        price = 1000 + 1000 * ((100 - age) / 100);
    }
    if (manufacturer === "BMW") {
        price += 500;
    }
    return price;
}

var price = computePrice();

if (price == -1) {
    console.log("Jesteś za młody");
} else {
    console.log("Cena Twojego OC = " + price)
}