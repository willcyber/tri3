function showTimer(){
    document.getElementById('timer').classList.remove('noDisplay');
    document.getElementById('alarmMenu').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');
}

function closeSubTimers(){
    document.getElementById('timer').classList.add('noDisplay');
    document.getElementById('alarmMenu').classList.add('noDisplay');
    document.getElementById('stopwatch').classList.add('noDisplay');

}

function timerHourCheck(){
    if(document.getElementById('timerHour').value !== ''){
        if(document.getElementById('timerHour').value %1 !== 0){
            alert('Only whole numbers can be entered.')
            document.getElementById('timerHour').value = '';
            return
        }
        if(document.getElementById('timerHour').value < 1){
            alert('Only positive numbers can be entered.')
            document.getElementById('timerHour').value = '';
        } else{
            if(document.getElementById('timerHour').value.length === 1){
                document.getElementById('timerHour').value = '0' + document.getElementById('timerHour').value;
            }
        }
    }
}

function timerMinuteCheck(){
    if(document.getElementById('timerMinute').value !== ''){
        if(document.getElementById('timerMinute').value %1 !== 0){
            alert('Only whole numbers can be entered.')
            document.getElementById('timerMinute').value = '';
            return
        }
        if(document.getElementById('timerMinute').value < 1){
            alert('Only positive numbers can be entered.')
            document.getElementById('timerMinute').value = '';
        } else{
            if(document.getElementById('timerMinute').value.length === 1){
                document.getElementById('timerMinute').value = '0' + document.getElementById('timerMinute').value;
            }
        }
    }
}

function timerSecondCheck(){
    if(document.getElementById('timerSecond').value !== ''){
        if(document.getElementById('timerSecond').value %1 !== 0){
            alert('Only whole numbers can be entered.')
            document.getElementById('timerSecond').value = '';
            return
        }
        if(document.getElementById('timerSecond').value < 1){
            alert('Only positive numbers can be entered.')
            document.getElementById('timerSecond').value = '';
        } else{
            if(document.getElementById('timerSecond').value.length === 1){
                document.getElementById('timerSecond').value = '0' + document.getElementById('timerSecond').value;
            }
        }
    }
}

function setTimer(){
    if(document.getElementById('timerHour').value === '' && document.getElementById('timerMinute').value === '' && document.getElementById('timerSecond').value === ''){
        return alert('All boxes left empty.')
    }

    if(document.getElementById('timerHour').value === ''){
        document.getElementById('timerHour').value = 0;
    }
    if(document.getElementById('timerMinute').value === ''){
        document.getElementById('timerMinute').value = 0;
    }
    if(document.getElementById('timerSecond').value === ''){
        document.getElementById('timerSecond').value = 0;
    }

    window.timerHour = parseInt(document.getElementById('timerHour').value);
    window.timerMinute = parseInt(document.getElementById('timerMinute').value);
    window.timerSecond = parseInt(document.getElementById('timerSecond').value);

    document.getElementById('timerTable').classList.add('noDisplay');
    document.getElementById('viewActiveTimer').classList.remove('noDisplay');
    document.getElementById('timerTime').innerText = document.getElementById('timerHour').value + "h " + document.getElementById('timerMinute').value + "m " + document.getElementById('timerSecond').value + "s"

    window.timerHour *= (60*60*1000);
    window.timerMinute *= (60*1000);
    window.timerSecond *= 1000;
    window.rawMS = (window.timerSecond + window.timerMinute + window.timerHour)

    timerCountDown();
}

function timerCountDown(){
    let now = new Date().getTime();
    let countDownDate = new Date(now + window.rawMS).getTime();
    window.timerCountDownVar = setInterval(function(){

            now = new Date().getTime();
            let distance = countDownDate - now;

            let displayHour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let displayMinute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let displaySecond = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                alert('Timer is over.')
                cancelTimer();
            }

        document.getElementById('timerTime').innerText = displayHour + "h " + displayMinute + "m " + displaySecond + "s"

    },1000)
}

function cancelTimer(){
    document.getElementById('timerHour').value = '';
    document.getElementById('timerMinute').value = '';
    document.getElementById('timerSecond').value = '';
    document.getElementById('timerTime').innerText = document.getElementById('timerHour').value + "h " + document.getElementById('timerMinute').value + "m " + document.getElementById('timerSecond').value + "s";

    document.getElementById('timerTable').classList.remove('noDisplay');
    document.getElementById('viewActiveTimer').classList.add('noDisplay');
    clearInterval(window.timerCountDownVar);
}