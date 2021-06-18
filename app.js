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
    //disable input
    guessInput.disabled = true;
    //change border color to green
    guessInput.style.borderColor = "green";
    //set message
    setMessage(`${winningNum} is correct! YOU WIN!`, "green");
  } else {
    //change border color to green
    guessInput.style.borderColor = "red";
    //set message
    setMessage(`${guessInput.value} is incorrect! TRY AGAIN!`, "red");
  }
});
// Set Message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
