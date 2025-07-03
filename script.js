
function tossCoin() {
  const coin = document.getElementById('coinImage');
  const resultText = document.getElementById('resultText');
  const sound = document.getElementById('coinSound');

  sound.currentTime = 0;
  sound.play();

  coin.style.transform = 'rotateY(1080deg)';
  resultText.textContent = "Tossing...";

  setTimeout(() => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    coin.src = result + '.png';
    coin.style.transform = 'rotateY(0deg)';
    resultText.textContent = result.toUpperCase();
  }, 1000);
}
