const counter = document.querySelector("#counter");

const resetCounter = () => {
    counter.value = 0;
}

const updateCounter = (num) => {
    counter.value = parseInt(counter.value) + num;
}