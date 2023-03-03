let secretNumber = Math.floor(Math.random() * 100) + 1;
let prevDifference = 100; // initial value larger than maximum possible difference
let guessCount = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guess").value);
  if (guess && guess >= 1 && guess <= 100) { // check if input is valid
    guessCount++;
    let difference = Math.abs(guess - secretNumber);
    let message = "";
    if (guess === secretNumber) {
      message = `Congratulations! You guessed the number in ${guessCount} tries.`;
    } else if (guessCount === 1) {
      message = `Wrong guess. Try again.`
    } else if (difference < prevDifference) {
      message = `Getting hotter. Guess ${guess > secretNumber ? "lower" : "higher"}.`;
    } else {
      message = `Getting colder. Guess ${guess > secretNumber ? "higher" : "lower"}.`;
    }
    prevDifference = difference;
    document.getElementById("response").textContent = message;
  } else {
    document.getElementById("response").textContent = "Please enter a valid number between 1 and 100.";
  }
}


