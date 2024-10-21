const userInput = document.querySelector(".user-input");
const submitBtn = document.querySelector(".submit-btn");
const startBtn = document.querySelector(".start-game");
const massage = document.querySelector(".message");
const allGuesses = document.querySelector(".all-guesses");
const startGameBtn = document.querySelector(".start-game");



(function () {
    let allGuessesArr = [];

    const form = document.querySelector("form");

    let randomNumber = Math.floor(Math.random() * 100) + 1;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let userGuess = parseInt(userInput.value);
        if (userGuess == randomNumber) {
            massage.innerText = "You got it! congratulation 🎉🎊 !!";
            startGameBtn.disabled = false;
            submitBtn.disabled = true;

        }
        else if (userGuess > randomNumber) {
            massage.innerText = "To High!";
        }
        else if (userGuess < randomNumber) {
            massage.innerText = "To Lower!";
        }
        allGuessesArr.push(userGuess);
        allGuesses.innerText = "Your guesses: " + allGuessesArr.join(",");
        form.reset();
    });

    startGameBtn.addEventListener("click", () => {
        massage.innerText = "";
        allGuesses.innerText = "";
        startGameBtn.disabled = true;
        submitBtn.disabled = false;
        allGuessesArr = [];
        randomNumber = Math.floor(Math.random() * 100) + 1;
    });
})();