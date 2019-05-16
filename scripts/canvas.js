const wrapper = document.getElementById("canvas-wrapper");
const canvas = document.getElementById("home");
const ctx = canvas.getContext("2d");
canvas.width = document.documentElement.clientWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
  canvas.width = document.documentElement.clientWidth;
  canvas.height = window.innerHeight;
  init();
});

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Line(a, b) {
  this.a = a;
  this.b = b;
  this.radians = Math.random() * Math.PI * 2;
  this.velocity = 0.002;
  this.distanceFromCenter = randomIntFromRange(50, 500);

  this.update = () => {
    this.radians += this.velocity;
    this.a = a + Math.cos(this.radians) * this.distanceFromCenter * 2;
    this.b = b + Math.sin(this.radians) * this.distanceFromCenter * 1.1;
    this.draw();
  };

  this.draw = () => {
    ctx.strokeStyle = "#6D909C";
    ctx.beginPath();
    ctx.moveTo(this.a, this.b);
    ctx.lineTo(this.a + 970, this.b - 2000);
    ctx.stroke();
  };
}

let lines;
function init() {
  lines = [];

  for (var i = 0; i < 30; i++) {
    this.a = canvas.width * 0.5;
    this.b = canvas.height * 0.5;
    lines.push(new Line(a, b));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lines.forEach(line => {
    line.update();
  });
}
init();
animate();
