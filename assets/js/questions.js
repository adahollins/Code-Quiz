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
    }
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

    buttonCorrect.addEventListener("click", function(event) {
        console.log("Correct!");
    });

    buttonWrongOne.addEventListener("click", function(event) {
        console.log("Wrong!");
    });

    buttonWrongTwo.addEventListener("click", function(event) {
        console.log("Wrong!");
    });

    buttonWrongThree.addEventListener("click", function(event) {
        console.log("Wrong!");
    });
}; 

