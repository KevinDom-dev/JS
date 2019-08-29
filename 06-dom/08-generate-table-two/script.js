/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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

    var tableBody = document.createElement('Tbody');
    table.appendChild(tableBody);

    for (var i=0; i<=10; i++){
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);

        for (var j=0; j<=10; j++){
            let text = [''];
            for (let x = 0; x <=10; x++){
                text = (i * j)
            }
            var td = document.createElement('TD');
            td.width='75';
            td.appendChild(document.createTextNode('' + text + ''));
            tr.appendChild(td);
        }
    }
    divTa.appendChild(table);


})();
