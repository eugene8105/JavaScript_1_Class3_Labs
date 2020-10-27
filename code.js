// Function for Waukesha Public Library late fee calculation
function libraryLateFee() {

    // get how many days item was late
    var daysLate = prompt("How many days item was late?");
    // parse to number
    daysLate = parseFloat(daysLate);
    // get number of books
    var booksLate = prompt("How many books was late?");
    // parse in number
    booksLate = parseFloat(booksLate);
    // get number of DVDs
    var dvdsLate = prompt("How many books was late?");
    // parse in number
    dvdsLate = parseFloat(dvdsLate);
    // find total fee for books - number of books multiply by number of days.
    var totalBookFee = booksLate * 0.25;
    // find total fee for DVDs - number of DVDs multiply by number of days.
    var totalDVDsFee = dvdsLate * 0.5;
    // add together total fee for books and DVDs
    var totalFee = totalBookFee + totalDVDsFee;
    // output on the screen
    alert(`Your total fee will be ${totalFee}`);

}

// Function for equal split cost
function costEqualSpliter() {
    // pizza price
    var pizzaPrice = 15;
    // one topping price
    var oneToppingPrice = 1.25;
    // get number of pizza will be orderd
    var numberOfPizzas = prompt("How many pizzas would you like to order?");
    // parse to a number
    numberOfPizzas = parseFloat(numberOfPizzas);
    // get amount of toppings
    var numbOfTopings = prompt("How many toppings would you like?")
    // parse to a number
    numbOfTopings = parseFloat(numbOfTopings);
    // find price for number of pizzas
    var priceForPizzas = numberOfPizzas * pizzaPrice;
    // find total toppings price
    var totalToppingsPrice = numbOfTopings * oneToppingPrice;
    // get number of coworkers who will pay for lunch
    var numberOfCoworkers = prompt("How many koworkers will be eating lunch?")
    // parse to a number
    numberOfCoworkers = parseFloat(numberOfCoworkers);
    // get total amount for order
    var totalForOrder = priceForPizzas + totalToppingsPrice;
    // divid total amout on numbers of coworkers
    var priceForCoworker = totalForOrder / numberOfCoworkers;
    // output on the screen
    alert(`The cost of the pizza for each coworker is $${priceForCoworker}`);


}