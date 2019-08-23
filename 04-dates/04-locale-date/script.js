/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here


    function nDate() {
        let monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let cur = new Date();
        let dayNames = ["Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday", "Sunday"
        ];
        let dayIndex = cur.getDay();
        let monthIndex = cur.getMonth();
        let year = cur.getFullYear();
        let hrs = cur.getHours();
        let min = cur.getMinutes();


        return dayNames[dayIndex] + ' ' + dayIndex + ' ' + monthNames[monthIndex] + ' ' + year + ', ' + hrs + "h" + min;
    }
    document.getElementById("target").innerHTML = nDate();
})();
