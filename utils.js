let keySequence = [];
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];

function checkSecretCode(callback) {
  document.addEventListener('keydown', (e) => {
    keySequence.push(e.key);
    if (keySequence.length > secretCode.length) {
      keySequence.shift();
    }
    if (keySequence.join() === secretCode.join()) {
      callback();
    }
  });
}