/* GAME FUNCTION
- The player must guess a number between a min and a max
- The player gets a certain number of guesses
- The player must be notified of how many guesses remain
- Notify the player of the correct answer if they loose
- Let the player choose to play again
*/

// Game Values
let min = 1,
    max = 10,
    winningNumber = getRandomNum(min, max),
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector("#game"),
      UIminNum = document.querySelector(".min-num"),
      UImaxNum = document.querySelector(".max-num"),
      UIguessBtn = document.querySelector("#guess-btn"),
      UIguessInput = document.querySelector("#guess-input"),
      UImessage = document.querySelector(".message");

// Assign UI min and max numbers
UIminNum.textContent = min;
UImaxNum.textContent = max;

// Play again event listener
UIgame.addEventListener("mousedown", function(e) {
    if(e.target.className === "play-again"){
        window.location.reload();
    }
});


// Listen for guess
UIguessBtn.addEventListener("click", function() {
    let guess = parseInt(UIguessInput.value);
    console.log(guess);
    // Validate input
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}.`, "green");
    }

    // Check if the user won
    if(guess === winningNumber) {
        // Game over - won

        gameOver(true, `${winningNumber} is correct. Congratulations!`);
    } else {
        // Wrong number
        guessesLeft -= 1;
        if(guessesLeft === 0) {
            // Game over - lost

            gameOver(false, `Game over, you don't have any guesses left. The correct number was ${winningNumber}.`);
        } else {
            // Game continues - answer wrong

            // Clear input
            UIguessInput.value = "";
            // Make border red to show their guess was incorrect
            UIguessInput.style.borderColor = "red";
            // Let user know they have lost
            setMessage(`${guess} is incorrect. You have ${guessesLeft} guesses left`, "red");
        }
    }
});

// Game over
function gameOver(won, msg) {  
    let color;
    won === true ? color = "green" : color = "red";

    // Disable input field
    UIguessInput.disabled = true;
    // Make border green to show they have won
    UIguessInput.style.borderColor = color;
    // Set text color to green
    UImessage.style.color = color;
    // Let user know they have won
    setMessage(msg);

    // Play again
    UIguessBtn.value = "Play Again";
    UIguessBtn.className += "play-again";
};

// Winning number
function getRandomNum(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
};

// Set message
function setMessage(msg, color) {
    UImessage.style.color = color;
    UImessage.textContent = msg;
};