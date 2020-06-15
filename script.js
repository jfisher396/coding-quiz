//TODO:connect answer buttons to functions that are connected to switch statements
//TODO:state whether the the question was correctly answered 
//TODO:reduce time on clock for incorrect answers


let timeEl = document.getElementById("timer")
let secondsLeft = 60;


function hideButtons() {
    document.getElementById("next-question").style.display = "none";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("answer-status").innerHTML = ""
}
hideButtons();

function correctAnswer() {
    document.getElementById("answer-status").innerHTML = "Correct!";
}

function incorrectAnswer() {
    document.getElementById("answer-status").innerHTML = "Incorrect";
    // timeEl = secondsLeft - 15;
    
}



document.getElementById("start-quiz-button").onclick = function quizStart() {

    setTime();
    question1();
    document.getElementById("intro-header").innerHTML = "";

}


function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if (secondsLeft === -1) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "0";
            alert("Time up!")
        }

    }, 1000);
    }

function question1() {
    document.getElementById("start-quiz-button").style.display = "none";
    document.getElementById("question-here").innerHTML = "What is your quest?";
    document.getElementById("button1").style.display = "initial";
    document.getElementById("button1").innerHTML = "To seek the Refrigerator"
    document.getElementById("button2").style.display = "initial";
    document.getElementById("button2").innerHTML = "To seek a bologna sandwich";
    document.getElementById("button3").style.display = "initial";
    document.getElementById("button3").innerHTML = "To seek the Remote Control";
    document.getElementById("button4").style.display = "initial";
    document.getElementById("button4").innerHTML = "To seek the Holy Grail";
    document.getElementById("answer-status").innerHTML = "Answer is...";
    document.getElementById("next-question").style.display = "initial";

    function answerQue1() {

        document.getElementById("button1").addEventListener("click", function () {
            incorrectAnswer()
        });
        document.getElementById("button2").addEventListener("click", function () {
            incorrectAnswer()
        });
        document.getElementById("button3").addEventListener("click", function () {
            incorrectAnswer()
        });
        document.getElementById("button4").addEventListener("click", function () {
            correctAnswer()
        });
    }
    answerQue1();

    document.getElementById("next-question").addEventListener("click", question2);
}


function question2() {
    document.getElementById("question-here").innerHTML = "What is your favorite color?";
    document.getElementById("button1").innerHTML = "Red";
    document.getElementById("button2").innerHTML = "Blue";
    document.getElementById("button3").innerHTML = "Yellow";
    document.getElementById("button4").innerHTML = "Green";
    document.getElementById("answer-status").innerHTML = "Answer is...";

    function answerQue2() {
        document.getElementById("button1").addEventListener("click", function () {
            correctAnswer()
        });
        document.getElementById("button2").addEventListener("click", function () {
            correctAnswer()
        });
        document.getElementById("button3").addEventListener("click", function () {
            incorrectAnswer()
        });
        document.getElementById("button4").addEventListener("click", function () {
            correctAnswer()
        });
    }
    answerQue2();

    document.getElementById("next-question").addEventListener("click", question3);
}

function question3() {
    document.getElementById("question-here").innerHTML = "What is the airspeed velocity of an unladen swallow?";
    document.getElementById("button1").innerHTML = "What? I don't know that!";
    document.getElementById("button2").innerHTML = "African or European Swallow?";
    document.getElementById("answer-status").innerHTML = "Answer is...";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("next-question").innerHTML = "FINISH!";

    function answerQue3() {
        document.getElementById("button1").addEventListener("click", function () {
            incorrectAnswer()
        });
        document.getElementById("button2").addEventListener("click", function () {
            correctAnswer()
        });

    }
    answerQue3();


    document.getElementById("next-question").onclick = function quizEnd() {
        stop.setTime();
    };
}