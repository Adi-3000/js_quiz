var time = 16;
const timer = document.getElementById("timer");
window.onload = function() {
    countdown();
   }
function countdown() {
    if (time == 0) {
        alert("time up");
    }
    else {
        if(time<=5){
            timer.style.color="#cf4f4fb9";
        }
        time--;
        timer.innerHTML = time.toString();
        setTimeout('countdown()', 1000);
    }
}
