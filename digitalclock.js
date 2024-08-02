//DIGITAL CLOCK PROJECT

function updateClock(){
    const now = new Date();
    let hours = now.getHours(); //.toString().padStart(2, 0) used to add 0 when the time is a single digit number to make it a 2-digit number (thus, (2,0) is used)
    const meridiem = hours <= 12 ? "AM" : "PM" ;
    hours = hours % 12 || 12; //as we dont want our hours to go above 12 (ie we want to get time after 12pm as 1pm 2pm inplace of getting 13pm 14pm) so we %12 to get the remainder of 12
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const secounds = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${secounds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock(); 
setInterval(updateClock, 1000);