const game = {
  1: "scissors",
  2: "paper",
  3: "rock",
};

let computerScore = 0;
let playerScore = 0;

let computerPlay = function () {
  let random = Math.floor(Math.random() * 3 + 1);
  return game[random];
};

let playerSelection = function () {
  player = prompt("scissors, paper or rock?").toLowerCase();
  return player;
};

let playRound = function (computerPlay, playerSelection) {
  if (computerPlay === playerSelection) return "Draw";
  else if (
    (computerPlay === "scissors" && playerSelection === "rock") ||
    (computerPlay === "rock" && playerSelection === "paper")
  )
    return "You win! 🥳";
  else return `You lose, ${computerPlay} beats ${playerSelection} 😒`;
};

let fullGame = function (playRound) {
  if (playRound === "You win! 🥳") playerScore++;
  else if (
    playRound === `You lose, ${computerPlay} beats ${playerSelection} 😒`
  )
    computerScore++;
};

for (let i = 0; i < 5; i++) {
  fullGame(playRound());
}
//   playerScore > computerScore
//     ? alert("You won the game!")
//     : alert("You lost. Refresh to start new round.");

console.log(playRound(computerPlay(), playerSelection()));
