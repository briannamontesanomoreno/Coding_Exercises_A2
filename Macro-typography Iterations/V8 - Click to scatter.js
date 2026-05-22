let allWords = [];
let para;

function preload() {
  para = loadStrings("data/lapvonabio.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);

  for (let line of para) {
    let words = line.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i].length === 0) continue;
      allWords.push(new Manifesto(words[i], random(width), random(height)));
    }
  }
}

function draw() {
  // Trail overlay so scatter bursts leave streaks.
  noStroke();
  fill(0, 25);
  rect(0, 0, width, height);

  fill(255);
  for (let i = 0; i < allWords.length; i++) {
    allWords[i].move();
    allWords[i].display();
  }
}

function mousePressed() {
  // Push every word outward from the click point.
  for (let i = 0; i < allWords.length; i++) {
    allWords[i].scatter(mouseX, mouseY);
  }
}

class Manifesto {
  constructor(wordText, x, y) {
    this.text = wordText;
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }

  move() {
    // Apply impulse velocity, with friction.
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.92;
    this.vy *= 0.92;

    // Still drawn toward the mouse, so words eventually regroup.
    this.x = lerp(this.x, mouseX, 0.01) + random(-1, 1);
    this.y = lerp(this.y, mouseY, 0.01) + random(-1, 1);
  }

  scatter(originX, originY) {
    const dx = this.x - originX;
    const dy = this.y - originY;
    const dist = max(1, sqrt(dx * dx + dy * dy));
    const strength = 30;
    this.vx += (dx / dist) * strength;
    this.vy += (dy / dist) * strength;
  }

  display() {
    text(this.text, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
