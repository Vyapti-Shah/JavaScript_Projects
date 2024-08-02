//SNAKE GAME PROJECT
const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = " rgb(152, 150, 150)";
const snakeColour = "lightgreen";
const snakeBorder = "black";
const foodColour = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [ //5 body parts as it increases when it eats food
    {x:unitSize * 4, y:0}, //1st body part of snake 
    {x:unitSize * 3, y:0}, //2nd body part of snake
    {x:unitSize * 2, y:0}, //3rd body part of snake
    {x:unitSize, y:0}, //4th body part of snake
    {x:0, y:0} //5th body part of snake
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};

function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameover();
            nextTick();
        }, 200); //80ms is the speed of the snake moving
    }
    else{
        displayGameover();
    }
};

function clearBoard(){
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
};

function createFood(){
    function randomFood(min, max){
        const randNum = Math.round((Math.random() * (max-min) + min) / unitSize /* This gives us num between 0 to 25 */) * unitSize /* by
                                                                             multiplying unitSize again it gives us num divisible by 25 */;
        return randNum;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
};

function drawFood(){
    context.fillStyle = foodColour;
    context.fillRect(foodX, foodY, unitSize, unitSize);
};

function moveSnake(){
    const head = {x: snake[0].x + xVelocity,   //for increasing the snake in positive direction towards x axis
                  y: snake[0].y + yVelocity }  //for increasing the snake in positive direction towards y axis
    snake.unshift(head);
    //if food is eaten
    if(snake[0].x == foodX && snake[0].y == foodY){
        score ++;
        scoreText.textContent = score;
        createFood();
    }
    else{
        snake.pop(); //cuts the tail (deletes)
    }
};

function drawSnake(){
    context.fillStyle = snakeColour;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};

function changeDirection(event){
    const keyPressed = event.keyCode;
    //console.log(keyPressed);
    const LEFT = 37;
    const UP = 38;
    const RIGHT = 39;
    const DOWN = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingRight = (xVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);

    switch(true){
        case(keyPressed == LEFT && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == UP && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case(keyPressed == RIGHT && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case(keyPressed == DOWN && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};

function checkGameover(){
    switch(true){
        case(snake[0].x < 0): //ends game if the snake goes out of the canvas box from the leftside
            running = false;
            break;
        case(snake[0].x >= gameWidth): //ends game if the snake goes out of the canvas box from the rightside
            running = false;
            break;
        case(snake[0].y < 0): //ends the game if the snake goes out of the canvas box from the top
            running = false;
            break;
        case(snake[0].y >= gameHeight): //ends game if the snake goes out of the canvas box from bottom
            running = false;
            break;
    }
    for(let i = 1; i < snake.length; i++){
        if(snake[i].x == snake[0].x && snake[i].y == snake[0].y){
            running = false;
        }
    }
};

function displayGameover(){
    context.font = "50px MV Boli";
    context.fillStyle = "black";
    context.textAlign = "center";
    context.fillText("GAME OVER!", gameWidth/2, gameHeight/2); //gameWidth/2 and gameHeight/2 in order to get the text at box's center 
    running = false;
};

function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [ //5 body parts as it increases when it eats food
                {x:unitSize * 4, y:0}, //1st body part of snake 
                {x:unitSize * 3, y:0}, //2nd body part of snake
                {x:unitSize * 2, y:0}, //3rd body part of snake
                {x:unitSize, y:0}, //4th body part of snake
                {x:0, y:0}
            ];
 gameStart();
};