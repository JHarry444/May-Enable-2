const counter = document.querySelector("#counter");

// const resetCounter = () => {
//     counter.value = 0;
// }

const updateCounter = (event) => {
    // debugger;
    if (event.target.innerText === "R") return counter.value = 0;
    counter.value = parseInt(counter.value) + parseInt(event.target.innerText);
}

for (let button of document.querySelectorAll("div#counterButtons > button")) {
    console.log("BUTTON:", button);
    button.addEventListener("click", updateCounter);
}