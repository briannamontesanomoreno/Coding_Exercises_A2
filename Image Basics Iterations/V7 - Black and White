let capture;
let smallImage;
let drops = [];

function preload() {
  smallImage = loadImage("data/IMG_2896.JPG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  for (let i = 0; i < 20; i++) {
    drops.push(newDrop());
  }
}

function newDrop() {
  return {
    x: random(width),
    y: random(-500, 0),
    speed: random(2, 6),
    size: random(60, 120),
    vx: 0
  };
}

function draw() {
  background(0);

  tint(255, 180);
  imageMode(CORNER);
  image(capture, 0, 0, width, height);
  noTint();

  filter(GRAY);

  imageMode(CENTER);
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    d.y += d.speed;
    d.vx *= 0.9;
    d.x += d.vx;
    image(smallImage, d.x, d.y, d.size, d.size);
    if (d.y > height + d.size || d.x < -d.size || d.x > width + d.size) {
      drops[i] = newDrop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth, windowHeight);
}