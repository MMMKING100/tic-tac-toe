let board = Array(9).fill(null);
let currentPlayer = 'X';
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
function makeMove(cell, index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        cell.innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('status').innerText = `${currentPlayer} HAT GEWONNEN!`;
        } else if (board.every(cell => cell)) {
            document.getElementById('status').innerText = 'UNENTSCHIEDEN!';
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Aktueller Spieler: ${currentPlayer}`;
        }
    }
}
function checkWinner() {
    return winCombos.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}
function resetGame() {
    board.fill(null);
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    document.getElementById('status').innerText = '';
    currentPlayer = 'X';
}