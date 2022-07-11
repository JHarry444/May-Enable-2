"use strict";


function add(a, b) {
    c = 27; // implied global
    return a  + b + c;
}

function hoisting() {
    hello();

    x = 12;
    console.log("x", x);

    {
        var x = 24;
    }
    console.log("x", x);

    x = 36;
    console.log("x", x);

    function hello() {
        console.log("YO!");
    }

}

function hoisted() {
    var x;
    x = 12;
    console.log("x", x);

    x = 24;
    console.log("x", x);

    x = 36;
    console.log("x", x);
}

const output = document.querySelector("div#output");

const ele = document.createElement("p");

document.querySelector("div#output").appendChild(ele);

ele.innerText = "Hello, World!";