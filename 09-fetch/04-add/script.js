/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

        document.getElementById("run").addEventListener("click", function (){
            fetch("http://localhost:63342/JS/_shared/api.json")
                .then(response => response.json())
                .then(function (json) {
                    let tempID = json.heroes.length+1;
                    let tempName = document.getElementById("hero-name").value;
                    let aE = document.getElementById("hero-alter-ego").value;
                    let tempPowers = document.getElementById("hero-powers").value;
                    let res = {id: tempID, name: tempName, alterEgo: aE, abilities: [tempPowers]};
                    let last = json[json.heroes.sort().pop()];
                    json.heroes.push(res);
                    console.log(json.heroes.slice(-1)[0]);
                });

    });

})();
