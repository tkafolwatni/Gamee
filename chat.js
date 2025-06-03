const chatInput = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

chatInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && chatInput.value.trim() !== '') {
    const message = chatInput.value.trim();
    const p = document.createElement('p');
    p.textContent = '👤: ' + message;
    chatBox.appendChild(p);
    chatBox.scrollTop = chatBox.scrollHeight;
    chatInput.value = '';
  }
});