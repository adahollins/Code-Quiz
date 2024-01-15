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

    makeButtons()
    
};

// Buttons for question One
function makeButtons() {
    var answersOne = ["1. strings", "2. boolean", "3. alerts", "4. numbers"];

    function buttons() {
        for (var i = 0; i < answersOne.length; i++) {
        document.getElementById("choices").innerHTML += "<button>" + answersOne[i] + "</button>";
    }
};

buttons()

var buttonsOne = document.querySelector("#choices");
const buttonCorrect = '3. alerts';

    buttonsOne.addEventListener("click", function(event) {

        if (buttonCorrect) {
            console.log("Correct!");
        } else {
            console.log("Wrong!");
    };
    });
}; 
