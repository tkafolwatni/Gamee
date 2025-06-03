// chessboard.js

let board = null;
let game = new Chess();
let moveHistory = [];

function onDragStart(source, piece, position, orientation) {
  // منع تحريك القطع إذا انتهت اللعبة أو محاولة تحريك الأسود
  if (game.game_over() || piece.search(/^b/) !== -1) return false;
}

function onDrop(source, target) {
  let move = game.move({
    from: source,
    to: target,
    promotion: 'q' // ترقية الجندي تلقائيًا إلى ملكة
  });

  if (move === null) return 'snapback';

  // تسجيل الحركة
  moveHistory.push(move);
  checkSecretSequence();

  // دور الأسود (الذكاء الاصطناعي)
  window.setTimeout(makeBestMove, 250);
}

function onSnapEnd() {
  board.position(game.fen());
}

function makeBestMove() {
  let possibleMoves = game.moves();
  if (game.game_over() || possibleMoves.length === 0) return;

  let randomIdx = Math.floor(Math.random() * possibleMoves.length);
  let move = game.move(possibleMoves[randomIdx]);
  board.position(game.fen());
}

// التحقق من تسلسل الحركات لفتح الغرفة السرية
function checkSecretSequence() {
  if (moveHistory.length < 5) return;

  let m1 = moveHistory[0];
  let m2 = moveHistory[1];
  let m3 = moveHistory[2];
  let m4 = moveHistory[3];
  let m5 = moveHistory[4];

  let isPawn = m => game.get(m.from).type === 'p';
  let isBishop = m => game.get(m.from).type === 'b';
  let isKing = m => game.get(m.from).type === 'k';

  if (isPawn(m1) && isPawn(m2) && isPawn(m3)
      && isBishop(m4) && isKing(m5)) {
    document.getElementById('secret-room').classList.remove('hidden');
  }
}

// إعداد اللوحة
board = Chessboard('board', {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
});