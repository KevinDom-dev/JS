/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("pass-one").setAttribute("minlength","8");
    document.getElementById("pass-one").addEventListener("input", function (e) {
        var text = document.getElementById("pass-one").value;
        var conf = document.getElementById("validity");
        var re = new RegExp(/(\D*\d){2}/);
        //console.log(re.test(text));
        if (re.test(text) === true) {
            conf.innerHTML="Ok"
        }

   });


})();
