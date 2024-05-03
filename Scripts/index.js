// variables:
const winner = document.getElementById("winner");
let diceNumberP1 = 0;
let diceNumberP2 = 0;
let whoIsPlaying = "";
let scoreSumP1 = 0;
let scoreSumP2 = 0;
let currentScore = 0;
let diceRollScore = 0;

// buttons querry selectors
const newgame = document.querySelector(".newgame");
const roll = document.querySelector(".roll");
const hold = document.querySelector(".hold");

// querry selectors
const diceimg = document.querySelector(".diceimg");
const dice = document.querySelector(".dice");
const current = document.querySelector(".current");
const sp1 = document.querySelector(".sp1");
const sp2 = document.querySelector(".sp2");
const tp1 = document.querySelector(".tp1");
const tp2 = document.querySelector(".tp2");

// Listners
newgame.addEventListener("click", resetGame);
roll.addEventListener("click", diceRoll);
hold.addEventListener("click", diceHold);

function resetGame() {
  winner.textContent = "Pig Game 🐷";
  whoIsPlaying = Math.floor(Math.random() * 2);
  sp1.textContent = "0";
  sp2.textContent = "0";
  scoreSumP2 = 0;
  scoreSumP1 = 0;
  currentScore = 0;
  tp2.classList.add("hidden");
  tp1.classList.add("hidden");
  hideUnhide();
}
function hideUnhide() {
  dice.classList.remove("turn");
  document.getElementById("player1cont").classList.remove("turn");
  document.getElementById("player2cont").classList.remove("turn");
  switch (whoIsPlaying) {
    case 1: // player 2
      document.getElementById("player2cont").classList.add("turn");
      break;
    case 0: // player 1
      document.getElementById("player1cont").classList.add("turn");
      break;
  }
}
function changeTurn() {
  switch (whoIsPlaying) {
    case 1: // player 2
      whoIsPlaying = 0;
      hideUnhide();
      break;
    case 0: // player 1
      whoIsPlaying = 1;
      hideUnhide();
      break;
  }
}
function thereIsAWinner() {
  switch (whoIsPlaying) {
    case 1: // player 2
      winner.textContent = "Player 2 Win!";
      tp2.classList.remove("hidden");
      break;
    case 0: //player 1
      winner.textContent = "Player 1 Win!";
      tp1.classList.remove("hidden");
      break;
  }
}
// btn Roll Handler
function diceRoll() {
  diceRollScore = Math.ceil(Math.random() * 6);
  function currentScoreupdate() {
    if (diceRollScore === 1) {
      changeTurn();
      currentScore = 0;
    } else {
      currentScore = currentScore + diceRollScore;
    }
    current.textContent = currentScore;
  }

  switch (whoIsPlaying) {
    case 1: // player 2
      diceimg.src = "Images/" + diceRollScore + ".png";
      currentScoreupdate();
      break;
    case 0: //player 1
      diceimg.src = "Images/" + diceRollScore + ".png";
      currentScoreupdate();
      break;
  }
}
// btn Hold Handler
function diceHold() {
  if (whoIsPlaying) {
    scoreSumP2 = scoreSumP2 + currentScore;
    sp2.textContent = scoreSumP2;
  } else {
    scoreSumP1 = scoreSumP1 + currentScore;
    sp1.textContent = scoreSumP1;
  }
  currentScore = 0;
  current.textContent = currentScore;
  if (scoreSumP2 >= 50 || scoreSumP1 >= 50) {
    thereIsAWinner();
  } else {
    hideUnhide();
    changeTurn();
  }
}
