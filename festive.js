function festive() {
  var colors = ["gold", "silver", "red", "green", "white"];
  document.body.style.backgroundImage = `linear-gradient(${
    colors[Math.floor(Math.random() * 5)]
  },${colors[Math.floor(Math.random() * 5)]}`;
}
setInterval(festive, 3000);
