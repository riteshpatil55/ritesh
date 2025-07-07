let canvas = document.getElementById('gameCanvas');
let ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fruits = [];
let slicedFruits = 0;
let highScore = localStorage.getItem('fruitHighScore') || 0;
let gameOver = false;
let spawnInterval;
let animationFrame;

const fruitImages = [
  'apple.png', 'mango.png', 'pineapple.png', 'watermelon.png',
  'banana.png', 'muskmelon.png', 'strawberry.png', 'papaya.png'
];

const sliceSound = document.getElementById('sliceSound');
const boomSound = document.getElementById('boomSound');

let splashes = [];

function spawnObjects() {
  for (let i = 0; i < 4; i++) {
    const isBomb = Math.random() < 0.6;
    const img = new Image();
    img.src = isBomb ? 'images/bomb.png' : 'images/' + fruitImages[Math.floor(Math.random() * fruitImages.length)];

    fruits.push({
      x: Math.random() * (canvas.width - 60),
      y: canvas.height + 50,
      size: 60,
      speedY: -20 - Math.random() * 8,   // Increased height
      gravity: 0.4,                      // Smooth downward arc
      img: img,
      sliced: false,
      isBomb: isBomb,
      sliceTime: 0
    });
  }
}

function drawFruits() {
  fruits.forEach(fruit => {
    if (!fruit.sliced) {
      ctx.drawImage(fruit.img, fruit.x, fruit.y, fruit.size, fruit.size);
    }
  });
}

function updateFruits() {
  fruits.forEach(fruit => {
    fruit.y += fruit.speedY;
    fruit.speedY += fruit.gravity;
  });
}

function drawSplashes() {
  splashes.forEach((splash, index) => {
    ctx.fillStyle = "rgba(255,0,0,0.3)";
    ctx.beginPath();
    ctx.arc(splash.x, splash.y, 40, 0, Math.PI * 2);
    ctx.fill();
    splash.life -= 1;
    if (splash.life <= 0) splashes.splice(index, 1);
  });
}

function handleSwipe(x, y) {
  let comboCount = 0;

  fruits.forEach(fruit => {
    if (!fruit.sliced &&
        x > fruit.x && x < fruit.x + fruit.size &&
        y > fruit.y && y < fruit.y + fruit.size) {
      fruit.sliced = true;
      fruit.sliceTime = Date.now();
      splashes.push({ x: fruit.x + 30, y: fruit.y + 30, life: 10 });

      if (fruit.isBomb) {
        boomSound.play();
        endGame();
      } else {
        sliceSound.play();
        comboCount++;
      }
    }
  });

  if (comboCount >= 2) {
    slicedFruits += comboCount + 1; // Combo bonus
  } else {
    slicedFruits += comboCount;
  }
}

let lastX, lastY;

canvas.addEventListener('touchmove', e => {
  const touch = e.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;
  const dx = x - (lastX || x);
  const dy = y - (lastY || y);
  const speed = Math.sqrt(dx * dx + dy * dy);

  if (speed > 2) {
    handleSwipe(x, y);
  }

  lastX = x;
  lastY = y;
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateFruits();
  drawFruits();
  drawSplashes();
  if (!gameOver) {
    animationFrame = requestAnimationFrame(gameLoop);
  }
}

function endGame() {
  gameOver = true;
  cancelAnimationFrame(animationFrame);
  clearInterval(spawnInterval);

  if (slicedFruits > highScore) {
    highScore = slicedFruits;
    localStorage.setItem('fruitHighScore', highScore);
  }

  document.getElementById('finalScore').innerText = slicedFruits;
  document.getElementById('highScore').innerText = highScore;
  document.getElementById('gameOverScreen').style.display = 'flex';
}

function startFruitSliceGame() {
  fruits = [];
  slicedFruits = 0;
  gameOver = false;
  splashes = [];
  spawnInterval = setInterval(spawnObjects, 1000);
  gameLoop();
}
