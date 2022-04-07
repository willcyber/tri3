function plantWheat() {
    document.getElementById("wheatButton").className = "noDisplayTd"
    document.getElementById("wheatTime").className = ""
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("wheatTime").innerText = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
            document.getElementById("wheatTime").disabled = false

    },1000);
}

function plantCorn(){
    alert('corn')
}

function plantCarrots(){
    alert('carrot')
}

function plantTomatoes(){
    alert('tomato')
}



