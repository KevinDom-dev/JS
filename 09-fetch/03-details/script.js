/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function (){
        fetch("http://localhost:63342/JS/_shared/api.json")
            .then(response => response.json())
            .then(function (json) {

                for (i = 0; i < json.heroes.length; i++) {
                    let input = document.getElementById("hero-id");

                    if (json.heroes[i].name === input.value) {

                        let temp = document.getElementById("tpl-hero");
                        let tempName = temp.content.querySelector(".name");
                        let tempAE = temp.content.querySelector(".alter-ego");
                        let tempPowers = temp.content.querySelector(".powers");

                        tempName.innerHTML = json.heroes[i].name;
                        tempAE.innerHTML = json.heroes[i].alterEgo;
                        tempPowers.innerHTML = json.heroes[i].abilities;
                        let clone = temp.content.cloneNode(true);
                        document.getElementById("target").appendChild(clone);
                    }
                    else {
                        document.getElementById("target").innerHTML = "Computer says no."
                    }
                }
            });

    });
})();
