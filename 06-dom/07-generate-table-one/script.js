/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var divTa = document.getElementById("target");

    var table = document.createElement('Table');
    table.border='1';
    table.style.border="bold";

    var tableBody = document.createElement('Tbody');
    table.appendChild(tableBody);

    for (var i=0; i<10; i++){
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j=0; j<1; j++){
            var td = document.createElement('TD');
            td.width='75';
            td.appendChild(document.createTextNode("Cell " + i + "," + j));
            tr.appendChild(td);
        }
    }
    divTa.appendChild(table);


})();