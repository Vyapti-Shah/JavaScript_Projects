//CALCULATOR PROJECT

const display = document.getElementById("display");

function appendtoDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value).toFixed(8); //eval() is a kind of built-in calculator
    }
    catch(error){
        display.value = "Error";
    }
}