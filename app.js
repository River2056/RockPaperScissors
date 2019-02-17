let userScore = 0;
let computerScore = 0;
let gameCount = 1;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("computer_score");
const gameCount_span = document.getElementById("count_span");
const scoreBoard_div = document.querySelector(".score_board");
let result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_div = document.getElementById("reset_btn");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    var randomChoices = Math.floor(Math.random()*3);
    return choices[randomChoices];
}

function convertToWord(letter) {
    if(letter === 'r') return "Rock";
    if(letter === 'p') return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    gameCount++;
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    gameCount_span.innerHTML = gameCount;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} , You Win! 🔥`;
    userChoice_div.classList.add("green_glow");
    setTimeout(() => userChoice_div.classList.remove("green_glow"), 300);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    gameCount++;
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    gameCount_span.innerHTML = gameCount;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord} , You Lose... 😥`;
    userChoice_div.classList.add("red_glow");
    setTimeout(() => userChoice_div.classList.remove("red_glow"), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "User".fontsize(3).sub();
    const smallCompWord = "Comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    gameCount++;
    gameCount_span.innerHTML = gameCount;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} , It's a draw 🤔`;
    userChoice_div.classList.add("gray_glow");
    setTimeout(() => userChoice_div.classList.remove("gray_glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissors_div.addEventListener('click', () => game("s"));
    reset_div.addEventListener('click', () => document.location.reload());
}

main();