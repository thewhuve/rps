let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rand = Math.random();
    if (rand < 0.34) {
        return "rock";
    } else if (rand <= 0.67) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    return choice.toLowerCase();
}

function playRound(humanSelection, computerSelection) {
    if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")) {
        humanScore++;
        console.log("You win! " + humanSelection + " beats " + computerSelection + ".");
    } else if (humanSelection === computerSelection) {
        console.log("It's a tie! You both chose " + humanSelection + ".");
    } else {
        computerScore++;
        console.log("You lose! " + computerSelection + " beats " + humanSelection + ".");
    }
    }

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log("Score: You " + humanScore + " - " + computerScore + " Computer");
    }}

playGame();