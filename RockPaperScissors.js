const MOVES = ["ROCK", "PAPER", "SCISSORS"];

function computerPlay() {
    let index = Math.floor(Math.random() * 3);
    return MOVES[index];
}

function playerMoves() {
    let playerMove = prompt("What's your move?");
    for (const move of MOVES) {
        if (playerMove.toUpperCase() === move) {
            return move;
        }
    }
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "ROCK":
            if (computerSelection === "PAPER") {
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection === "SCISSORS") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return "It's a tie!";
            }

        case "PAPER":
            if (computerSelection === "SCISSORS") {
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection === "ROCK") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return "It's a tie!";
            }

        case "SCISSORS":
            if (computerSelection === "ROCK") {
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            } else if (computerSelection === "PAPER") {
                return `You win! ${playerSelection} beats ${computerSelection}`;
            } else {
                return "It's a tie!";
            }

        default:
            alert("Something went wrong! Please try again. :(")
            break;
    }
}

function game(rounds) {

    let playerWins = 0, computerWins = 0;

    for (let i = 1; i <= rounds; i++) {
        let result = playRound(playerMoves(), computerPlay())
        if (result.includes("win")) {
            playerWins++;
        } else if (result.includes("lose")) {
            computerWins++;
        } else {
            playerWins++;
            computerWins++;
        }
    }
    return [playerWins, computerWins];
}

let RPSGame = game(parseInt(prompt("How many games of Rock Paper Scissors?")));
if (RPSGame[0] > RPSGame[1]) {
    console.log("You win!");
} else {
    console.log("You lose!");
}
