const game = {
  1: "scissors",
  2: "paper",
  3: "rock",
};

let computerScore = 0;
let playerScore = 0;
let computer = "";
let player = "";

let computerPlay = function () {
  let random = Math.floor(Math.random() * 3 + 1);
  computer = game[random];
};

let playerSelection = function () {
  player = prompt("scissors, paper or rock?").toLowerCase();
};

let fullGame = function () {
  for (let i = 0; i < 5; i++) {
    computerPlay();
    playerSelection();
    if (computer === player) {
      console.log(`Round ${i + 1}: DRAW ${computer} - ${player} - Play again!`);
    } else if (
      (computer === "scissors" && player === "rock") ||
      (computer === "rock" && player === "paper") ||
      (computer === "paper" && player === "scissors")
    ) {
      playerScore++;
      console.log(`Round ${i + 1}: YOU WIN! ${player} beats ${computer} 🥳`);
    } else {
      computerScore++;
      console.log(
        `Round ${i + 1}: YOU LOSE! ${computer} beats ${player}. Try again! 💁`
      );
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
