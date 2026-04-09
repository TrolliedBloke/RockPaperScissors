let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    humanChoice != "rock" &&
    humanChoice != "paper" &&
    humanChoice != "scissors"
  ) {
    console.log("Invalid Input");
    return;
  }
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

function playGame() {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

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
