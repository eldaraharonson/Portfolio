"use strict";

let myButton = document.getElementById("1");
myButton.addEventListener('click', showRandomFact);
let lastNumberChosen = 7;

function showRandomFact() {
    let facts = getFactsAboutMe();
    let randomNumber = Math.floor(Math.random() * Math.floor(5)); 
    while (randomNumber === lastNumberChosen) {
        randomNumber = Math.floor(Math.random() * Math.floor(5));
    } 
    lastNumberChosen = randomNumber;
    document.getElementById("randomFact").innerHTML = facts[randomNumber];
}

function getFactsAboutMe() {
    let factsAboutMe = [
        "I have a 15 year old dog.",
        "My favorite programming language is C#.",
        "My favorite computer science subject is Probability.",
        "I hate mashed potatoes.",
        "I love pizza."
    ];
    return factsAboutMe;
}
