const randomNumber = Math.floor(Math.random() * 100) + 1; // generates a random number between 1 and 100
const output = document.getElementById("respond");
const guessInput = document.getElementById("guess");

function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  if (userGuess === randomNumber) {
    output.innerHTML = "Congratulations! You guessed the correct number!";
  } else if (userGuess > randomNumber) {
    output.innerHTML = "Hotter";
  } else {
    output.innerHTML = "Colder!";
  }
}
