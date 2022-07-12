const counter = document.querySelector("#counter");

const resetCounter = () => {
    counter.value = 0;
}

const updateCounter = (event) => {
    debugger;
    counter.value = parseInt(counter.value) + parseInt(event.target.innerText);
}