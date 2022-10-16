// nested if else;

// we create a small Game;

let winningGame = 19;
// we have take the input user from prompt;
// And prompt only takes the input in "string"
// But if you want it in the number datatype then put the + at the start of the prompt;

let userGuess = +prompt("Guess a number");
console.log(typeof userGuess, userGuess);

if (userGuess === winningGame) {
    console.log("Your Guess is right !!!");
}
else{
    if (userGuess < winningGame) {
        console.log("Number too low !!!");
    }
    else{
        console.log("Number too high !!!");
    }
}