var time = 15;
let timer = document.getElementById("timer");
function countdown() {
    if (time == 0) {
        alert("time up");
    }
    else {
        if(time<=5){
            document.getElementById("timer").style.color="#cf4f4fb9";
        }
        time--;
        document.getElementById("timer").innerHTML = time.toString();
        setTimeout('countdown()', 1000);
    }
}
