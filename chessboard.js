// chessboard.js

const initialBoard = [
  ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
  ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
  ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
];

let selected = null;

function createBoard(containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  container.classList.add("chess-container");

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.className = "square " + ((row + col) % 2 === 0 ? "light" : "dark");
      square.dataset.row = row;
      square.dataset.col = col;
      square.textContent = initialBoard[row][col];
      square.addEventListener("click", () => handleMove(row, col));
      container.appendChild(square);
    }
  }
}

function handleMove(row, col) {
  const piece = initialBoard[row][col];
  if (selected) {
    const [fromRow, fromCol] = selected;
    if (fromRow === row && fromCol === col) {
      selected = null;
      return;
    }
    // تنفيذ النقل
    initialBoard[row][col] = initialBoard[fromRow][fromCol];
    initialBoard[fromRow][fromCol] = "";
    selected = null;
    createBoard("chessboard");
  } else if (piece !== "") {
    selected = [row, col];
  }
}

window.onload = () => {
  createBoard("chessboard");
};