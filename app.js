let userScore = 0;
let compScore = 0;

let Choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userValue = document.querySelector("#User-Score");
let CompValue = document.querySelector("#Comp-Score");

Choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let UserChoice = choice.getAttribute("id");
    playGame(UserChoice);
  });
});

const playGame = (userInput) => {
  compChoice = compInput();
  let userWin = true;
  //console.log(userInput + "\n" + compChoice);
  if (compChoice === userInput) {
    gameDraw();
  } else {
    if (userInput === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userInput === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userInput, compChoice);
  }
};

const showWinner = (userWin, userInput, compChoice) => {
  if (userWin) {
    userScore++;
    userValue.innerText = userScore;
    msg.innerText = `You win! Your ${userInput} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    CompValue.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userInput}`;
    msg.style.backgroundColor = "red";
  }
};
const compInput = () => {
  const arr = ["rock", "paper", "scissors"];
  const compChoice = Math.floor(Math.random() * 3);
  return arr[compChoice];
};

const gameDraw = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};
