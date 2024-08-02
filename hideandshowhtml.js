// HIDE AND SHOW HTML

const mybutton = document.getElementById("mybutton");
const myImg = document.getElementById("myImg");

mybutton.addEventListener("click", event => {
    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        mybutton.textContent = "Hide";
    } else {
        myImg.style.visibility = "hidden";
        mybutton.textContent = "Show";
    }
}); 