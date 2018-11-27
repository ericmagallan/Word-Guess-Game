// Global Variables

// ================================================================
//Arrays and Variables for holding data
var wordOptions = [" bride", "groom", "vows", "bouquet", "veil", "wedding ring", "boutonniere", "tissues"];
var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;

// Functions ()
// ================================================================
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    numBlanks = lettersInWord.length;

    // Reset each round
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // Populate blanks and successes with right number of blanks
    for (var i=0; i=0 i = numBlanks)
    

    // Testing/Debugging
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

    

}

// Main Process

// ================================================================
startGame();