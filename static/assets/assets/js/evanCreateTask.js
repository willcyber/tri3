let wheatTime = 6;
let cornTime = 10;
let carrotTime = 20;
let tomatoTime = 30;

function plantWheat() {
    let downloadTimer = setInterval(function(){
        if(wheatTime <= 0){
            clearInterval(downloadTimer);
            document.getElementById("wheatButton").innerHTML = "Plant Wheat";
            cropList[0] += 2
            document.getElementById("wheatCount").innerHTML = "Wheat: " + cropList[0]
        } else {
            document.getElementById("wheatButton").innerHTML = wheatTime + " seconds remaining";
        }
        wheatTime -= 1;
    }, 1000);
}

function plantCorn(){
    let downloadTimer = setInterval(function(){
        if(cornTime <= 0){
            clearInterval(downloadTimer);
            document.getElementById("cornButton").innerHTML = "Plant Corn";
            cropList[1] += 2
            document.getElementById("cornCount").innerHTML = "Corn: " + cropList[1]
        } else {
            document.getElementById("cornButton").innerHTML = cornTime + " seconds remaining";
        }
        cornTime -= 1;
    }, 1000);}

function plantCarrots(){
    let downloadTimer = setInterval(function(){
        if(carrotTime <= 0){
            clearInterval(downloadTimer);
            document.getElementById("carrotButton").innerHTML = "Plant Carrots";
            cropList[2] += 2
            document.getElementById("carrotCount").innerHTML = "Carrots: " + cropList[2]
        } else {
            document.getElementById("carrotButton").innerHTML = carrotTime + " seconds remaining";
        }
        carrotTime -= 1;
    }, 1000);}

function plantTomatoes(){
    let downloadTimer = setInterval(function(){
        if(tomatoTime <= 0){
            clearInterval(downloadTimer);
            document.getElementById("tomatoButton").innerHTML = "Plant Tomatoes";
            cropList[3] += 2
            document.getElementById("tomatoCount").innerHTML = "Tomatoes: " + cropList[3]
        } else {
            document.getElementById("tomatoButton").innerHTML = tomatoTime + " seconds remaining";

        }
        tomatoTime -= 1;
    }, 1000);}

cropList = [0,0,0,0]


