(function () {

    document.getElementById("run").addEventListener("click", function () {

        let ascend = document.getElementById("numbers").value.split(',')

    .
        sort(function (a, b) {
            return a - b
        });
        alert(ascend);


    });

})();
