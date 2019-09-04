/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    (() => {

        document.getElementById("run").addEventListener("click", function (){
            fetch("http://localhost:63342/JS/_shared/api.json")
                .then(response => response.json())
                .then(function (json) {

                    for (i = 0; i < json.heroes.length; i++) {
                        let input = document.getElementById("hero-id");

                        if (json.heroes[i].name === input.value) {

                            console.log("Deleted " + input.value);
                            json.heroes.splice(i,1)
                            console.log(json.heroes)
                        }
                    }
                });

        });
    })();
})();
