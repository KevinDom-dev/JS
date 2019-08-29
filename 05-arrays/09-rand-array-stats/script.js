/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById("run").addEventListener("click", function () {
        var i;
        var arr = [];
        for (i = 0; i < 10; i++) {

            arr[i] = Math.floor(Math.random() * 100) + 1;
            var y = i + 1;
            var target = document.getElementById("n-" + y);
            target.innerHTML = arr[i];
        }
        document.getElementById("min").innerHTML = "" + Math.min(...arr);
        document.getElementById("max").innerHTML = "" + Math.max(...arr);
        document.getElementById("sum").innerHTML = "" + arr.reduce((a, b) => a + b, 0);
        document.getElementById("average").innerHTML = "" + (arr.reduce((a, b) => a + b, 0)) / 10;
    });



})();
