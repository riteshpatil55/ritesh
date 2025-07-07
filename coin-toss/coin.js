const coin = document.getElementById("coin");
function tossCoin() {
  const isHeads = Math.random() < 0.5;
  coin.src = isHeads ? "heads.png" : "tails.png";
}
