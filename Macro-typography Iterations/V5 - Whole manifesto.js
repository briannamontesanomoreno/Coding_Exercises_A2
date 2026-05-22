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

  // Flatten EVERY line of the file into a single word list.
  for (let line of para) {
    let words = line.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i].length === 0) continue;
      allWords.push(new Manifesto(words[i], random(width), random(height)));
    }
  }
}

function draw() {
  background(0);
  for (let i = 0; i < allWords.length; i++) {
    allWords[i].move();
    allWords[i].display();
  }
}

class Manifesto {
  constructor(wordText, x, y) {
    this.text = wordText;
    this.x = x;
    this.y = y;
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  display() {
    text(this.text, this.x, this.y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
