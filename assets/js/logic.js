// Timer from 100 seconds that starts when clicked a button
// When timer stops, give score 0

// Subtract 15 seconds when question is wrong

var timer = document.querySelector("#time");
var buttonStart = document.querySelector("#start");
var seconds = 75;

buttonStart.addEventListener("click", function() {
    let i = 75;

    setInterval(function() {
        console.log(--i);
    }, 75);
});