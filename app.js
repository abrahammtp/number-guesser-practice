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
    winningNumber = 5,
    guessesLeft = 3;

// UI Elements
const UIgame = document.querySelector("#game"),
      UIminNum = document.querySelector(".min-num"),
      UImaxNum = document.querySelector(".max-num"),
      UIguessBtn = document.querySelector("#guess-btn"),
      UIguessImput = document.querySelector("#guess-input"),
      UImessage = document.querySelector(".message");

// Assign UI min and max numbers
UIminNum.textContent = min;
UImaxNum.textContent = max;

