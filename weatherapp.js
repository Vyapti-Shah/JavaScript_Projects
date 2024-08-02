//WEATHER APP
//https://openweathermap.org/   =  api (google)  [api key - 8b7274bb432facac9aba524e8502fda5]

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "8b7274bb432facac9aba524e8502fda5";

weatherForm.addEventListener("submit", async event => {

    event.preventDefault();

    const city = cityInput.value;
    
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }

    else{
        displayError("Please Enter a City");
    }
});


async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;  //https://openweathermap.org/current
   
    const response =await fetch(apiUrl);

    console.log(response);

    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}


function displayWeatherInfo(data){
    console.log(data);
    const {name: city,
           main:{temp, humidity}, 
           weather: [{description, id}]} = data;

    card.textContent = "";
    card.style.display = "flex"; //resets after we replace with another userinput 
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");
    card.appendChild(cityDisplay);  //to display it on the box

    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;  //for kelvin to celcius (K-273) //for fahreniet to celcius (K-273)*(9/5)+32
    tempDisplay.classList.add("tempDisplay");
    card.appendChild(tempDisplay);

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");
    card.appendChild(humidityDisplay);

    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");
    card.appendChild(descDisplay);

    weatherEmoji.textContent = getWeatherEmoji(id);
    weatherEmoji.classList.add("weatherEmoji");
    card.appendChild(weatherEmoji);
}


function getWeatherEmoji(weatherid){
    switch(true){
        case(weatherid >= 200 && weatherid < 300):
            return "⛈️";
        case(weatherid >= 300 && weatherid < 400):
            return "🌧️";
        case(weatherid >= 500 && weatherid < 600):
            return "🌧️";
        case(weatherid >= 600 && weatherid < 700):
            return "🌨️";
        case(weatherid >= 700 && weatherid < 800):
            return "🌫️";
        case(weatherid === 800):
            return "☀️";
        case(weatherid >= 801 && weatherid < 810):
            return "☁️";
        default:
            return "❔";
    }
}


function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}