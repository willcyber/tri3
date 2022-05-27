function showStopwatch(){
    document.getElementById('stopwatch').classList.remove('noDisplay');
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('alarmMenu').classList.add('noDisplay');
}

function startStopwatch(){
    document.getElementById('stopwatchIsSet').classList.remove('noDisplay');
    document.getElementById('stopwatchNotSet').classList.add('noDisplay');

    let hour = 0;
    let minute = 0;
    let second = 0;
    let millisecond = 0;

    setInterval(function(){
        second += 1;
        if(second > 59){
            second = 0;
            minute ++;
        }
        if(minute > 59){
            minute = 0;
            hour ++;
        }
        if(hour < 10){
        }
        if(minute < 10){
        }
        if(second < 10){
        }
        if(millisecond < 10){
        }
        document.getElementById('stopwatchDisplay').innerText = hour + ':' + minute + ':' + second;
    },1000)
}

function pauseStopwatch(){

}

function resetStopwatch(){
    document.getElementById('stopwatchIsSet').classList.add('noDisplay');
    document.getElementById('stopwatchNotSet').classList.remove('noDisplay');
}