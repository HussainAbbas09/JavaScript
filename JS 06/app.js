let random = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
for (let i = 1; i <= attempts; i++) {
let guess = Number(prompt("Guess a number between 1 and 10"));
if (guess === random) {
    alert("You guessed it");
    break;
} else if (guess > random) {
    alert("Too High!");
} else {
    alert("Too Low!");
}
if (i === attempts) {
    alert("The number was " + random);
}
}