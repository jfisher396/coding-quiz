// element variables
console.log('script3.js is working');

const timerEl = document.getElementById("timer");
const timerCard = document.querySelector(".timer-card");
const questionDisplay = document.getElementById("question-here");
const startBtn = document.getElementById("start-quiz-button");
const form = document.querySelector(".answer-list");
const answerStatus = document.getElementById("answer-status");
const scoreDisplay = document.getElementById("score");
const initialsInput = document.getElementById("scores");
const initials = document.getElementById("initials");
const highScoresList = document.querySelector(".high-scores");
const restartBtn = document.getElementById("restart-quiz-button");

// variables
let secondsLeft;
let userScore = 0;
let response = "";
let currentIndex = 0;
let timerInterval;

//hides the question form on the page until quiz starts
form.style.display = "none";
timerCard.style.display = "none";
answerStatus.style.display = "none";
initialsInput.style.display = "none";
highScoresList.style.display = "none";
restartBtn.style.display = "none";

// A function to set and start the timer as well as stop it if time runs out.
function setTimer() {
  secondsLeft = 60;
  timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;
    if (secondsLeft === 0 || secondsLeft > 21) {
      timerEl.style.color = "black";
    }
    if (secondsLeft > 10 && secondsLeft < 21) {
      timerEl.style.color = "yellow";
    }
    if (secondsLeft < 6) {
      timerEl.style.color = "red";
    }
    if (secondsLeft < 1) {
      gameOver();
    }
  }, 1000);
}

//Starts the quiz
function startQuiz() {
  timerCard.style.display = "block";
  setTimer();
  questionDispFunc();
  document.getElementById("intro-header").innerText = "";
  startBtn.style.display = "none";
  form.style.display = "initial";
  answerStatus.style.display = "initial";
}

//gets the response from the form of answer choices
function getResponse(e) {
  e.preventDefault();
  response = form.answer.value;
  answerFunc();
}

//function for dealing with incorrect answers
function incorrectAnswer() {
  secondsLeft -= 15;
  timerEl.textContent = secondsLeft;
}

//question and answer choices for question 1
const qAndA = [
  {
    q: "What does HTML stand for?",
    A: "How To Make Lasagna",
    B: "Heavy Trucks March Large",
    C: "Happy Trees Muddy Lakes",
    D: "Hyper Text Markup Language",
  },
  {
    q: "What is the name of the HTML element that makes letters bold?",
    A: "Strong",
    B: "Large",
    C: "Bold",
    D: "Big",
  },
  {
    q: "What is the term for linking more than one string together?",
    A: "Stringulation",
    B: "Concatenation",
    C: "Connectication",
    D: "String Pairing",
  },
  {
    q: "What type of variable can store more than one value?",
    A: "Box",
    B: "Package",
    C: "Array",
    D: "Form",
  },
  {
    q: "What type of function can be called later in your code?",
    A: "Function Expression",
    B: "Function Execution",
    C: "Function Variable",
    D: "Function Declaration",
  },
];

const answerKey = [
  { answer: "D" },
  { answer: "A" },
  { answer: "B" },
  { answer: "C" },
  { answer: "D" },
];

//calls the next question out of the array qAndA
function nextQuestion() {
  if (currentIndex < qAndA.length - 1) {
    currentIndex++;
    questionDispFunc();
  } else {
    gameOver();
  }
}

//displays the current question and answer choices
function questionDispFunc() {
  questionDisplay.textContent = qAndA[currentIndex].q;
  document.getElementById("answer1Label").innerText = qAndA[currentIndex].A;
  document.getElementById("answer2Label").innerText = qAndA[currentIndex].B;
  document.getElementById("answer3Label").innerText = qAndA[currentIndex].C;
  document.getElementById("answer4Label").innerText = qAndA[currentIndex].D;
}

//compares user choice against answer key array
function answerFunc() {
  if (response === answerKey[currentIndex].answer) {
    nextQuestion();
    answerStatus.style.display = "none";
  } else {
    answerStatus.style.display = "block";
    answerStatus.textContent = "Incorrect. Try again.";
    incorrectAnswer();
  }
}

//clears interval and changes display when game is over
function gameOver() {
  clearInterval(timerInterval);
  form.style.display = "none";
  questionDisplay.style.display = "none";
  timerCard.style.display = "none";
  answerStatus.style.display = "none";
  initialsInput.style.display = "block";
  scoreDisplay.textContent = `Your score is ${timerEl.innerText}!`;
}

//array to hold high scores
let highScores = [];

//allows user to enter their initials
function saveScore(e) {
  e.preventDefault();
  if (initials.value.length === 3) {
    let hsInitials = initials.value.toUpperCase();
    let hsScore = timerEl.innerText;
    highScores.initials = hsInitials;
    highScores.score = hsScore;
    highScores.push({ initials: hsInitials, score: hsScore });

    let stringHighScores = JSON.stringify(highScores);
    localStorage.setItem("highScore", stringHighScores);

    displayHighScores();
  } else {
    alert("Must input three characters");
  }
}

//displays high scores on page
function displayHighScores() {
  
  initialsInput.style.display = "none";
  highScoresList.style.display = "block";
  let li = document.createElement("li");

  let highScoresStorage = localStorage.getItem("highScore");
  highScoresStorage = JSON.parse(highScoresStorage);

  for (let i = 0; i < highScoresStorage.length; i++) {
    li.id = highScoresStorage.length;
    li.innerHTML = `Initials: ${highScoresStorage[i].initials} Score: ${highScoresStorage[i].score}`;
    highScoresList.append(li);
  }

  restartBtn.style.display = "block";
}
//allows user to retry the quiz
function restartQuiz(e) {
  e.preventDefault();
  secondsLeft = 60;
  setTimer();
  currentIndex = 0;
  highScoresList.style.display = "none";
  timerCard.style.display = "block";
  questionDisplay.style.display = "block";
  questionDispFunc();
  document.getElementById("intro-header").innerText = "";
  startBtn.style.display = "none";
  restartBtn.style.display = "none";
  form.style.display = "initial";
}

//event listeners
startBtn.addEventListener("click", startQuiz);
form.addEventListener("submit", getResponse);
initialsInput.addEventListener("submit", saveScore);
restartBtn.addEventListener("click", restartQuiz);

//END OF LINE
