"use strict";

// Rock Paper Scissors

// Get Computer choice
const getComputerChoice = function () {
  return Math.trunc(Math.random() * 3) + 1;
};

// Get player choice
const getPlayerChoice = function () {
  while (true) {
    let playerChoice = prompt(
      "Enter your choice between Rock, Paper, or Scissors: "
    ).toLowerCase();
    if (playerChoice === "rock") return 1;
    else if (playerChoice === "paper") return 2;
    else if (playerChoice === "scissors") return 3;
    else alert("Invalid choice. Please enter 'rock', 'paper', or 'scissors'.");
  }
};

// Game
const play = function (computerChoice, playerChoice) {
  let choice;
  let choiceList = ["Rock", "Paper", "Scissors"];

  if (playerChoice === computerChoice) {
    return `Draw! ${choiceList[playerChoice - 1]} and ${
      choiceList[computerChoice - 1]
    }`;
  } else if (
    (playerChoice === 1 && computerChoice === 3) ||
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 3 && computerChoice === 2)
  ) {
    choice = `YOU WIN! ${choiceList[playerChoice - 1]} beats ${
      choiceList[computerChoice - 1]
    }`;
  } else {
    choice = `YOU LOSS! ${choiceList[computerChoice - 1]} beats ${
      choiceList[playerChoice - 1]
    }`;
  }
  return choice;
};

// Get player and computer choices
let computerChoice = getComputerChoice();
console.log("Computer choice:", computerChoice);

let playerChoice = getPlayerChoice();
console.log("Player choice:", playerChoice);

// Play the game
let playGame = play(computerChoice, playerChoice);
console.log(playGame);
