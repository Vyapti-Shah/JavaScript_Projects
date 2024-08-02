// CHANGE BACKGROUND COLOUR PROJECT

let b=0;
document.getElementById("colour1").onclick=(()=>{b=1;Ch();});
document.getElementById("colour2").onclick=(()=>{b=2;Ch();});
document.getElementById("colour3").onclick=(()=>{b=3;Ch();});
document.getElementById("colour4").onclick=(()=>{b=4;Ch();});
document.getElementById("colour5").onclick=(()=>{b=5;Ch();});
document.getElementById("colour6").onclick=(()=>{b=6;Ch();});
document.getElementById("colour7").onclick=(()=>{b=7;Ch();});

function Ch(){
    const element = document.getElementById(`colour${b}`);
    const color = window.getComputedStyle(element).backgroundColor;
    document.body.style.backgroundColor = color;
}