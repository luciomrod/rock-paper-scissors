console.log('Hola Mundo!')

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

console.log(getComputerChoice());

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();

    while (!choices.includes(choice)) {
        choice = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors':").toLowerCase();
    }

    return choice;
}
console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

console.log("Initial Scores:");
console.log("Human: " + humanScore);
console.log("Computer: " + computerScore);

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    // Make the human choice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice);
        humanScore++;
    } else {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice);
        computerScore++;
    }

    // Log the current scores
    console.log("Scores:");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);
}


// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get the human's choice
function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("Please enter your choice (rock, paper, or scissors):").toLowerCase();

    while (!choices.includes(choice)) {
        choice = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors':").toLowerCase();
    }

    return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both chose " + humanChoice);
        return "tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1) + " beats " + computerChoice);
        return "human";
    } else {
        console.log("You lose! " + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1) + " beats " + humanChoice);
        return "computer";
    }
}

// Function to play the entire game
function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    // Play 5 rounds
    for (let round = 1; round <= 5; round++) {
        console.log("Round " + round);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        const result = playRound(humanChoice, computerChoice);

        if (result === "human") {
            humanScore++;
        } else if (result === "computer") {
            computerScore++;
        }

        console.log("Scores after Round " + round + ":");
        console.log("Human: " + humanScore);
        console.log("Computer: " + computerScore);
        console.log("-----------------------");
    }

    if (humanScore > computerScore) {
        console.log("You are the overall winner! Final Score - Human: " + humanScore + ", Computer: " + computerScore);
    } else if (computerScore > humanScore) {
        console.log("The computer is the overall winner! Final Score - Human: " + humanScore + ", Computer: " + computerScore);
    } else {
        console.log("The game is a tie! Final Score - Human: " + humanScore + ", Computer: " + computerScore);
    }
}

playGame();
