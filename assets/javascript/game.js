// array with all the options
// random selector for the compuer choice
// variables for wins
// variables for losses
// variables for guesses left
//variables to references in the html for display
// key press function
    //determine which key
    //if the key was correct - action
    //if the key was not correct - action
//display user choice
//display computer choice
//diplay win
//display loss
//display tie

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var loss = 0;
var ties = 0;
var guessesLeft = 15;
var yourGuess = [];
var letterIndex = Math.floor(Math.random() * letters.length);
var computerGuess = letters[letterIndex];
console.log(computerGuess);

document.onkeypress = function(event) {

    document.getElementById('guesses').innerHTML = event.key;
    var yourGuess = event.key;

    if(yourGuess === computerGuess){
        wins++;
    }else{
        guessesLeft--;
    }

    if(guessesLeft === 0){
        loss++
    }

    document.getElementById('win-text').innerHTML = "Wins: " + wins;
    document.getElementById('loss').innerHTML = "Losses: " + loss;
    document.getElementById('guesses-left').innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById('guesses').innerHTML = "Guesses: " + yourGuess;
}