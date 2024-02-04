
    const choices = ["lion", "elephant", "snake"];
    const playerDisplay = document.getElementById("playerDisplay");
    const computerDisplay = document.getElementById("computerDisplay");
    const resultDisplay = document.getElementById("resultDisplay");
    const playerScoreDisplay = document.getElementById("playerScoreDisplay");
    const computerScoreDisplay = document.getElementById("computerScoreDisplay");
    const resetBtn = document.getElementById("resetBtn");
   

    let playerScore = 0;
    let computerScore = 0;

    function playGame(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = "";

        if (playerChoice === computerChoice) {
            result = "IT'S A TIE";
        } else {
            switch (playerChoice) {
                case "lion":
                    result = (computerChoice === "elephant") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "elephant":
                    result = (computerChoice === "snake") ? "YOU WIN!" : "YOU LOSE!";
                    break;
                case "snake":
                    result = (computerChoice === "lion") ? "YOU WIN!" : "YOU LOSE!";
                    break;
            }
        }

        playerDisplay.textContent = `Player: ${playerChoice}`;
        computerDisplay.textContent = `Computer: ${computerChoice}`;
        resultDisplay.textContent = result;

        resultDisplay.classList.remove("greenText", "redText");

        switch (result) {
            case "YOU WIN!":
                resultDisplay.classList.add("greenText");
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                break;
            case "YOU LOSE!":
                resultDisplay.classList.add("redText");
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                break;
        }
    }

    function reset() {
        playerScore = 0;
        computerScore = 0;
        playerScoreDisplay.textContent = playerScore;
        computerScoreDisplay.textContent = computerScore;
        resultDisplay.textContent = "";
    }

    function displayInfo() {
        var text = document.getElementById("textField");
        text.style.display = "block";
      }

      function hideInfo() {
        var text = document.getElementById("textField");
        text.style.display = text.style.display === "none" ? "block" : "none";
    }

    function goToHomePage() {
        window.location.href = "index.html";
    }
    
    
  
    