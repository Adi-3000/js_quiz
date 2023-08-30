var time = 16;
var pages = 10;
var s = 5;
const timer = document.getElementById("timer");
const cards = document.getElementById("card");
var shadow;
window.onload = function () {
    add()
    countdown();
}
function countdown() {
    if (time == 0) {
        // alert("time up");
    }
    else {
        if (time <= 5) {
            timer.style.color = "#cf4f4fb9";
        }
        time--;
        timer.innerHTML = time.toString();
        setTimeout('countdown()', 1000);
    }
}
function add() {

    shadow = getComputedStyle(cards).boxShadow;
    shadow = shadow.substring(0, shadow.length);
    for (var i = 1; i <= pages; i++) {
        var x = i * s;
        shadow += ",rgb(226, 221, 221) " + x + "px -" + x + "px 0px -3px, rgb(2, 2, 2) " + x + "px -" + x + "px";
    }
    shadow += ";";
    cards.setAttribute('style', 'box-shadow:' + shadow)
}
