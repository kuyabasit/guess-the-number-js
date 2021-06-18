// Game values
let min = 1,
  max = 10,
  winningNum = 2,
  guessesLeft = 3;

//UI el
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

// assign ui min and max
minNum.textContent = min;
maxNum.textContent = max;

// listen for guess
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}.`, "red");
  }
  // CHeck if won
  if (guess === winningNum) {
    // Game Over - won
    gameOver(true, `${winningNum} is correct, YOU WIN!`);
  } else {
    //Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      //Game Over - lost
      gameOver(
        false,
        `Game Over, you lost. The correct number was ${winningNum}!`
      );
    } else {
      // Game continues -- answer wrong

      //change border color to red
      guessInput.style.borderColor = "red";

      // Clear Input
      guessInput.value = "";

      // TEll user its wrong number
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
    }
  }
});
// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  //disable input
  guessInput.disabled = true;
  //change border color
  guessInput.style.borderColor = color;
  message.style.color = color;
  //set message
  setMessage(msg);
}
