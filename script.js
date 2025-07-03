
function tossCoin() {
  const coin = document.getElementById('coinImage');
  const resultText = document.getElementById('resultText');
  const sound = document.getElementById('coinSound');

  sound.currentTime = 0;
  sound.play();

  // Apply 3D flip animation
  coin.style.transition = 'transform 1s ease-in-out';
  coin.style.transform = 'rotateY(1080deg)';

  resultText.textContent = "Tossing...";

  setTimeout(() => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    coin.src = result + '.png';
    coin.style.transform = 'rotateY(0deg)';
    resultText.textContent = result.toUpperCase();
  }, 1000);
}
