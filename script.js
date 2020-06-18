//TODO:connect answer buttons to functions that are connected to switch statements
//TODO:state whether the the question was correctly answered 
//TODO:reduce time on clock for incorrect answers
//TODO:save scores to local storage


let timerEl = document.getElementById("timer")
let secondsLeft = 60;
var timerInterval = setInterval;
let intervalStop;
var score = timerEl


function hideButtons() {
    
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("answer-status").innerHTML = ""
}
hideButtons();


function setTimer() {
    intervalStop = setInterval(function() {
        // secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft <= -1) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "0";
            gameOver();
            alert("Time up!")
        } else {
            secondsLeft--;
            console.log(secondsLeft)
        }


    }, 1000);
}

document.getElementById("start-quiz-button").onclick = function quizStart() {

    setTimer();
    question1();
    document.getElementById("intro-header").innerHTML = "";

}

function correctAnswer() {
    document.getElementById("answer-status").innerHTML = "Correct!";

}

function incorrectAnswer() {
    document.getElementById("answer-status").innerHTML = "Incorrect";
    secondsLeft -=10;
    timerEl.textContent = secondsLeft;
    console.log("Hey", secondsLeft)
}


function question1() {
    
    document.getElementById("start-quiz-button").style.display = "none";
    document.getElementById("question-here").innerHTML = "What does HTML stand for?";
    document.getElementById("button1").style.display = "initial";
    document.getElementById("button1").innerHTML = "How To Make Lasagna"
    document.getElementById("button2").style.display = "initial";
    document.getElementById("button2").innerHTML = "Heavy Trucks March Large";
    document.getElementById("button3").style.display = "initial";
    document.getElementById("button3").innerHTML = "Happy Trees Muddy Lakes";
    document.getElementById("button4").style.display = "initial";
    document.getElementById("button4").innerHTML = "Hyper Text Markup Language";
    document.getElementById("answer-status").innerHTML = "";
    
    function answerQue1() {

        document.getElementById("button1").addEventListener("click", function (event) {
            event.stopPropagation();
            incorrectAnswer();
            console.log("this is coming from question num 1")
            question2();
        });
        document.getElementById("button2").addEventListener("click", function (event) {
            event.stopPropagation();
            incorrectAnswer();

            question2();
        });
        document.getElementById("button3").addEventListener("click", function (event) {
            event.stopPropagation();
            incorrectAnswer();

            question2();
        });
        document.getElementById("button4").addEventListener("click", function (event) {
            event.stopPropagation();
            correctAnswer();

            question2();
        });
    }
    answerQue1()
}



function question2() {
    
    document.getElementById("question-here").innerHTML = "What is the name of the HTML element that makes letters bold?";
    document.getElementById("button1").innerHTML = "Big";
    document.getElementById("button2").innerHTML = "Large";
    document.getElementById("button3").innerHTML = "Bold";
    document.getElementById("button4").innerHTML = "Strong";
    document.getElementById("answer-status").innerHTML = "Answer is...";

    function answerQue2() {

        document.getElementById("button1").addEventListener("click", function (event) {
            event.stopPropagation();
            incorrectAnswer();
            console.log("this is coming from question num 2")
            question3();
        });
        document.getElementById("button2").addEventListener("click", function (event) {
            event.stopPropagation();
            incorrectAnswer();
            question3();
        });
        document.getElementById("button3").addEventListener("click", function () {
            incorrectAnswer();
            question3();
        });
        document.getElementById("button4").addEventListener("click", function () {
            correctAnswer();
            question3();
        });
}
    answerQue2();

}



function question3() {
    
    document.getElementById("question-here").innerHTML = "What is the third question?";
    document.getElementById("button1").innerHTML = "Answer 1";
    document.getElementById("button2").innerHTML = "Answer 2";
    document.getElementById("button3").innerHTML = "Answer 3";
    document.getElementById("button4").innerHTML = "Answer 4";
    document.getElementById("answer-status").innerHTML = "Answer is...";

    function answerQue3() {

    document.getElementById("button1").addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("this is coming from question num 3")
        incorrectAnswer();
        gameOver();
    });
    document.getElementById("button2").addEventListener("click", function () {
        correctAnswer();
        gameOver();
    });
    document.getElementById("button3").addEventListener("click", function () {
        incorrectAnswer();
        gameOver();
    });
    document.getElementById("button4").addEventListener("click", function () {
        incorrectAnswer();
        gameOver();
    });


}
    answerQue3();

}

function gameOver() {
    
    document.getElementById("question-here").innerHTML = "Game Over!";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("score").innerHTML = score;
    clearInterval(intervalStop);
    /* function stopClock() {
        clearInterval(intervalStop);
    } */
}

