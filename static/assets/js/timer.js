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

    document.getElementById('currentTime').innerText = hours + ":" + minutes + ":" + seconds

},1000)

function showAlarm(){
    document.getElementById('alarmMenu').classList.remove('noDisplay');
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');
}

function showTimer(){
    document.getElementById('timer').classList.remove('noDisplay');
    document.getElementById('alarmMenu').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');
}

function showStopwatch(){
    document.getElementById('stopwatch').classList.remove('noDisplay');
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('alarmMenu').classList.add('noDisplay');
}

function closeSubTimers(){
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('alarmMenu').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');

}

function newAlarm(){
    document.getElementById('alarm').classList.remove('noDisplay');
    document.getElementById('newAlarm').classList.add('noDisplay');
}

function alarmHourCheck(){
    if(document.getElementById('alarmHour').value !== ''){
        if(document.getElementById('alarmHour').value %1 !== 0){
            alert('Only whole numbers can be entered.')
            document.getElementById('alarmHour').value = '';
            return
        }
        if(document.getElementById('alarmHour').value < 1 || document.getElementById('alarmHour').value > 12){
            alert('That value is out of range (1-12).')
            document.getElementById('alarmHour').value = '';
        } else{
            if(document.getElementById('alarmHour').value.length === 1){
                document.getElementById('alarmHour').value = '0' + document.getElementById('alarmHour').value;
            }
        }
    }
}

function alarmMinuteCheck(){
    if(document.getElementById('alarmMinute').value !== ''){
        if(document.getElementById('alarmMinute').value %1 !== 0){
            alert('Only whole numbers can be entered.')
            document.getElementById('alarmMinute').value = '';
            return
        }
        if(document.getElementById('alarmMinute').value < 0 || document.getElementById('alarmMinute').value > 59){
            alert('That value is out of range (0-59).')
            document.getElementById('alarmMinute').value = '';
        } else{
            if(document.getElementById('alarmMinute').value.length === 1){
                document.getElementById('alarmMinute').value = '0' + document.getElementById('alarmMinute').value;
            }
        }
    }
}

function closeAlarm(){
    document.getElementById('alarm').classList.add('noDisplay');
    document.getElementById('newAlarm').classList.remove('noDisplay');
    document.getElementById('alarmHour').value = '';
    document.getElementById('alarmMinute').value = '';
}

function toggleAM_PM(){
    if(document.getElementById('AM_PM').innerText === 'AM'){
        document.getElementById('AM_PM').innerText = 'PM';
    } else{
        document.getElementById('AM_PM').innerText = 'AM';
    }
}

let checkAlarm = setInterval(function(){
    if (window.date.getHours() === window.alarmHour && window.date.getMinutes() === window.alarmMinute) {
        alert('Alarm is over.');
        document.getElementById('viewActiveAlarm').classList.add('noDisplay');
        document.getElementById('alarm').classList.remove('noDisplay');
        clearInterval(checkAlarm);
    }
}, 1000)

function setAlarm(){
    if(document.getElementById('alarmHour').value === '' || document.getElementById('alarmMinute').value === ''){
        return alert('One or more boxes left empty')
    }

    window.alarmHour = parseInt(document.getElementById('alarmHour').value);
    window.alarmMinute = parseInt(document.getElementById('alarmMinute').value);

    if(document.getElementById('AM_PM').innerText === 'PM' && window.alarmHour !== 12){
        window.alarmHour = parseInt(document.getElementById('alarmHour').value) + 12;
    }
    else if(document.getElementById('AM_PM').innerText === 'AM' && window.alarmHour === 12){
        window.alarmHour = parseInt(document.getElementById('alarmHour').value) - 12;
    }

    document.getElementById('alarm').classList.add('noDisplay');
    document.getElementById('viewActiveAlarm').classList.remove('noDisplay');
    document.getElementById('alarmTime').innerText = document.getElementById('alarmHour').value + ":" + document.getElementById('alarmMinute').value + " " + document.getElementById('AM_PM').innerText
}

function cancelAlarm(){
    document.getElementById('viewActiveAlarm').classList.add('noDisplay');
    document.getElementById('alarm').classList.remove('noDisplay');
}