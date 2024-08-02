//TEMPERATURE CONVERSION PROGRAM

const textbox=document.getElementById("textbox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelsius=document.getElementById("toCelsius");
const result=document.getElementById("result");

let temp;
function convert(){
  if(toFahrenheit.checked){
    temp = Number(textbox.value);
    temp = temp * 9 / 5 + 32;
    result.textContent= temp.toFixed(1) + "°F" //for degrees symbol on windows-alt+0176 and mac-option+shift+8
                                               //temp.toFixed(1) - gives decimal place of 1 digit
  }
  else if(toCelsius.checked){
    temp = Number(textbox.value);
    temp = (temp-32) * (5/9);
    result.textContent= temp.toFixed(1) + "°C" //for degrees symbol on windows-alt+0176 and mac-option+shift+8
  }
  else{

  }
}