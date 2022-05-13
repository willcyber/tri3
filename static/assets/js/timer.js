window.onload = function getDate() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    if(hours >= 12){
        if(hours > 12){
            hours -= 12;
        }
        document.getElementById('am').style.display = "none";
        document.getElementById('pm').style.display = "inline";
    } else{
        document.getElementById('am').style.display = "inline";
        document.getElementById('pm').style.display = "none";
    }

    document.getElementById('currentTime').innerText = hours + ":" + minutes + ":" + seconds
    setInterval(function(){
        getDate()
    },1000)
}

function showAlarm(){
    document.getElementById('alarm').classList.remove('noDisplay');
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');
}

function showTimer(){
    document.getElementById('timer').classList.remove('noDisplay');
    document.getElementById('alarm').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');
}

function showStopwatch(){
    document.getElementById('stopwatch').classList.remove('noDisplay');
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('alarm').classList.add('noDisplay');
}

function closeSubTimers(){
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('alarm').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');

}
