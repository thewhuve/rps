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
    if (choice === null) {
        console.log("Game cancelled.");
        return null;
    }
    return choice.toLowerCase();
}

function playRound(humanSelection, computerSelection) {
    if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")) {
        humanScore++;
        console.log("You win! " + humanSelection + " beats " + computerSelection + ".");
    } 
    else if (humanSelection === computerSelection) {
        console.log("It's a tie! You both chose " + humanSelection + ".");
    } 
    else {
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
    }
}

const body = document.querySelector("body");
const scoreDiv = document.createElement("div");
scoreDiv.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;

const rockbtn = document.createElement("button");
rockbtn.innerText = "rock";
const paperbtn = document.createElement("button");
paperbtn.innerText = "paper";
const scissorsbtn = document.createElement("button");
scissorsbtn.innerText = "scissors";

rockbtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice(); playRound("rock", computerSelection);
    scoreDiv.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;
    if (humanScore === 5) {
        alert("You reached 5 points! You win the game!");
        humanScore = 0;
        computerScore = 0;
        scoreDiv.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;
    }
});
paperbtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice(); playRound("paper", computerSelection);
    scoreDiv.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;
    if (humanScore === 5) {
        alert("You reached 5 points! You win the game!");
        humanScore = 0;
        computerScore = 0;
        scoreDiv.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;
    }
});
scissorsbtn.addEventListener("click", () => {
    const computerSelection = getComputerChoice(); playRound("scissors", computerSelection);
    scoreDiv.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;
    if (humanScore === 5) {
        alert("You reached 5 points! You win the game!");
        humanScore = 0;
        computerScore = 0;
        scoreDiv.innerText = `Score: You ${humanScore} - ${computerScore} Computer`;
    }
});

body.appendChild(rockbtn);
body.appendChild(paperbtn);
body.appendChild(scissorsbtn);
body.appendChild(scoreDiv);