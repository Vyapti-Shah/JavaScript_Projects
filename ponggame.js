//PONG GAME PROJECT

const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "forestgreen";
const paddle1colour = "blue";
const paddle2colour = "red";
const paddleBorder = "black";
const ballColour = "yellow";
const ballBorderColour = "black";
const ballRadius = 12.5;
const paddleSpeed = 50;
let intervalId;
let ballSpeed = 1;
let ballX = gameWidth / 2; //for default placing the ball at center
let ballY = gameHeight / 2; //for default placing the ball at center
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;
let paddle1 = {
    width: 25,
    height: 100,
    x: 0,
    y: 0
};
let paddle2 = {
    width: 25,
    height: 100,
    x: gameWidth - 25,
    y: gameHeight - 100
};

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    createBall();
    nextTick();
};

function nextTick(){
    intervalId = setTimeout(() => {
        clearBoard();
        drawPaddles();
        moveBall();
        drawBall(ballX, ballY);
        checkCollision();
        nextTick();
    }, 10)
};

function clearBoard(){
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
};

function drawPaddles(){
    context.strokeStyle = paddleBorder;

    context.fillStyle = paddle1colour;
    context.fillRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    context.strokeRect(paddle1.x, paddle1.y, paddle1.width, paddle1.height);
    
    context.fillStyle = paddle2colour;
    context.fillRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
    context.strokeRect(paddle2.x, paddle2.y, paddle2.width, paddle2.height);
};

function createBall(){
    ballSpeed = 1;
    if(Math.round(Math.random()) == 1){ //random condition gives number between 0 and 1
        ballXDirection = 1;  //if 1 it moves to right
    }
    else {
        ballXDirection = -1;  //if -1 it moves to left
    }
    if(Math.round(Math.random()) == 1){ //random condition gives number between 0 and 1
        ballYDirection = 1;  //if 1 it moves to right
    }
    else {
        ballYDirection = -1;  //if -1 it moves to left
    }
    ballX = gameWidth / 2;
    ballY = gameHeight / 2;
    drawBall(ballX, ballY);
};

function moveBall(){
    ballX += (ballSpeed * ballXDirection);
    ballY += (ballSpeed * ballYDirection);
};

function drawBall(ballX, ballY){
    context.fillStyle = ballColour;
    context.strokeStyle = ballBorderColour;
    context.lineWidth = 2;
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    context.stroke();
    context.fill();
};

function checkCollision(){
    if(ballY <= 0 + ballRadius){
        ballYDirection *= -1;
    }
    if(ballY >= gameHeight - ballRadius){
        ballYDirection *= -1;
    }
    if(ballX <= 0){
        player2Score += 1;
        updateScore();
        createBall();
        return;
    }
    if(ballX >= gameWidth){
        player1Score += 1;
        updateScore();
        createBall();
        return;
    }
    if(ballX <= (paddle1.x + paddle1.width + ballRadius)){
        if(ballY > paddle1.y && ballY < paddle1.y + paddle1.height){
            ballX = (paddle1.x + paddle1.width) + ballRadius; //prevents the ball from getting stuck at paddle1
            ballXDirection *= -1;
            ballSpeed++;
        }
    }
    if(ballX >= (paddle2.x - ballRadius)){
        if(ballY > paddle2.y && ballY < paddle2.y + paddle2.height){
            ballX = paddle2.x - ballRadius; //prevents the ball from getting stuck at paddle2
            ballXDirection *= -1;
            ballSpeed++;
        }
    }
};

function changeDirection(event){
    const keyPressed = event.keyCode; //keyCode gives the key's number eg: W=87 S=83 ArrorUp=38 ArrowDown=40 ArrowLeft=37 ArrowRight=39
    //console.log(keyPressed);  //open console => refresh page while console is open => enter the keys => Respective Numbers will be shown
    const paddle1Up = 87;
    const paddle1Down = 83;
    const paddle2Up = 38;
    const paddle2Down = 40;

    switch(keyPressed){
        case(paddle1Up):
        if(paddle1.y > 0){
            paddle1.y -= paddleSpeed;
        }
            break;

        case(paddle1Down):
        if(paddle1.y < gameHeight - paddle1.height){
            paddle1.y += paddleSpeed;
        }
            break;

        case(paddle2Up):
        if(paddle2.y > 0){
            paddle2.y -= paddleSpeed;
        }
            break;

        case(paddle2Down):
        if(paddle2.y < gameHeight - paddle2.height){
            paddle2.y += paddleSpeed;
        }
            break;
    }
}

function updateScore(){
    scoreText.textContent = `${player1Score} : ${player2Score}`;
};

function resetGame(){
    player1Score = 0;
    player2Score = 0;
    paddle1 = {
        width: 25,
        height: 100,
        x: 0,
        y: 0
    };
    paddle2 = {
        width: 25,
        height: 100,
        x: gameWidth - 25,
        y: gameHeight - 100
    };
    ballSpeed = 1;
    ballX = 0;
    ballY = 0;
    ballXDirection = 0;
    ballYDirection = 0;
    updateScore();
    clearInterval(intervalId);
    gameStart();
};