//Saves highscore
//Adds initial
//saves to local storage

endScreenPage = document.querySelector("#end-screen");
buttonSubmit = document.querySelector("#submit");
finalScore = document.querySelector("#final-score");
inputInitials = document.querySelector("#initials");

//Puts score
function setFinalScore() {
    var points = JSON.parse(localStorage.getItem("points"));

    document.getElementById("final-score").innerHTML += points;
};
setFinalScore()

//pressing the submit button
buttonSubmit.addEventListener("click", function() {
    location.href = "highscores.html";
});