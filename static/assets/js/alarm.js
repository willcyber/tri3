function showAlarm(){
    document.getElementById('alarmMenu').classList.remove('noDisplay');
    document.getElementById('timer').classList.add('noDisplay');
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

    checkAlarm();
}

function cancelAlarm(){
    document.getElementById('viewActiveAlarm').classList.add('noDisplay');
    document.getElementById('alarm').classList.remove('noDisplay');
    clearInterval(window.checkAlarmVar);
}

function checkAlarm(){
    window.checkAlarmVar = setInterval(function(){
        if (window.date.getHours() === window.alarmHour && window.date.getMinutes() === window.alarmMinute) {
            alert('Alarm is over.');
            document.getElementById('viewActiveAlarm').classList.add('noDisplay');
            document.getElementById('alarm').classList.remove('noDisplay');
            clearInterval(window.checkAlarmVar);
        }
    }, 1000)
}