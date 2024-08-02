// QUIZ GAME PROJECT

const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers:[
            { text: "Shark", correct: false},
            { text: "Blue Whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world ?",
        answers:[
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world ?",
        answers:[
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world ?",
        answers:[
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "What is the capital of India ?",
        answers: [
            { text: "New Delhi", correct: true},
            { text: "Mumbai", correct: false},
            { text: "Delhi", correct: false},
            { text: "Gujarat", correct: false},
        ]
    }
]

const questionElement = document.getElementById("questionTag");
const answerBtn = document.getElementById("answerBtn");
const nextBtn = document.getElementById("nextBtn");

let currentQuesIndex = 0;
let score = 0;

startQuiz();

function startQuiz(){
    currentQuesIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQues();
};

function showQues(){
    resetState();
    let currentQues = questions[currentQuesIndex];
    let quesNo = currentQuesIndex + 1;
    questionElement.innerHTML = quesNo + ". " + currentQues.question;

    currentQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ansBtn");
        answerBtn.appendChild(button); //adds button to the div of answerBtn
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
};

function resetState(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild); //to remove the answer1.. buttons
    }
};

function selectAnswer(ans){
    const selectedAns = ans.target;
    const isCorrect = selectedAns.dataset.correct === "true";
    if(isCorrect){
        selectedAns.classList.add("correctBtn");
        score++;
    }
    else{
        selectedAns.classList.add("incorrectBtn");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correctBtn");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
};

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = `Play Again`;
    nextBtn.style.display = "block";
};

function handleNextBtn(){
    currentQuesIndex++;
    if(currentQuesIndex < questions.length){
        showQues();
    }
    else{
        showScore();
    }
};

nextBtn.addEventListener("click", () => {
    if(currentQuesIndex < questions.length){
        handleNextBtn();
    }
    else{
        startQuiz();
    }
});