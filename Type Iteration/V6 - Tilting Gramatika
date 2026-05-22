let words = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    words.push({
      x: random(width),
      y: random(height),
      angle: random(-0.3, 0.3),
      angleSpeed: random(-0.002, 0.002),
      col: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  textSize(20);
  noStroke();

  for (let w of words) {
    w.angle += w.angleSpeed;
    if (w.angle > 0.3 || w.angle < -0.3) w.angleSpeed *= -1;
    push();
    translate(w.x, w.y);
    rotate(w.angle);
    fill(w.col);
    text("Gramatika", 0, 0);
    pop();
  }
}