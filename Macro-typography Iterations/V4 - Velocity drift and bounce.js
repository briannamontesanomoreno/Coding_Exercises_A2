let allWords = [];
let para;

function preload() {
  para = loadStrings("data/lapvonabio.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);

  let words = para[0].split(' ');
  for (let i = 0; i < words.length; i++) {
    allWords.push(new Manifesto(words[i], random(width), random(height)));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < allWords.length; i++) {
    allWords[i].grow();
    allWords[i].move();
    allWords[i].display();
  }
}

class Manifesto {
  constructor(wordText, x, y) {
    this.text = wordText;
    this.x = x;
    this.y = y;
    this.bigness = 40;
    this.colour = color(random(80, 255), random(80, 255), random(80, 255));
    this.vx = random(-2.5, 2.5);
    this.vy = random(-2.5, 2.5);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  grow() {
    this.bigness += random(-1.5, 1.5);
    this.bigness = constrain(this.bigness, 12, 100);
  }

  display() {
    fill(this.colour);
    textSize(this.bigness);
    text(this.text, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
