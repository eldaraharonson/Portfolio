"use strict";

let myButton = document.getElementById("submitButton");
myButton.addEventListener('click', buttonClicked);

function validateFormInput() {
    //let firstNameText = document.forms["Form"]["firstName"].value;
    //let lastNameText = document.forms["Form"]["lastName"].value;
    //let messageText = document.forms["Form"]["message"].value;
    let elements = document.getElementById("myForm").elements;
    for (let i = 0, element; element = elements[i++];) {
        if (element.value === "") {
            return false;
        }
    }
    return true;
}

function buttonClicked() {
    if (validateFormInput() === false) {
        alert("You must fill out all fields");
    }
}