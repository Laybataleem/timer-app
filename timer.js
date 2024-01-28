let timerDisplay=document.querySelector('.timerDisplay')
let stopbtn=document.getElementById('stopbtn')
let startbtn=document.getElementById('startbtn')
let resetbtn=document.getElementById('resetbtn')


let msec =  0;
let sec = 0;
let mins = 0;
let timerid = null;
startbtn.addEventListener('click' , function(){
    if (timerid !== null){
clearInterval(timerid);

    }
    timerid = setInterval(startTimer , 10)
});
stopbtn.addEventListener('click' , function(){
    clearInterval(timerid);

});
resetbtn.addEventListener('click' , function(){
    clearInterval(timerid);
    timerDisplay.innerHTML=`00 : 00 : 00`;
msec=sec=mins= 0;
});

function startTimer(){
    msec++;
    if (msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            mins++;
        }
    }
    let msecString= msec < 10 ? `0${msec}` :msec;
let secString= sec < 10 ? `0${sec}` :sec;
let minsString= mins < 10 ? `0${mins}` :mins;

timerDisplay.innerHTML=`${minsString} : ${secString} : ${msecString}`;

}

