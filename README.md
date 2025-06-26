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
