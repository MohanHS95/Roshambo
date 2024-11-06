function getComputerChoice(min,max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const ComputerNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    if (ComputerNumber === 0) {
        return "rock";
    } else if (ComputerNumber === 1) {
        return "scissors";
    } else
        return "paper";
    
}

function getHumanChoice() {
    let HumanChoice = prompt("Lets play 5 rounds. Rock, Paper, or Scissors?");

    if (HumanChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (HumanChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else if (HumanChoice.toLowerCase() === "paper") {
        return "paper";
    } else
        return "Not a valid choice";

    }

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice,computerChoice) {

        if (humanChoice === computerChoice) {
        console.log(`Your choice (${humanChoice}) and the computers choice (${computerChoice}) are the same! Try again!`);
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock beats Scissors! You Win!");
        return humanScore ++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Paper beats Rock! You Lose!");
        return computerScore ++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Rock beats Scissors! You Lose!");
        return computerScore ++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors beats Paper! You win!");
        return humanScore ++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper beats Rock! You win!");
        return humanScore ++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Scissors beats Paper! You lose!");
        return computerScore ++;
        } else
        console.log("Come on, pick one!");

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(0,2);
console.log(computerSelection);

playRound(humanSelection,computerSelection);

const humanSelection2 = getHumanChoice();
const computerSelection2 = getComputerChoice(0,2);
console.log(computerSelection2);

playRound(humanSelection2,computerSelection2);

const humanSelection3 = getHumanChoice();
const computerSelection3 = getComputerChoice(0,2);
console.log(computerSelection3);

playRound(humanSelection3,computerSelection3);

const humanSelection4 = getHumanChoice();
const computerSelection4 = getComputerChoice(0,2);
console.log(computerSelection4);

playRound(humanSelection4,computerSelection4);

const humanSelection5 = getHumanChoice();
const computerSelection5 = getComputerChoice(0,2);
console.log(computerSelection5);

playRound(humanSelection5,computerSelection5);

console.log(humanScore);
console.log(computerScore);

if (humanScore > computerScore) {
    console.log("You've beat the computer. Congratulations!")
} else if (humanScore < computerScore) {
    console.log("Sorry, the computer got you this time. Refresh to try again!")
} else
    console.log("No winner. Try again!")
}

playGame();
