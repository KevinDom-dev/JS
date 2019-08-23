/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var age;
    var gender;
    var home;
    var allOK;

    do {
        age = prompt("What is your age?", "Your age?");
        gender = prompt("What is your gender?", "Your gender?");
        home = prompt("What is your home town?","Your home town?");
        allOK = confirm("Hello, you are: " + age + ", you identify as: " + gender + " and you live in: " + home + ". Is this correct?")
    } while (allOK == 0);


})();
