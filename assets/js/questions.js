// Make questions unhide after each button is selected

// Add Event Listener for each button
// When it's correct, add points, 'Correct' and sound
// When it's incorrect, subtract time, 'Wrong' and sound


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
        localStorage.setItem('points', 0);
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
    var question = "Commonly used data types DO NOT INCLUDE:";

    buttonQuestions.textContent += question;

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
let points = JSON.parse(localStorage.getItem('points'));

    buttonCorrect.addEventListener("click", function(event) {
        console.log("Correct!");
        audioRight.play();
        localStorage.setItem("points", JSON.stringify(points + 10));
        questionTwo();
    });

    buttonWrongOne.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        questionTwo();
    });

    buttonWrongTwo.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        questionTwo();
    });

    buttonWrongThree.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        questionTwo();
    });
}; 

// Question Two
function questionTwo() {
    var question = "The conditon in an if / else statment is enclosed within _____ .";

    buttonQuestions.innerHTML = '';
    buttonQuestions.textContent += question;

    makeButtonsTwo()
};

function makeButtonsTwo() {
    buttonAnswers.innerHTML = '';

    var answersWrongOne = "1. quotes";
    var answersCorrect = "2. curly brackets";
    var answersWrongTwo = "3. parenthesis";
    var answersWrongThree = "4. square brackets";

    function makeButtonWrongOne() {
        document.getElementById("choices").innerHTML += "<button id='wrong-one'>" + answersWrongOne + "</button>";
    };

    function makeButtonWrongTwo() {
        document.getElementById("choices").innerHTML += "<button id='correct'>" + answersCorrect + "</button>";
    };

    function makeButtonRight() {
        document.getElementById("choices").innerHTML += "<button id='wrong-two'>" + answersWrongTwo + "</button>";
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
let points = JSON.parse(localStorage.getItem('points'));

    buttonCorrect.addEventListener("click", function(event) {
        console.log("Correct!");
        audioRight.play();
        localStorage.setItem("points", JSON.stringify(points + 10));
        questionThree();
    });

    buttonWrongOne.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        questionThree();
    });

    buttonWrongTwo.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        questionThree();
    });

    buttonWrongThree.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify(points));
        questionThree();
    });
};

//Question Three
function questionThree() {
    var question = "Arrays in JavaScript can be stored in _____ .";

    buttonQuestions.innerHTML = '';
    buttonQuestions.textContent += question;

    makeButtonsThree()
};

function makeButtonsThree() {
    buttonAnswers.innerHTML = '';

    var answersWrongOne = "1. number of strings";
    var answersWrongTwo = "2. other arrays";
    var answersWrongThree = "3. booleans";
    var answersCorrect = "4. all the above";

    function makeButtonWrongOne() {
        document.getElementById("choices").innerHTML += "<button id='wrong-one'>" + answersWrongOne + "</button>";
    };

    function makeButtonWrongTwo() {
        document.getElementById("choices").innerHTML += "<button id='wrong-two'>" + answersWrongTwo + "</button>";
    };

    function makeButtonRight() {
        document.getElementById("choices").innerHTML += "<button id='wrong-three'>" + answersWrongThree + "</button>";
    };

    function makeButtonWrongThree() {
        document.getElementById("choices").innerHTML += "<button id='correct'>" + answersCorrect + "</button>";
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

    buttonCorrect.addEventListener("click", function(event) {
        console.log("Correct!");
        audioRight.play();
        localStorage.setItem("points", JSON.stringify("points" + 10));
        questionFour();
    });

    buttonWrongOne.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        questionFour();
    });

    buttonWrongTwo.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        questionFour();
    });

    buttonWrongThree.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        questionFour();
    });
};

//Question Four
function questionFour() {
    var question = "String values must be enclosed in ______ when being assigned to variables.";

    buttonQuestions.innerHTML = '';
    buttonQuestions.textContent += question;

    makeButtonsFour()
};

function makeButtonsFour() {
    buttonAnswers.innerHTML = '';

    var answersWrongOne = "1. commas";
    var answersWrongTwo = "2. curly brackets";
    var answersCorrect = "3. quotes";
    var answersWrongThree = "4. parenthesis";

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

    buttonCorrect.addEventListener("click", function(event) {
        console.log("Correct!");
        audioRight.play();
        localStorage.setItem("points", JSON.stringify("points" + 10));
        questionFive();
    });

    buttonWrongOne.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        questionFive();
    });

    buttonWrongTwo.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        questionFive();
    });

    buttonWrongThree.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        questionFive();
    });
};

// Question Five
function questionFive() {
    var question = "A very useful tool during development and debugging for printing content in the debugger is:";

    buttonQuestions.innerHTML = '';
    buttonQuestions.textContent += question;

    makeButtonsFive()
};

function makeButtonsFive() {
    buttonAnswers.innerHTML = '';

    var answersWrongOne = "1. Javascript";
    var answersWrongTwo = "2. terminal / bash";
    var answersWrongThree = "3. for loop";
    var answersCorrect = "4. console.log";

    function makeButtonWrongOne() {
        document.getElementById("choices").innerHTML += "<button id='wrong-one'>" + answersWrongOne + "</button>";
    };

    function makeButtonWrongTwo() {
        document.getElementById("choices").innerHTML += "<button id='wrong-two'>" + answersWrongTwo + "</button>";
    };

    function makeButtonRight() {
        document.getElementById("choices").innerHTML += "<button id='wrong-three'>" + answersWrongThree + "</button>";
    };

    function makeButtonWrongThree() {
        document.getElementById("choices").innerHTML += "<button id='correct'>" + answersCorrect + "</button>";
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

    buttonCorrect.addEventListener("click", function(event) {
        console.log("Correct!");
        audioRight.play();
        localStorage.setItem("points", JSON.stringify("points" + 10));
        showEndScreen();
        timer.style.display = 'none';
    });

    buttonWrongOne.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        showEndScreen();
        timer.style.display = 'none';
    });

    buttonWrongTwo.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        showEndScreen();
        timer.style.display = 'none';
    });

    buttonWrongThree.addEventListener("click", function(event) {
        console.log("Wrong!");
        audioWrong.play();
        localStorage.setItem("points", JSON.stringify("points"));
        showEndScreen();
        timer.style.display = 'none';
    });
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