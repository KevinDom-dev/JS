/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var pic = document.getElementsByTagName("img");

    var wink = pic[0].getAttribute("data-hover");
    var kiss = pic[0].getAttribute("src");

    pic[0].onmouseover = function () {
        pic[0].src = kiss;
    };

    pic[0].onmouseout = function () {
        pic[0].src = wink;
    };
})();
