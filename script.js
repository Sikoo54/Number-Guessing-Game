let inputNameEl = document.getElementById("inputName");
let playButtonEl = document.getElementById("playButton");
let startButtonEl = document.getElementById("start-btn");
let myName = document.getElementById("myName");
let message = document.getElementById("message-el");
let isAlive = false;

playButtonEl.addEventListener("click", function () {
  nameValue = inputNameEl.value;
  inputNameEl.value = "";
  message.innerHTML =
    "Hello " + nameValue + "!" + "<br/>" + "guess a number between 1 to 100 !";
  let nameCont = document.getElementById("name-container");
  nameCont.style.display = "none";
  let gameCont = document.getElementById("game-container");
  gameCont.style.display = "block";
  isAlive = true;
});

//Game
let guessNumber = Math.floor(Math.random() * 100) + 1;
let answerInput = document.getElementById("answer");
let answerBtn = document.getElementById("answer-btn");
let lives = 8;
let gameLives = document.getElementById("game-lives");

answerBtn.addEventListener("click", function () {
  let answerValue = answerInput.value;
  if (answerValue == guessNumber && isAlive === true) {
    message.textContent = "correct";
    answerBtn.disabled = true;
    let retry = document.getElementById("retry-btn");
    retry.style.display = "block";
    retry.addEventListener("click", function () {
      location.reload();
      let isAlive = false;
      let isWin = true;
    });
  } else if (answerValue < guessNumber) {
    message.textContent = "too low, go higher";
    lives--;
  } else if (answerValue > guessNumber) {
    message.textContent = "too high, go lower";
    lives--;
  }
  if (lives <= 0) {
    message.textContent = "game over";
    answerBtn.disabled = true;
    let retry = document.getElementById("retry-btn");
    retry.style.display = "block";
    retry.addEventListener("click", function () {
      location.reload();
      let isAlive = false;
    });
  }
  gameLives.textContent = "Lives: " + lives;
});
