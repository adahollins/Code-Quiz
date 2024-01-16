// Make questions unhide after each button is selected

// Add Event Listener for each button
// When it's correct, add points, 'Correct' and sound
// When it's incorrect, subtract time, 'Wrong' and sound


// Question: Commonly used data types DO NOT INCLUDE:
// Answers: strings , boolean , alerts , numbers
// Question: The conditon in an if / else statment is enclosed within _____ .
// Answers: quotes, burly brackets , parenthesis , square brackets
// Question: Arrays in JavaScript cna be stored in _____ .
// Answers: number of strings , other arrays, booleans, all the above
// Question: String values must be enclosed in ______ when being assigned to variables.
// Answers: commas , curly brackets , quotes , parenthesis
// Question: A very useful tool during development and debugging for printing content in the debugger is:
// Answers: Javascript , terminal / bash ,  for loops , console.log

var buttonQuestions = document.querySelector("#question-title");
var buttonAnswers = document.querySelector("#choices");
var buttonStart = document.querySelector("#start");
var buttonFeedback = document.querySelector("#feeback");
var timer = document.querySelector("#time");

// Adds first question
questionOne();

// Hides quiz content and shows question content
buttonStart.addEventListener("click", function(event) {
    var startPage = document.querySelector("#start-screen");
    var displaySettings = startPage.style.display;
    var questionPage = document.querySelector("#questions")

    if (displaySettings == 'none') {
        startPage.style.display = 'block';
        questionPage.style.display = 'none';
    } else {
        startPage.style.display = 'none';
        questionPage.style.display = 'block';
        localStorage.removeItem("points");
    }
});

// Timer starts after clicking start
buttonStart.addEventListener("click", function() {
    function setTimerText() {
        timer.textContent = i;
    }

    let i = 30;

    var countdown = setInterval(function() {
        if (i <= 1) clearInterval(countdown);
        setTimerText(i--);
    }, 1000);
});

// Adds first questions function
function questionOne() {
    var questionOne = "Commonly used data types DO NOT INCLUDE:";

    buttonQuestions.textContent += questionOne;

    makeButtonsOne()
    
};

// Buttons for question One
function makeButtonsOne() {
    var answersWrongOne = "1. strings";
    var answersWrongTwo = "2. boolean";
    var answersCorrect = "3. alerts";
    var answersWrongThree = "4. numbers";

    function makeButtonWrongOne() {
        document.getElementById("choices").innerHTML += "<button id='wrong-one'>" + answersWrongOne + "</button>";
    };

    function makeButtonWrongTwo() {
        document.getElementById("choices").innerHTML += "<button id='wrong-two'>" + answersWrongTwo + "</button>";
    };

    function makeButtonRight() {
        document.getElementById("choices").innerHTML += "<button id='correct'>" + answersCorrect + "</button>";
    };

    function makeButtonWrongThree() {
        document.getElementById("choices").innerHTML += "<button id='wrong-three'>" + answersWrongThree + "</button>";
    };

makeButtonWrongOne()
makeButtonWrongTwo()
makeButtonRight()
makeButtonWrongThree()

const buttonCorrect = document.querySelector("#correct");
const buttonWrongOne = document.querySelector("#wrong-one");
const buttonWrongTwo = document.querySelector("#wrong-two");
const buttonWrongThree = document.querySelector("#wrong-three");
const audioWrong = new Audio("assets/sfx/incorrect.wav");
const audioRight = new Audio("assets/sfx/correct.wav");
var points = 0;

    buttonCorrect.addEventListener("click", function(event) {
        console.log("Correct!");
        audioRight.play();
        localStorage.setItem("points", JSON.stringify(points + 10));
        showEndScreen();
        timer.style.display = 'none';
    });

    buttonWrongOne.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        showEndScreen();
        timer.style.display = 'none';
    });

    buttonWrongTwo.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        showEndScreen();
        timer.style.display = 'none';
    });

    buttonWrongThree.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        showEndScreen();
        timer.style.display = 'none';
    });
}; 

function makeButtonsTwo() {

};

//Shows endscreen after the last question
function showEndScreen() {
    var endPage = document.querySelector("#end-screen");
    var displaySettings = endPage.style.display;
    var questionPage = document.querySelector("#questions");

    if (displaySettings == 'none') {
        endPage.style.display = 'none';
        questionPage.style.display = 'block';
    } else {
        endPage.style.display = 'block';
        questionPage.style.display = 'none';
    }
};