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
    angleSpeed: random(-0.002, 0.002),
    vx: 0
  };
}

function draw() {
  background(0);
  textAlign(CENTER, CENTER);
  textSize(40);
  noStroke();

  for (let i = 0; i < words.length; i++) {
    let w = words[i];

    let dx = w.x - mouseX;
    let dy = w.y - mouseY;
    let dist = sqrt(dx * dx + dy * dy);

    if (dist < 100) {
      let force = (100 - dist) / 100;
      w.vx += (dx / dist) * force * 5;
    }

    w.vx *= 0.9;
    w.x += w.vx;
    w.y += w.speed;
    w.angle += w.angleSpeed;
    if (w.angle > 0.3 || w.angle < -0.3) w.angleSpeed *= -1;

    push();
    translate(w.x, w.y);
    rotate(w.angle);
    fill(0, 0, 255);
    text("Gramatika", 0, 0);
    pop();

    if (w.y > height + 50) {
      words[i] = newWord();
    }
  }
}