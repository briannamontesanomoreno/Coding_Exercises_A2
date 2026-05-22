let capture;
let smallImage;
let drops = [];
let overlayCol;

function preload() {
  smallImage = loadImage("data/IMG_2896.JPG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  overlayCol = color(random(255), random(255), random(255), 80);
  for (let i = 0; i < 20; i++) {
    drops.push(newDrop());
  }
}

function newDrop() {
  return {
    x: random(width),
    y: random(-500, 0),
    speed: random(2, 6),
    size: random(60, 120)
  };
}

function draw() {
  imageMode(CORNER);
  image(capture, 0, 0, width, height);

  // Randomly shift overlay colour every ~60 frames
  if (frameCount % 60 === 0) {
    overlayCol = color(random(255), random(255), random(255), random(40, 120));
  }

  noStroke();
  fill(overlayCol);
  rect(0, 0, width, height);

  imageMode(CENTER);
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    d.y += d.speed;
    image(smallImage, d.x, d.y, d.size, d.size);
    if (d.y > height + d.size) {
      drops[i] = newDrop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth, windowHeight);
}