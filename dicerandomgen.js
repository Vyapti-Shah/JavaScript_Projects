//random number generation
let randomnum = Math.random();
console.log(randomnum);
let ran= Math.random() * 6;//any number between 0 to 6
console.log(ran);
let r=Math.floor(Math.random()* 6) + 1; //any number between 1 to 6
console.log(r);

const min= 50;
const max= 100;
let res=Math.floor(Math.random()* max) + min; //any number between 50 to 100
console.log(res);

//dice throw
const myButton= document.getElementById("myButton");
const label1= document.getElementById("label1");
const label2= document.getElementById("label2");
const label3= document.getElementById("label3");
const min1=1;
const max1=6;
let random1;
let random2;
let random3;
myButton.onclick=function(){
    random1=Math.floor(Math.random() * max1) + min1;
    random2=Math.floor(Math.random() * max1) + min1;
    random3=Math.floor(Math.random() * max1) + min1;
    label1.textContent=random1;
    label2.textContent=random2;
    label3.textContent=random3;
}

