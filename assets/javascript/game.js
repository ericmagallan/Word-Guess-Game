// Global Variables. Basically that will house some of the variables used within the game.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Arrays and Variables for holding data. Another area that will house more variables and lists for the game.
var wordOptions = [" bride", "groom", "vows", "bouquet", "veil", "wedding ring", "boutonniere", "tissues"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 6;

// Essential Functions (Reusable code that will be utilized multiiple times throughout the game
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // Reset each round
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks
    for (var i = 0; i = numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }


    // Testing/Debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);



}

// Main Process aka the nitty gritty
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
startGame();