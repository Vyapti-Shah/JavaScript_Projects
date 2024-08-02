//ROCK PAPER SCISSORS GAME PROJECT

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("compDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const compScoreDisplay = document.getElementById("compScoreDisplay");

let playerScore = 0;
let compScore = 0;

function playGame(playerChoice){
    const compChoice = choices[Math.floor(Math.random() * 3)]; // random index between 0 to 2 form the array of choices
    console.log(compChoice);
    let result = "";
    if(playerChoice === compChoice){
        result = "ITS A TIE!";
    } else {
        switch(playerChoice){
            case "rock":
                result = (compChoice === "scissors") ? "YOU WIN 🥳" : "YOU LOSE ☹️";
                break;
            case "scissors":
                result = (compChoice === "paper") ? "YOU WIN 🥳" : "YOU LOSE ☹️";
                break;  
            case "paper":
                result = (compChoice === "rock") ? "YOU WIN 🥳" : "YOU LOSE ☹️";
                break;         
        }
    }
    playerDisplay.textContent = `Player : ${playerChoice}`;
    compDisplay.textContent = `Computer : ${compChoice}`; 
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");  //for IT'S A TIE to remove the red and green colour from the text the remove classlist is used

    switch(result){
        case "YOU WIN 🥳":
            resultDisplay.classList.add("greenText"); //to add green colour text when win
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE ☹️":
            resultDisplay.classList.add("redText"); //to add red colour text when lose
            compScore++;
            compScoreDisplay.textContent = compScore;
            break;
    }
} 