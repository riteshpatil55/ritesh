<!DOCTYPE html>
<html>
<head>
    <title>Ritesh Patil - Web Developer</title>
    <style>
        input, button {
  padding: 10px;
  margin-top: 10px;
  font-size: 16px;
}
#message {
  margin-top: 15px;
  font-weight: bold;
  color: #00509E;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-right: 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 8px;
}


        body {
            background-color: #f0f8ff;
            font-family: Arial, sans-serif;
            color: #333;
        }
        h1 {
            color: #007acc;
        }
        a {
            color: #008000;
        }
    </style>
</head>
<body>
    <h1>Welcome to Ritesh Patil's Web Page</h1>
    <style>
  #gameCanvas {
    display: block;
    margin: 30px auto;
    border: 3px solid #222;
    background-color: #f0f0f0;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  h2 {
    text-align: center;
    margin-top: 40px;
    font-size: 28px;
    color: #2c3e50;
  }

  p {
    text-align: center;
    font-size: 16px;
    color: #555;
  }


  input, button {
    padding: 8px 15px;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 6px;
  }


  body { background: #EFEFEF; color: #333; padding: 20px; max-width: 600px; margin: auto; }
  h1 { color: #00509E; }
  button { cursor: pointer; background: #00509E; color: #fff; border: none; border-radius: 5px; }
  img { border-radius: 50%; }
</style>

    <p>I am learning Web Development with Bunty Bro 🚀</p>
    <!-- Projects Section -->
<h2>Projects</h2>
<h2> 1.🎮 Guess the Number Game</h2>
<p>I'm thinking of a number between 1 and 100. Can you guess it?</p>

<input type="number" id="guessInput" placeholder="Enter your guess">
<button onclick="checkGuess()">Submit</button>

<p id="message"></p>

<script>
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    attempts++;

    if (isNaN(guess)) {
      message.textContent = "⛔ Please enter a number!";
    } else if (guess < 1 || guess > 100) {
      message.textContent = "❗ Guess must be between 1 and 100.";
    } else if (guess === secretNumber) {
      message.innerHTML = `✅ You got it in ${attempts} tries! The number was ${secretNumber}.<br>Reload the page to play again.`;
    } else if (guess < secretNumber) {
      message.textContent = "📉 Too low! Try again.";
    } else {
      message.textContent = "📈 Too high! Try again.";
    }
  }
</script>
<h2>2.✊ Rock Paper Scissors Game</h2>
<p>Choose your move:</p>

<button onclick="play('rock')">🪨 Rock</button>
<button onclick="play('paper')">📄 Paper</button>
<button onclick="play('scissors')">✂️ Scissors</button>

<p id="rpsResult" style="font-weight: bold; margin-top: 15px;"></p>

<script>
  function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const compChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    if (userChoice === compChoice) {
      result = "🤝 It's a draw!";
    } else if (
      (userChoice === 'rock' && compChoice === 'scissors') ||
      (userChoice === 'paper' && compChoice === 'rock') ||
      (userChoice === 'scissors' && compChoice === 'paper')
    ) {
      result = `🎉 You win! Computer chose ${compChoice}.`;
    } else {
      result = `😞 You lose! Computer chose ${compChoice}.`;
    }

    document.getElementById('rpsResult').textContent = result;
  }
</script>
<h2>3.🕵️ Mystery Emoji Quiz</h2>
<p id="emojiQuestion">🎬🐯🦁</p>

<input type="text" id="emojiAnswer" placeholder="Enter your guess">
<button onclick="checkEmoji()">Submit</button>
<p id="emojiResult" style="margin-top: 10px; font-weight: bold;"></p>

<script>
  const quiz = [
    { emoji: "🎬🐯🦁", answer: "life of pi" },
    { emoji: "❄️⛄👭", answer: "frozen" },
    { emoji: "🧙‍♂️⚡🧹", answer: "harry potter" },
    { emoji: "🚢🧊💔", answer: "titanic" },
    { emoji: "🦁👑", answer: "lion king" }
  ];

  let current = 0;

  function checkEmoji() {
    const userAnswer = document.getElementById("emojiAnswer").value.toLowerCase().trim();
    const result = document.getElementById("emojiResult");

    if (userAnswer === quiz[current].answer) {
      result.textContent = "✅ Correct!";
      current = (current + 1) % quiz.length;
      setTimeout(() => {
        document.getElementById("emojiQuestion").textContent = quiz[current].emoji;
        document.getElementById("emojiAnswer").value = "";
        result.textContent = "";
      }, 1000);
    } else {
      result.textContent = "❌ Try again!";
    }
  }
</script>
<!DOCTYPE html>
<html lang="en">
<head>
    <h2>4.🦖 Dino Runner Game</h2>
</head>
  <meta charset="UTF-8">
  <title>Dino Runner Game</title>
     

  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #ecf0f1;
    }
    #gameCanvas {
      display: block;
      margin: 30px auto;
      border: 3px solid #222;
      background-color: #ffffff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
    button {
      display: block;
      margin: 10px auto;
      padding: 10px 20px;
      background: #27ae60;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    p {
      font-size: 16px;
      color: #333;
    }
  </style>


 
