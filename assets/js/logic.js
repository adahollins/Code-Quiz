// Timer from 75 seconds that starts when clicked a button
// When timer stops, give score 0

// Subtract 15 seconds when question is wrong

var timer = document.querySelector("#time");
var buttonStart = document.querySelector("#start");
var seconds = 15;

// Timer starts after clicking start
buttonStart.addEventListener("click", function() {
    function setTimerText() {
        timer.textContent = i;
    }

    let i = 30;

    var x = setInterval(function() {
        if (i <= 1) clearInterval(x);
        setTimerText(i--);
    }, 1000);
});