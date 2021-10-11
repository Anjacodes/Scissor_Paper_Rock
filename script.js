const game = {
  1: "scissors",
  2: "paper",
  3: "rock",
};

let computerScore = 0;
let playerScore = 0;
let computer = "";
let player = "";

const computerPlay = function () {
  let random = Math.floor(Math.random() * 3 + 1);
  computer = game[random];
};

let playerSelection = function () {
  player = prompt("scissors, paper or rock?").toLowerCase();
};

const fullGame = function () {
  for (let i = 0; i < 5; i++) {
    computerPlay();
    playerSelection();
    if (computer === player) {
      console.log(`Round ${i + 1}: DRAW ${computer} : ${player}`);
    } else if (
      (computer === "scissors" && player === "rock") ||
      (computer === "rock" && player === "paper") ||
      (computer === "paper" && player === "scissors")
    ) {
      playerScore++;
      console.log(`Round ${i + 1}: YOU WIN! ${player} beats ${computer} 🥳`);
    } else {
      computerScore++;
      console.log(`Round ${i + 1}: YOU LOSE! ${computer} beats ${player} 💁`);
    }
  }
  if (computerScore === playerScore) {
    console.log(
      `Game over! Draw ${computerScore} : ${playerScore} - try again!`
    );
  } else
    computerScore > playerScore
      ? console.log(`Game over! You lose ${computerScore} : ${playerScore}`)
      : console.log(`Game over! You win ${playerScore} : ${computerScore}`);
};

fullGame();
