
const secret = Math.floor(Math.random() * 100) + 1;

let guess;             
let attempts = 0;        

while (guess !== secret) {
  guess = Number(prompt("Guess a number between 1 and 100:"));
  attempts++;

  if (guess > secret) {
    alert("Too high! Try again.");
  } else if (guess < secret) {
    alert("Too low! Try again.");
  } else {
    alert(`🎉 Correct! You guessed ${secret} in ${attempts} tries.`);
  }
}
