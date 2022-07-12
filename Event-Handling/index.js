"use strict";

const myInput = document.querySelector("input#myInput");
const output = document.querySelector("#output");

const writeInput = (event) => {
    // debugger;
    event.preventDefault(); // disables default handling for this event
    const newInput = document.createElement("p");
    newInput.innerText = myInput.value; // inputs use .value instead of .innerText
    output.appendChild(newInput);

    myInput.value = "";
    myInput.focus();
}

document.querySelector("body > form").addEventListener("submit", writeInput);

const milesInput = document.querySelector("#milesInput");
const kmsInput = document.querySelector("#kmsInput");

const convertToKMs = () => {
    const miles = parseFloat(milesInput.value);
    const kms = miles * 1.6;
    kmsInput.value = kms;
}

const convertToMiles = (event) => {
    console.log("EVENT:", event);
    const kms = parseFloat(event.target.value);
    const miles = kms / 1.6;
    milesInput.value = miles;
}