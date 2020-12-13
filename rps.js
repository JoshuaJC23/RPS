var letters = ["r", "p", "s"];

var wins = 0;
var losses = 0;
var ties = 0;
var yourChoice = "";
var compChoice = "";

var _wins = document.getElementById("wins");
var _losses = document.getElementById("losses");
var _ties = document.getElementById("ties");
var _yourChoice = document.getElementById("yourChoice");
var _compChoice = document.getElementById("compChoice");
var Instructions = document.getElementById("instructions");

document.onkeyup = function(event) {
    
    yourChoice = event.key;
    console.log(yourChoice);

    compChoice = letters[Math.floor(Math.random() * letters.length)];
    console.log(compChoice);

    if ((yourChoice === "r") || (yourChoice === "p") || (yourChoice === "s")) {

        if ((yourChoice === "r") && (compChoice === "s") ||
            (yourChoice === "p") && (compChoice === "r") ||
            (yourChoice === "s") && (compChoice === "p")) {
                wins++
        }
        else if (yourChoice === compChoice) {
            ties++
        }
        else {
            losses++
        }

        Instructions.textContent = "";

        _wins.textContent = wins;
        _losses.textContent = losses;
        _ties.textContent = ties;
        _yourChoice.textContent = yourChoice;
        _compChoice.textContent = compChoice;
    };
};