<html lang="en">
  <meta charset="UTF-8">
  <title>Dino Runner Game</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      background: #ecf0f1;
    }
    #gameCanvas {
      display: block;
      margin: 30px auto;
      border: 3px solid #222;
      background-color: #ffffff;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    }
    button {
      display: block;
      margin: 10px auto;
      padding: 10px 20px;
      background: #27ae60;
      color: white;
      font-size: 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    p {
      font-size: 16px;
      color: #333;
    }
  </style>
</head>
<body>

  <h2>🦖 Dino Runner Game</h2>
  <canvas id="gameCanvas" width="600" height="200"></canvas>
  <button id="restartBtn" onclick="restartGame()" style="display:none;">🔁 Restart Game</button>
  <p id="emojiResult"></p>
  <p>Press <strong>Space</strong> to jump</p>

  <audio id="jumpSound" src="https://www.fesliyanstudios.com/play-mp3/387" preload="auto"></audio>
  <audio id="hitSound" src="https://www.fesliyanstudios.com/play-mp3/6673" preload="auto"></audio>

  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const dinoImg = new Image();
    dinoImg.src = "https://i.ibb.co/2vFc3Tz/dino.png";

    const cloudImg = new Image();
    cloudImg.src = "https://i.ibb.co/J2Jdktg/cloud.png";

    const jumpSound = document.getElementById("jumpSound");
    const hitSound = document.getElementById("hitSound");

    let dino = { x: 50, y: 150, width: 44, height: 47, vy: 0, gravity: 1.5, jump: -20 };
    let cactus = { x: 600, width: 20, height: 40 };
    let clouds = [ { x: 300, y: 40 }, { x: 500, y: 20 } ];

    let isJumping = false;
    let gameOver = false;
    let score = 0;

    function drawDino() {
      ctx.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    function drawCactus() {
      ctx.fillStyle = "brown";
      ctx.fillRect(cactus.x, 160, cactus.width, cactus.height);
    }

    function drawClouds() {
      ctx.globalAlpha = 0.6;
      clouds.forEach(cloud => {
        ctx.drawImage(cloudImg, cloud.x, cloud.y, 50, 30);
      });
      ctx.globalAlpha = 1.0;
    }

    function drawScore() {
      ctx.fillStyle = "#333";
      ctx.font = "18px Arial";
      ctx.fillText("Score: " + score, 480, 30);
    }

    function update() {
      if (gameOver) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dino physics
      dino.y += dino.vy;
      dino.vy += dino.gravity;

      if (dino.y > 150) {
        dino.y = 150;
        dino.vy = 0;
        isJumping = false;
      }

      // Move cactus
      cactus.x -= 6;
      if (cactus.x < -cactus.width) {
        cactus.x = 600 + Math.random() * 100;
        score++;
      }

      // Move clouds
      clouds.forEach(cloud => {
        cloud.x -= 1;
        if (cloud.x < -50) cloud.x = 600 + Math.random() * 100;
      });

      // Collision check
      if (
        dino.x < cactus.x + cactus.width &&
        dino.x + dino.width > cactus.x &&
        dino.y + dino.height > 160
      ) {
        gameOver = true;
        hitSound.play();
        document.getElementById("emojiResult").textContent = `💥 Game Over! Final Score: ${score}`;
        document.getElementById("restartBtn").style.display = "inline-block";
      }

      drawClouds();
      drawDino();
      drawCactus();
      drawScore();

      requestAnimationFrame(update);
    }

    document.addEventListener("keydown", function (e) {
      if (e.code === "Space" && !isJumping && !gameOver) {
        dino.vy = dino.jump;
        isJumping = true;
        jumpSound.play();
      }
    });

    function restartGame() {
      cactus.x = 600;
      dino.y = 150;
      dino.vy = 0;
      score = 0;
      gameOver = false;
      document.getElementById("emojiResult").textContent = "";
      document.getElementById("restartBtn").style.display = "none";
      update();
    }

    update();
  </script>
</body>
</html>




<p>More projects coming soon — stay tuned!</p>
    <h2>Connect With Me</h2>
    <a href="mailto:riteshkp009@gmail.com">Email Me</a>
     <h2>Connect With My Buddie</h2>
    <a href="mailto:rmpatil484@gmail.com">Email Me</a>
    <h2>My Resume</h2>
<a href="Ritesh_Resume.pdf" download>
  <button style="padding:10px 20px; font-size:16px;">📄 Download My Resume</button>
</a>
<h2>My Buddie Resume</h2>
<a href="RohitPatil.pdf" download>
    <button style="padding:10px 20px; front-size:16px;">📄 Download My Resume</button>
    </a>



<a href="#images">🖼️ View Images</a>

<h2 id="images">My Gallery</h2>
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="image1.jpg" alt="Image 1" width="200">
  <img src="image2.jpg" alt="Image 2" width="200">
  <img src="img3.jpg" alt="Image 3" width="200">
</div>


</body>
</html>
