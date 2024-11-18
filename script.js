function getComputerChoice(min, max) {
    if (isGameOver) return computerSelection;

    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    const ComputerNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    if (ComputerNumber === 0) {
        return "Rock";
    } else if (ComputerNumber === 1) {
        return "Scissors";
    } else
        return "Paper";

}
let humanScore = 0;
let computerScore = 0;
let isGameOver = false;

function playRound(humanChoice, computerChoice) {
    if (isGameOver) return;
     
    if (humanChoice === computerChoice) {
        roundResult.textContent = `Your choice (${humanChoice}) and the computers choice (${computerChoice}) are the same! Try again!`;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        roundResult.textContent = "Rock beats Scissors! You Win!";
        return humanScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        roundResult.textContent = "Paper beats Rock! You Lose!";
        return computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        roundResult.textContent = "Rock beats Scissors! You Lose!";
        return computerScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        roundResult.textContent = "Scissors beats Paper! You win!";
        return humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        roundResult.textContent = "Paper beats Rock! You win!";
        return humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        roundResult.textContent = "Scissors beats Paper! You lose!";
        return computerScore++;
    }
}

const picks = document.createElement("div");
picks.setAttribute("style", "color: blue; background:grey; margin: 20px;");
picks.textContent = "Picks:";
document.body.appendChild(picks);

let humanPick = document.createElement("p");
humanPick.textContent = "You: "
picks.appendChild(humanPick);

let computerPick = document.createElement("p");
computerPick.textContent = "Computer: "
picks.appendChild(computerPick);

let roundResult = document.createElement("p");
picks.appendChild(roundResult);

const score = document.createElement("div");
score.setAttribute("style", "color: blue; background:grey; margin: 20px;");
score.textContent = "Score:";
document.body.appendChild(score);

let humanResult = document.createElement("p");
humanResult.textContent = "You: "
score.appendChild(humanResult);

let computerResult = document.createElement("p");
computerResult.textContent = "Computer: "
score.appendChild(computerResult);


const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let computerSelection = getComputerChoice(0, 2);
        playRound(button.id, computerSelection);
        console.log(computerSelection);
        console.log(humanScore);
        console.log(computerScore);

        humanPick.textContent = `You: ${button.id}`;
        computerPick.textContent = `Computer: ${computerSelection}`;
        humanResult.textContent = `You: ${humanScore}`;
        computerResult.textContent = `Computer: ${computerScore}`;

        if (humanScore === 5 || computerScore === 5) {
            isGameOver = true;
            if (!document.querySelector("#gameResult")) {
            if (humanScore === 5) {
                const humanWins = document.createElement("p");
                humanWins.setAttribute("id", "gameResult");
                humanWins.setAttribute("style", "color:blue; background:grey; margin: 20px; padding: 20px; text-align:center; font-size: 24px");
                humanWins.textContent = "Congratulations! You Won!"
                document.body.appendChild(humanWins);
                // alert("Congratulations! You won the game!");
            } else if (computerScore === 5) {
                const computerWins = document.createElement("p");
                computerWins.setAttribute("id","gameResult");
                computerWins.setAttribute("style", "color:blue; background:grey; margin: 20px; padding: 20px; text-align:center; font-size: 24px");
                computerWins.textContent = "Sorry! Computer Wins.";
                document.body.appendChild(computerWins);
                // alert("Game Over! The computer won the game!");
            }

}}});
});



