/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    /*var i = 0;
    var txt = document.getElementById("target").innerHTML;
    setInterval({
        if (i < txt.length){
            document.getElementById("target").innerHTML += txt.charAt(i);
            i++;
        }
        1000);
    }*/


    let str = document.getElementById("target").innerText.split("");
    document.getElementById("target").innerText = "";

    function berend() {
        document.getElementById("target").innerHTML += str.shift();
    }

    for (let i = 0; i < str.length; i++) {

        setTimeout(berend, i*200);
    }


})();

