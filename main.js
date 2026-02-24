var i = 0;
var r = 0;

var a = document.querySelectorAll(".interview-btn");
var b = document.querySelectorAll(".rejected-btn");

var x = document.getElementById("interview-count");
var y = document.getElementById("rejected-count");

for (var j = 0; j < a.length; j++) {

    a[j].onclick = function () {

        i = i + 1;
        x.innerText = i;

        var s = this.parentElement.parentElement.querySelector(".status");
        s.innerText = "INTERVIEW";

    }

}

for (var j = 0; j < b.length; j++) {

    b[j].onclick = function () {

        r = r + 1;
        y.innerText = r;

        var s = this.parentElement.parentElement.querySelector(".status");
        s.innerText = "REJECTED";

    }

}