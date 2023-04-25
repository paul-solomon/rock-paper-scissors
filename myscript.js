// create the getComputerChoice function that:
// 1 - generates a random number between 0 and 1
// 2 - rounds up the number, so the random output will be between 0 and 10
// 3 - makes the decision to choose either Rock / Paper / Scissors, based on 3 different intervals
// 4 - returns & logs a single value into function decideTheWinner, which compares it with the user's choice

// 1 - create the function decideTheWinner, which:
// 2 - is going to compare user's choice & computer's random choice
// 3 - and display the round result, based on the specified rules (conditions)

function decideTheWinner() {

    let playerSelection = prompt("Choose your weapon!");

    function getComputerChoice() {
        let randomInt = (Math.floor(Math.random() * 10));
        console.log(randomInt);

        if (randomInt <= 3) {
            computerSelection = "Rock";
        }

        else if (randomInt <= 6) {
            computerSelection = "Paper";
        }

        else computerSelection = "Scissors";

        console.log(computerSelection);
        return computerSelection;
        
    }

    getComputerChoice();

    // Equality

    if (playerSelection == computerSelection) {
        alert("It's a DRAW!");
    }

    // Rock vs Paper

    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        alert("Paper beats Rock, Computer wins!");
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Rock") {
        alert("Paper beats Rock, Human wins!");
    }

    // Rock vs Scissors

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Rock") {
        alert("Rock beats Scissors, Computer wins!");
    }

    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "Scissors") {
        alert("Rock beats Scissors, Human wins!");
    }

    // Paper vs Scissors

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "Scissors") {
        alert("Scissors beats Paper, Computer wins!");
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "Paper") {
        alert("Scissors beats Paper, Human wins!");
    }

}

decideTheWinner();