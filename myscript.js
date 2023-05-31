    // //create a new element for player score in the DOM, then add content
    // let playerScore = document.createElement('div');
    // let playerPoints = 0;
    // playerScore.innerText = playerPoints;

    // //append the element to the DOM
    // let parentOfPlayerScore = document.getElementById('parent1');
    // parentOfPlayerScore.appendChild(playerScore);

    // //create a new element for computer score in the DOM, then add content
    // let computerScore = document.createElement('div');
    // let computerPoints = 0;
    // computerScore.innerText = computerPoints;

    // //append the element to the DOM
    // let parentOfComputerScore = document.getElementById('parent2');
    // let computerScoreElement = document.getElementById('computer-score');
    // parentOfComputerScore.insertBefore(computerScore, computerScoreElement);

    playerScore = 0;
    computerScore = 0;

    playerScoreContainer = document.getElementById('player-score');
    computerScoreContainer = document.getElementById('computer-score');

    playerScoreContainer.innerText = playerScore;
    computerScoreContainer.innerText = computerScore;

    resultContainer = document.getElementById('result');

    
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
                updateResult(`IT'S A DRAW!`);
            }
    
            // Rock vs Paper
            else if ((playerSelection == 'Rock') && (computerSelection == 'Paper')) {
                updateResult('Paper beats Rock. Computer Wins!');
                updateScore(true);
            }
    
            else if ((playerSelection == 'Paper') && (computerSelection == 'Rock')) {
                updateResult('Paper beats Rock. Human Wins!');
                updateScore(false);
            }
    
            // Rock vs Scissors
            else if ((playerSelection == 'Rock') && (computerSelection == 'Scissors')) {
                updateResult('Rock beats Scissors. Human Wins!');
                updateScore(false);
            }
    
            else if ((playerSelection == 'Scissors') && (computerSelection == 'Rock')) {
                updateResult('Rock beats Scissors. Computer Wins!');
                updateScore(true);
            }
    
            // Scissors vs Paper
            else if ((playerSelection == 'Scissors') && (computerSelection == 'Paper')) {
                updateResult('Scissors beats Paper. Human Wins!');
                updateScore(false);
            }
    
            else if ((playerSelection == 'Paper') && (computerSelection == 'Scissors')) {
                updateResult('Scissors beats Paper. Computer Wins!');
                updateScore(true);
                
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

        function updateScore(didComputerWin) {
            if(didComputerWin) {
                computerScore++;
                computerScoreContainer.innerText = computerScore;
            } else {
                playerScore++;
                playerScoreContainer.innerText = playerScore;
            }
        }

    function updateResult(message) {
        resultContainer.innerText = message;
    }
           