let allWords = [];
let para;

function preload() {
  para = loadStrings("data/lapvonabio.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  fill(255);
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
  }

  move() {
    this.x += random(-3, 3);
    this.y += random(-3, 3);
  }

  grow() {
    this.bigness += random(-1.5, 1.5);
    this.bigness = constrain(this.bigness, 12, 100);
  }

  display() {
    textSize(this.bigness);
    text(this.text, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
