/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        let year = document.getElementById('year').value;
        let d = new Date(year, 0, 13);
        console.log(d);

        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let text = "";

        for (let i = 0; i < 12; i++) {
            d.setMonth(i);
            if (d.getDay() === 5) {
                text += monthNames[d.getMonth()] + " ";
            }
        }

        alert(text);

    });

})();