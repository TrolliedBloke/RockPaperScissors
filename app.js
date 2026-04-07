function getComputerChoice() {
  return Math.floor(Math.random() * 3);
}
console.log(getComputerChoice());

function getHumanChoice() {
  return parseInt(prompt("Rock(0) | Paper(1) | Scissors(2)"));
}
console.log(getHumanChoice());
