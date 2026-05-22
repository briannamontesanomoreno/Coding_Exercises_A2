let words = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 30; i++) {
    words.push(newWord());
  }
}

function newWord() {
  return {
    x: random(width),
    y: random(-500, 0),
    speed: random(1, 4),
    angle: random(-0.3, 0.3),
    angleSpeed: random(-0.002, 0.002)
  };
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  textSize(50);
  noStroke();

  for (let i = 0; i < words.length; i++) {
    let w = words[i];
    w.y += w.speed;
    w.angle += w.angleSpeed;
    if (w.angle > 0.3 || w.angle < -0.3) w.angleSpeed *= -1;
    push();
    translate(w.x, w.y);
    rotate(w.angle);
    fill(0, 5, 250);
    text("Gramatika", 0, 0);
    pop();
    if (w.y > height + 50) {
      words[i] = newWord();
    }
  }
}