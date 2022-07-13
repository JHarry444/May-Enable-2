"use strict";

document.querySelector("body > form").addEventListener("submit", function (event) {
    event.preventDefault(); // turns off the page refresh/redirect
    // setTimeout(() => console.log("YO!"), 1_000);

    console.log("THIS:", this);

    const data = {
        name: this.name.value,
        species: this.species.value,
        age: this.age.value
    }

    console.log("DATA:", data);

    axios.post("http://localhost:8080/createDino", data)
            .then(res => {
                console.log("RES:", res);
                this.reset();
                this.name.focus();
                renderDinos();
            })
            .catch(err => console.error(err));
});

const output = document.querySelector("#output");

function renderDinos() {
    axios.get("http://localhost:8080/getDinos")
        .then(res => {
            console.log("dinos: ", res.data);
            output.innerHTML = "";
            for (let dino of res.data) {
                const dinoCol = document.createElement("div");
                dinoCol.className = "col";

                const dinoCard = document.createElement("div");
                dinoCard.className = "card";
                dinoCol.appendChild(dinoCard);

                const dinoDiv = document.createElement("div");
                dinoDiv.className = "card-body";
                dinoCard.appendChild(dinoDiv);

                const dinoName = document.createElement("h2");
                dinoName.innerText = dino.name;
                dinoDiv.appendChild(dinoName);

                const dinoAge = document.createElement("p");
                dinoAge.innerText = dino.age + " years old.";
                dinoDiv.appendChild(dinoAge);

                const dinoSpecies = document.createElement("p");
                dinoSpecies.innerText = dino.species;
                dinoDiv.appendChild(dinoSpecies);

                const dinoDelete = document.createElement('button');
                dinoDelete.innerText = "DELETE";
                dinoDelete.addEventListener("click", () => {
                    console.log("DINO: ", dino);
                    deleteDino(dino.id);
                });
                dinoDiv.appendChild(dinoDelete);

                output.appendChild(dinoCol);
            }
        })
        .catch(err => console.error(err));
}

const deleteDino = (id) => {
    axios.delete("http://localhost:8080/removeDino/" + id)
            .then(res => {
                console.log("Delete successful");
                renderDinos();
            }).catch(err => console.error(err));
}

renderDinos();