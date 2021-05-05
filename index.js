// Code your solutions in this file
let names = ["Ada", "Brendan", "Ali"];
let event = "birthday";

let number = 10;

function writeCards(names, event) {
    let thankYou = [];
    for (let i = 0; i < names.length; i++) {
        thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYou;
}

function countDown(number) {
    for (let i = number; i > -1; i--) {
        console.log(i);
    }
}