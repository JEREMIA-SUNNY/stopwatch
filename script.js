var sec = 00;
var tens = 00;
var selTens = document.getElementById("tens");
var selSec = document.getElementById("seconds");
var startBtn = document.getElementsByClassName("lap")[0];
var resetBtn = document.getElementsByClassName("reset")[0];
var stopBtn = document.getElementsByClassName("stop")[0];
var lapp=document.getElementsByClassName("lapping")[0];
var laptext=document.getElementsByClassName("lpashow")[0];
var interval;
function seting() {
    tens++;
    if (tens < 9) {

        selTens.innerText = "0" + tens;

    }
    if (tens > 9) {

        selTens.innerText = tens;

    }
    if (tens > 99) {
        sec++;
        selSec.innerText = "0" + sec
        tens = 0;
        selTens.innerText = "0" + "0";

    }
    if (sec > 9) {
        selSec.innerText = sec;


    }
}
startBtn.onclick=function(){
console.log("workig");
interval=setInterval(seting);

}
stopBtn.onclick=function(){
    console.log("workig");
clearInterval(interval)

}
lapp.onclick=function(){
laptext.innerText=sec+":"+tens+"pora";

}
resetBtn.onclick=function(){

clearInterval(interval);
tens=0;
sec=0;
selSec.innerText="0";
selTens.innerText="0";

}