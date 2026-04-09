/*
let humanScore = 0;
let computerScore = 0;

// Math.random function in order to get random choice from array choices (rock, paper, or scissors)
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
// function to get human choice through the console using prompt and returning the user's choice
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase();
}
// function to simulate logic between which choice beats which
function playRound(humanChoice, computerChoice) {
  // fail safe to make sure user inputs a valid choice for the game
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    console.log("Invalid Input");
    return;
  }
  // if human choice = computer choice it's a tie and no one gets a point
  if (humanChoice == computerChoice) {
    console.log(`It's a Tie! You Both Chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(`You Win! ${humanChoice} Beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You Lose! ${computerChoice} Beats ${humanChoice}`);
  }
}
// function that runs the game and also keeps track of score
function playGame() {
  humanScore = 0;
  computerScore = 0;

  // after game is done / final loading screen
  console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You Win the Game!");
  } else if (computerScore > humanScore) {
    console.log("You Lose the Game!");
  } else {
    console.log("What a Great Tie!");
  }
}

playGame();
*/

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons button");
const resultDiv = document.getElementById("result");
const scoreDiv = document.getElementById("score");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    playGame(playerChoice);
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) return "Tie!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  }
  return "computer";
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = determineWinner(playerChoice, computerChoice);

  let resultText = `You chose ${playerChoice}, computer chose ${computerChoice}.`;

  if (result === "player") {
    playerScore++;
    resultText += "You Win!";
  } else if (result === "computer") {
    computerScore++;
    resultText += "Computer Wins!";
  } else {
    resultText += "It's a tie!";
  }

  resultDiv.textContent = resultText;
  scoreDiv.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
