"use strict";

const display = document.querySelector("input#calcInput");

let firstNum;
let operator;

for (let button of document.querySelectorAll("button.number-btn")) {
    button.addEventListener("click", function(event) {
        display.value = parseInt(display.value + event.target.innerText);
    });
}

for (let button of document.querySelectorAll("button.operator-btn")) {
    button.addEventListener("click", function(event) {
        firstNum = parseInt(display.value);
        display.value = "";
        operator = event.target.innerText;
    });
}

document.querySelector("button#clear-btn").addEventListener("click", function() {
    display.value = "";
    firstNum = "";
    operator = "";
});
document.querySelector("button#equals-btn").addEventListener("click", function() {
    console.log(firstNum, operator, display.value);
    // display.value = eval(firstNum + operator + parseInt(display.value))
    const secondNum = parseInt(display.value);

    switch (operator) {
        case "+":
            display.value = firstNum + secondNum;
            break;
        case "-":
            display.value = firstNum - secondNum;
            break;
        case "*":
            display.value = firstNum * secondNum;
            break;
        case "/":
            display.value = firstNum / secondNum;
            break;
    }
});