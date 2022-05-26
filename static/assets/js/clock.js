const timerFunc = setInterval(function(){
    window.date = new Date();
    let hours = window.date.getHours();
    let minutes = window.date.getMinutes();
    let seconds = window.date.getSeconds();

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

    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    document.getElementById('currentTime').innerText = hours + ":" + minutes + ":" + seconds;

    document.getElementById('mainButtons').classList.remove('noDisplay');
    document.getElementById('fadeInArea').classList.add('fadeIn');
    document.getElementById('loadScreen').classList.add('noDisplay');

},1000)