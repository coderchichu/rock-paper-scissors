
const VALID = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let draws = 0;
const GAMES = 5;

function playRound(playerSelection) {

    const computerSelection = VALID[Math.floor(Math.random() * 3)];

    console.log("Player: " + playerSelection + " Computer: " + computerSelection)

    if (playerSelection == computerSelection) {
        return draws += 1;

    } else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            return losses += 1;
        } else {
            return wins += 1;
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return losses += 1;
        } else {
            return wins += 1;
        }
    } else {
        if (computerSelection == "rock") {
            return losses += 1;

        } else {
            return wins += 1;
        }

    }
}

function reset() {

    return wins = 0, losses = 0, draws = 0;

}

/*const inGame = true;

while (inGame) {

    if ((wins + losses + draws) == GAMES) {
        console.log(GAMES + " games played. Game over!")
        break;
    }

    const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

    if (VALID.includes(playerSelection)) {
        playRound(playerSelection)
        console.log("Wins:" + wins + " ... Losses: " + losses + " ... Draws:" + draws + " --- Total: " + (wins + losses + draws))
    } else {
        console.log("Invalid word, try again.");

    }

}*/

const btn = document.querySelectorAll('button');

const container = document.querySelector('#container');

const playerWins = document.createElement('div');
playerWins.classList.add('playerWins');
playerWins.textContent = 'Player has: ' + wins;


const compWins = document.createElement('div');
compWins.classList.add('compWins');
compWins.textContent = 'Computer has: ' + losses;

const nill = document.createElement('div');
nill.classList.add('nill');
nill.textContent = 'Draws: ' + draws;


container.appendChild(playerWins);
container.appendChild(compWins);
container.appendChild(nill);

const message = document.createElement('p');
message.classList.add('message');


btn.forEach((button) => {

    button.addEventListener('click', function (e) {

        if (document.getElementsByClassName('message').length == 1) {
            container.removeChild(message);
        }

        playRound(e.target.id);

        playerWins.textContent = 'Player has: ' + wins;
        compWins.textContent = 'Computer has: ' + losses;
        nill.textContent = 'Draws: ' + draws;

        if ((wins == (GAMES)) || (losses == (GAMES))) {

            let winner = (wins > losses) ? "Player" : "Computer";

            message.textContent = 'Game over! It was the first to ' + GAMES + ' and ' + winner + " wins!";

            container.appendChild(message);

            reset();

            playerWins.textContent = 'Player has: ' + wins;
            compWins.textContent = 'Computer has: ' + losses;
            nill.textContent = 'Draws: ' + draws;

        }

        


    });


});

