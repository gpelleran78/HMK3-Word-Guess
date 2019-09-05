// alert('You have 10 guesses. Guess 1-10');

// var answer = 3;
// var guess = prompt("Whats your guess?");

// for (i = 0; i < 10; i++) {
//     if (answer == guess) {
//         alert("You guessed correctly");
//         break;
//     }
//     else {
//         guess = prompt("Please Try Again");
//     }
// };
//========Global============
var wordBank = ['Joker','Harley-Quinn','BatMan','Wonder-Woman',"Flash"];
var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScore = [];
var randWord;

//======Function==========
function startGame(){

    //random word generator
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    for (var i = 0; i < randWord.length; i++);
    {

    }
    console.log(randWord);
   
}


startGame();