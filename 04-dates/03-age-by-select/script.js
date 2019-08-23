/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", calc);

    function calc () {
        let bday= document.getElementById('dob-day').value;
        let bmon= document.getElementById('dob-month').value -1;
        let byr= document.getElementById('dob-year').value;
        let age;
        let now = new Date();
        let cday= now.getDate();
        let cmo= now.getMonth();
        let cyr= now.getFullYear();
        if((cmo > bmon)||(cmo==bmon & cday>=bday))
        {age=byr}
        else
        {age=byr+1}
        alert("You are:"+(cyr-age)+ " years old");

    }

})();


