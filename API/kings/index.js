"use strict";

const output = document.querySelector("div#output");

document.querySelector("input#searchBar").addEventListener("input", function(event) {
    const search = event.target.value;
    findKings(search);
});

const checkMatches = (obj, search) => {
    for (let val of Object.values(obj)) {
        if (val.toLowerCase().includes(search.toLowerCase())) return true;
    }
    return false;
}

const findKings = (search) => {
    axios.get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
            .then(res =>{
                console.log("KINGS:", res.data);
                output.innerHTML = "";
                for (let king of res.data) {
                    if (search  && !checkMatches(king, search)) continue;
                    const kingDiv = document.createElement('div');
                    
                    const kingName = document.createElement('p');
                    kingName.innerText = "Name: " + king.nm;
                    kingDiv.appendChild(kingName);

                    const kingCountry = document.createElement('p');
                    kingCountry.innerText = "Country: " + king.cty;
                    kingDiv.appendChild(kingCountry);

                    const kingHouse = document.createElement('p');
                    kingHouse.innerText = "House: " + king.hse;
                    kingDiv.appendChild(kingHouse);

                    makeP("Years: " + king.yrs, kingDiv);

                    output.appendChild(kingDiv);
                }
            } )
            .catch(err => console.error(err));
}

findKings();

function makeP(text, parent) {
    const newP = document.createElement('p');
    newP.innerText = text;
    parent.appendChild(newP);
}