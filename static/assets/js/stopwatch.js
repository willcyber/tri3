function showStopwatch(){
    document.getElementById('stopwatch').classList.remove('noDisplay');
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('alarmMenu').classList.add('noDisplay');
}

function startStopwatch(){
    document.getElementById('stopwatchIsSet').classList.remove('noDisplay');
    document.getElementById('stopwatchNotSet').classList.add('noDisplay');

    let hour = 0, minute = 0, second = 0;

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
            hour = '0' + hour;
        }
        if(minute < 10){
            minute = '0' + minute;
        }
        if(second < 10){
            second = '0' + second;
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