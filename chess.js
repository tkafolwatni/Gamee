const board = document.getElementById('chess-board');

function createChessBoard() {
  board.innerHTML = '';
  const rows = 8, cols = 8;
  const pieces = {
    0: ['♜','♞','♝','♛','♚','♝','♞','♜'],
    1: Array(8).fill('♟'),
    6: Array(8).fill('♙'),
    7: ['♖','♘','♗','♕','♔','♗','♘','♖']
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const square = document.createElement('div');
      square.className = 'square ' + ((row + col) % 2 === 0 ? 'white' : 'black');
      if (pieces[row]) square.textContent = pieces[row][col];
      board.appendChild(square);
    }
  }
}

createChessBoard();