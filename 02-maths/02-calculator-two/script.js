/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


    var performOperation = function(operation) {
        var opone = +document.getElementById("op-one").value;
        var optwo = +document.getElementById("op-two").value;

        switch (operation) {
            case 'addition':
                alert(opone + optwo);
                break;
            case 'substraction':
                 alert(opone - optwo);
                 break;
            case 'multiplication':
                alert(opone * optwo);
                break;
            case 'division':
                alert(opone / optwo);
                break;
        }};

        Array.from(document.querySelectorAll("button.operator")).forEach(function ($btn) {
            $btn.addEventListener("click", function () {
                performOperation($btn.id);
            });

        });

})();
