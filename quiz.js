var time = 16;
var pages = 5;
var qno=0;
var s = 5;
var score=0;
const timer = document.getElementById("timer");
const cards = document.getElementById("card");
var shadow;
let worker;
var ques;
var opt;
var ch;
var timeout;
window.onload = function () {
    start();
}
function start(){
    qload();
    add();
    countdown();
}
function countdown() {

    if (time == 0) {
        next();
    }
    else {
        if (time <= 5) {
            timer.style.color = "#cf4f4fb9";
        }
        else{
            timer.style.color = "#3d96e9b9";

        }
        
                    time--;
                    timer.innerHTML = time.toString();
                    timeout = setTimeout('countdown()', 1000);
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
    if(pages==1){
        eval();
        alert("you scored ="+score);
    }
    if (pages > 0) {
        eval();
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
var ans;
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
        ans=q[5];
      }) 
}
function choice(e){
  ch=e.id;
}
function eval(){
    if(ch==ans){
        score++;
    }
}as
function reset(){
    score=0;
    qno=0;
    pages=5;
    time=16;
    clearTimeout(timeout);
    start();
}