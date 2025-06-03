checkSecretCode(() => {
  const room = document.getElementById('secret-room');
  room.classList.remove('hidden');
  room.scrollIntoView({ behavior: 'smooth' });
});