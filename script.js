let player = "";
let computer = "";

let computerPlay = function () {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random === 1) {
    computer = "Scissor";
    return random;
  } else if (random === 2) {
    computer = "Paper";
    return random;
  } else {
    computer = "Rock";
    return random;
  }
};

console.log(`computerPlay = ${computerPlay()}`);

let playerSelection = function () {
  player = prompt("Scissor, Paper or Rock?").toLowerCase();
  if (player === "scissor") {
    return 1;
  } else if (player === "paper") {
    return 2;
  } else {
    return 3;
  }
};

console.log(`playerSelection = ${playerSelection()}`);

let playRound = function (computerPlay, playerSelection) {
  console.log(computerPlay);
  console.log(playerSelection);
};

console.log(computerPlay === playerSelection, playRound());
