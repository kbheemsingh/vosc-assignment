const cells = document.querySelectorAll(".board button");
const turn = document.getElementById("turn");
const result = document.getElementById("result");
const restart = document.getElementById("restart");

let player = "X";
let board = ["","","","","","","","",""];
let gameOver = false;

const wins = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

cells.forEach((cell, i) => {
    cell.onclick = () => {
        if (board[i] || gameOver) return;

        board[i] = player;
        cell.textContent = player;

        if (wins.some(w => w.every(i => board[i] === player))) {
            result.textContent = `Player ${player} Wins!`;
            gameOver = true;
            return;
        }

        if (!board.includes("")) {
            result.textContent = "It's a Draw!";
            gameOver = true;
            return;
        }

        player = player === "X" ? "O" : "X";
        turn.textContent = `Player ${player}'s Turn`;
    };
});

restart.onclick = () => {
    board = ["","","","","","","","",""];
    player = "X";
    gameOver = false;
    cells.forEach(cell => cell.textContent = "");
    turn.textContent = "Player X's Turn";
    result.textContent = "";
};