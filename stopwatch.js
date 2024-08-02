//STOP WATCH PROJECT

const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
    }
}

function stop(){
    if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
    }
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;    
    display.textContent = "00:00:00:00";
}

function update(){
    
    const currentTime = Date.now();
    elapsedTime = currentTime -startTime;

    let hours = Math.floor(elapsedTime / (1000* 60* 60));  //formula 1000=milisecs, 60=secs and 60mins
    let mins = Math.floor(elapsedTime / (1000* 60) % 60); //as we do not want our mins to go above 60 so we do %60 to get the remainder of 60
    let secs = Math.floor(elapsedTime / 1000  % 60);
    let milisecs = Math.floor(elapsedTime % 1000 / 10);//not beyond 10s(so %1000) and only 2 values to be shown(so /10)

    hours = String(hours).padStart(2, "0"); // used to add 0 when the time is a single digit number to make it a 2-digit number (thus, (2,"0") is used)
    mins = String(mins).padStart(2, "0");
    secs = String(secs).padStart(2, "0");
    milisecs = String(milisecs).padStart(2, "0");

    display.textContent = `${hours}:${mins}:${secs}:${milisecs}`;
}    
