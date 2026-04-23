let computerScore = 0;
let humanScore = 0;

// Math.random and Math.floor to generate an
// index number between 0 and 2 for rock paper or scissors
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

const buttons = document.querySelectorAll("#game-controls button");
const clearButton = document.getElementById("reset-button");

// adding even listeners to each gameplay button
// every time a button is clicked the winCondition function
// is used.
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.innerText.toLowerCase();
    const computerChoice = getComputerChoice();
    winCondition(userChoice, computerChoice);
  });
});

// button to clear scores for computer and human back to 0
clearButton.addEventListener("click", () => {
  computerScore = 0;
  humanScore = 0;
  scoreboard.innerText = `USER: ${humanScore} | COMPUTER: ${computerScore}`;
});

// checks the win conditions set for a regular
// Rock Paper Scissors game.
function winCondition(user, computer) {
  const scoreboard = document.getElementById("scoreboard");

  const gameState = document.getElementById("game-state");

  if (user === computer) {
    gameState.innerText = "It's a Tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    humanScore++;
    gameState.innerText = "User Wins!";
  } else {
    computerScore++;
    gameState.innerText = "Computer Wins... :(";
  }

  // update the scoreboard for the user display.
  scoreboard.innerText = `USER: ${humanScore} | COMPUTER: ${computerScore}`;
}
