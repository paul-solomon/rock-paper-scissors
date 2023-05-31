    //create a new element for player score in the DOM, then add content
    let playerScore = document.createElement('div');
    let playerPoints = 0;
    playerScore.innerText = playerPoints;

    //append the element to the DOM
    let parentOfPlayerScore = document.getElementById('parent1');
    parentOfPlayerScore.appendChild(playerScore);

    //create a new element for computer score in the DOM, then add content
    let computerScore = document.createElement('div');
    let computerPoints = 0;
    computerScore.innerText = computerPoints;

    //append the element to the DOM
    let parentOfComputerScore = document.getElementById('parent2');
    let computerScoreElement = document.getElementById('computer-score');
    parentOfComputerScore.insertBefore(computerScore, computerScoreElement);
    
        //create a function that gets computer's choice
        function getComputerChoice() {
            let randomInt = (Math.floor(Math.random() * 10));
            console.log(randomInt);
    
            if (randomInt <= 3) {
                computerSelection = 'Rock';
            }
    
            else if (randomInt <= 6) {
                computerSelection = 'Paper';
            }
    
            else computerSelection = 'Scissors';
            
            console.log(computerSelection);
            return computerSelection;
        }
    
        // create a function that takes 2 parameters and plays a round
        function playRound(playerSelection, computerSelection) {          
    
            computerSelection = getComputerChoice();
    
            //DRAW
            if (playerSelection == computerSelection) {
                alert(`IT'S A DRAW!`);
            }
    
            // Rock vs Paper
            else if ((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
                // alert('Paper beats Rock. Computer Wins!');
                keepComputerScore();
            }
    
            else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
                alert('Paper beats Rock. Human Wins!');
            }
    
            // Rock vs Scissors
            else if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
                alert('Rock beats Scissors. Human Wins!');
            }
    
            else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
                // alert('Rock beats Scissors. Computer Wins!');
                keepComputerScore();
            }
    
            // Scissors vs Paper
            else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
                alert('Scissors beats Paper. Human Wins!');
            }
    
            else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
                // alert('Scissors beats Paper. Computer Wins!');
                keepComputerScore();
            }
        }
    
        //add event listeners for each button and get player's choice
        const rockButton = document.querySelector('#rock');
        rockButton.addEventListener('click', () => {
            playRound(playerSelection = 'Rock');
        });
    
        const paperButton = document.querySelector('#paper');
        paperButton.addEventListener('click', () => {
            playRound(playerSelection = 'Paper');
        });
    
        const scissorsButton = document.querySelector('#scissors');
        scissorsButton.addEventListener('click', () => {
            playRound(playerSelection = 'Scissors');
        });

        function keepComputerScore() {
            computerPoints++;
            computerScore.innerText = computerPoints;
        }