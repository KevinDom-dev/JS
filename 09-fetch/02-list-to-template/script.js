/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
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
            .then(function (data) {

                for (i = 0; i < data.heroes.length; i++) {

                    let temp = document.getElementById("tpl-hero");
                    let tempName = temp.content.querySelector(".name");
                    let tempAE = temp.content.querySelector(".alter-ego");
                    let tempPowers = temp.content.querySelector(".powers");


                    tempName.innerHTML = data.heroes[i].name;
                    tempAE.innerHTML = data.heroes[i].alterEgo;
                    tempPowers.innerHTML = data.heroes[i].abilities;
                    let clone = temp.content.cloneNode(true);
                    document.getElementById("target").appendChild(clone);
                    console.log(data.heroes[i].name);
                }
            });

    });
})();
