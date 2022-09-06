const win = 'Human Win';
const lose = 'Computer Win';

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const resetBtn = document.getElementById('resetBtn');
const displayResult = document.getElementById('displayResult');
const displayScore = document.getElementById('displayScore')
const displayHumanScore = document.getElementById('displayHumanScore');
const displayComputerScore = document.getElementById('displayComputerScore')
const displayBattle = document.getElementById('displayBattle');
const modal = document.getElementById('myModal');

let humanScore = 0
let computerScore = 0

let playerSelection;
let computerSelection;

function getComputerChoice() {
    function randomNumber() {
        return Math.floor(Math.random() * (3-0) + 0);
    }
    const randomChoice = ['rock','paper','scissor'];
    return randomChoice[randomNumber()];
}

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    paperBtn.classList.remove('activeBtn');
    scissorBtn.classList.remove('activeBtn');
    rockBtn.classList.add('activeBtn');
    playRound();
    renderScore();
    winner()
})

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    rockBtn.classList.remove('activeBtn');
    scissorBtn.classList.remove('activeBtn');
    paperBtn.classList.add('activeBtn');
    playRound();
    renderScore();
    winner()
})

scissorBtn.addEventListener('click', () => {
    playerSelection = 'scissor';
    rockBtn.classList.remove('activeBtn');
    paperBtn.classList.remove('activeBtn');
    scissorBtn.classList.add('activeBtn');
    playRound();
    renderScore();
    winner()
})

resetBtn.addEventListener('click', () => {
    window.location.reload();
})

function playRound() {
    
    computerSelection = getComputerChoice();

    if (playerSelection === 'rock' && computerSelection === 'paper'){
        console.log('Lose, Paper beat Rock');
        displayBattle.textContent = 'Paper beat Rock'
        computerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        console.log('Win, Rock beat Scissor');
        displayBattle.textContent = 'Rock beat Scissor';
        humanScore++;

    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        console.log('Win, Paper beat Rock');
        displayBattle.textContent = 'Paper beat Rock';
        humanScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        console.log('Lose, Scissor beat Paper');
        displayBattle.textContent = 'Scissor beat Paper'
        computerScore++;

    } else if (playerSelection === 'scissor' && computerSelection === 'rock'){
        console.log('Lose, Rock beat Scissor');
        displayBattle.textContent = 'Rock beat Scissor'
        computerScore++;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper'){
        console.log('Win, Scissor beat Paper');
        displayBattle.textContent = 'Scissor beat Paper'
        humanScore++;
    } else {
        console.log('Tie, ' + playerSelection +' vs '+ computerSelection)
        displayBattle.textContent = 'Draw'
    }
}

function renderScore() {
    displayHumanScore.textContent = humanScore;
    displayComputerScore.textContent = computerScore;
}

function winner() {
    if (humanScore === 5 || computerScore === 5){
        if (humanScore > computerScore){
            displayResult.textContent = win;
        }else {
            displayResult.textContent = lose;
        }
        endGame();
    }
}

function endGame() {
    modal.style.display = "block";
}




renderScore();