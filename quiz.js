var time = 16;
var pages = 3;
var qno=0;
var s = 5;
const timer = document.getElementById("timer");
const cards = document.getElementById("card");
var shadow;
let worker;
var ques;
var opt;
window.onload = function () {
    add();
    qload();
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
        var timeout = setTimeout('countdown()', 1000);
    }
}
var shadowinit = getComputedStyle(cards).boxShadow;
function add() {

    shadow = shadowinit;
    shadow = shadow.substring(0, shadow.length);
    for (var i = 1; i < pages; i++) {
        var x = i * s;
        shadow += ",rgb(226, 221, 221) " + x + "px -" + x + "px 0px -3px, rgb(2, 2, 2) " + x + "px -" + x + "px";
    }
    shadow += ";";
    cards.setAttribute('style', 'box-shadow:' + shadow);
    shadow = "";
}
function next() {
    if (pages > 0) {
        pages--;
        qno++;
        add();
        qload();
        if (time != 0) {
            time = 16;
            clearTimeout(timeout);
        }
        time = 16;
        countdown();
    }

}
function qload(){
    //question render process assigned to worker
    worker = new Worker("ques.js")
    worker.postMessage([pages,qno]);//pages is sent to worker
    worker.addEventListener("message", e => {
        const q=e.data;
        console.log(q);
         ques=document.getElementById("ques");
        opt=document.getElementsByClassName("opt");
        ques.innerText=q[0];
        for(var i=0;i+1<5;i++){
            opt[i].innerHTML=q[i+1];
        }
      }) 

}