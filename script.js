


let timerEl = document.getElementById("timer")
let secondsLeft = 60;
var timerInterval = setInterval;
let intervalStop;
var score = timerEl

//This hides the buttons on the initial quiz start screen.
function hideButtons() {
    
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "none";
    document.getElementById("button6").style.display = "none";
    document.getElementById("button7").style.display = "none";
    document.getElementById("button8").style.display = "none";
    document.getElementById("button9").style.display = "none";
    document.getElementById("button10").style.display = "none";
    document.getElementById("button11").style.display = "none";
    document.getElementById("button12").style.display = "none";
    
}
hideButtons();

//A function to set and start the timer as well as stop it if time runs out.
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
//Starts the quiz
document.getElementById("start-quiz-button").onclick = function quizStart() {

    setTimer();
    question1();
    document.getElementById("intro-header").innerHTML = "";

}
//Deducts 15 seconds for an incorrect answer.
function incorrectAnswer() {
    
    secondsLeft -=15;
    timerEl.textContent = secondsLeft;
    console.log( secondsLeft)
}

//Sets up the first question screen by showing previously hidden buttons.
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
    
    //Allows for selection of the answers to the question and advances user to next question.
    function answerQue1() {

        document.getElementById("button1").addEventListener("click", function () {
            
            incorrectAnswer();
            console.log("this is coming from question num 1")
            question2();
        });
        document.getElementById("button2").addEventListener("click", function () {
            ;
            incorrectAnswer();

            question2();
        });
        document.getElementById("button3").addEventListener("click", function () {
            
            incorrectAnswer();

            question2();
        });
        document.getElementById("button4").addEventListener("click", function () {
            
            question2();
        });
    }
    answerQue1()
}



function question2() {
    
    document.getElementById("question-here").innerHTML = "What is the name of the HTML element that makes letters bold?";
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "none";
    document.getElementById("button3").style.display = "none";
    document.getElementById("button4").style.display = "none";
    document.getElementById("button5").style.display = "initial";
    document.getElementById("button6").style.display = "initial";
    document.getElementById("button7").style.display = "initial";
    document.getElementById("button8").style.display = "initial";
    document.getElementById("button5").innerHTML = "Big";
    document.getElementById("button6").innerHTML = "Large";
    document.getElementById("button7").innerHTML = "Bold";
    document.getElementById("button8").innerHTML = "Strong";
    

    function answerQue2() {

        document.getElementById("button5").addEventListener("click", function () {
            
            incorrectAnswer();
            console.log("this is coming from question num 2")
            question3();
        });
        document.getElementById("button6").addEventListener("click", function () {
            
            incorrectAnswer();
            question3();
        });
        document.getElementById("button7").addEventListener("click", function () {
            incorrectAnswer();
            question3();
        });
        document.getElementById("button8").addEventListener("click", function () {
            //correct answer
            question3();
        });
}
    answerQue2();

}



function question3() {
    
    document.getElementById("question-here").innerHTML = "What is the term for linking more than one string together?";
    document.getElementById("button5").style.display = "none";
    document.getElementById("button6").style.display = "none";
    document.getElementById("button7").style.display = "none";
    document.getElementById("button8").style.display = "none";
    document.getElementById("button9").style.display = "initial";
    document.getElementById("button10").style.display = "initial";
    document.getElementById("button11").style.display = "initial";
    document.getElementById("button12").style.display = "initial";
    document.getElementById("button9").innerHTML = "Stringulation";
    document.getElementById("button10").innerHTML = "Concatenation";
    document.getElementById("button11").innerHTML = "Connectication";
    document.getElementById("button12").innerHTML = "String Pairing";
    

    function answerQue3() {

    document.getElementById("button9").addEventListener("click", function () {
        
        console.log("this is coming from question num 3")
        incorrectAnswer();
        gameOver();
    });
    document.getElementById("button10").addEventListener("click", function () {
        //correct answer
        gameOver();
    });
    document.getElementById("button11").addEventListener("click", function () {
        incorrectAnswer();
        gameOver();
    });
    document.getElementById("button12").addEventListener("click", function () {
        incorrectAnswer();
        gameOver();
    });


}
    answerQue3();

}
//Hides all buttons and calls the function to end the game.
function gameOver() {
    
    document.getElementById("question-here").innerHTML = "Game Over!";
    document.getElementById("button9").style.display = "none";
    document.getElementById("button10").style.display = "none";
    document.getElementById("button11").style.display = "none";
    document.getElementById("button12").style.display = "none";
    // document.getElementById("score").innerHTML = score;
    clearInterval(intervalStop);
   
}

