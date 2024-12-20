let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;

function guessTheNumber() {
    tries = tries + 1;
    displayTries.innerHTML = 'Versuche: ' + tries;
    displayBevor.innerHTML = displayBevor.innerHTML + myNumber.value + ' , ';
    if(numberToGuess == myNumber.value) {
        headline.innerHTML = 'Du hast gewonnen!!! 🥳🎉';
        let jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
    }
    
    if(numberToGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl ist größer!';
    }

    if(numberToGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner!';
    }
    myNumber.value = '';
}

function resetGame() {
    numberToGuess = Math.round(Math.random() * 100);
    tries = 0;
    displayTries.innerHTML = 'Versuche: ' + tries;
    displayBevor.innerHTML = 'Zuvor geratene Zahl: ';
    headline.innerHTML = 'Errate die Zahl zwischen 0 und 100!';
}