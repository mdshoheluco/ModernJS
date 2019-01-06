/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessInput = document.querySelector('#guess-input');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// Assign UI min and max num
minNum.textContent = min;
maxNum.textContent = max;

// Play again event handler
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

// Listen for guess
guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }else {
        if(guess === winningNum) {
            gameOver(true, `${winningNum} is correct, YOU WIN!`);
        }else {
            // Wrong number
            guessesLeft -= 1;
            if(guessesLeft === 0) {
                // Game over lost
                gameOver(false, `Game over, you lost. The correct number was ${winningNum}`);
                guessBtn.value = 'Play Again';
            }else {
                setMessage(`Incorrect, you have ${guessesLeft} attempt left.`, 'red');
                guessInput.value = '';
            }
        }
    }
});

// Set Message
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}

// Game over
function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    // Play again
    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

// Get Winning number
function getRandomNum(min, max) {
    return Math.floor(Math.random()* (max-min+1)+min);
}
    