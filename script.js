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
console.log(getComputerChoice(0,2));

function getHumanChoice() {
    let HumanChoice = prompt("Rock, Paper, or Scissors?");

    if (HumanChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (HumanChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else if (HumanChoice.toLowerCase() === "paper") {
        return "paper";
    } else
        return "Not a valid choice";

    }

    console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;



