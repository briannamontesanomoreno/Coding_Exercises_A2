let capture;
let smallImage;
let drops = [];
let circles = [];

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
  for (let i = 0; i < 15; i++) {
    circles.push(newCircle());
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

function newCircle() {
  return {
    x: random(-200, 0),
    y: random(height),
    speed: random(1, 4),
    size: random(20, 80),
    col: color(0, random(50, 200), random(200, 255), random(150, 255))
  };
}

function draw() {
  // Webcam as background
  imageMode(CORNER);
  image(capture, 0, 0, width, height);

  noStroke();
  for (let i = 0; i < circles.length; i++) {
    let c = circles[i];
    fill(c.col);
    ellipse(c.x, c.y, c.size, c.size);
    c.x += c.speed;
    if (c.x > width + c.size) {
      circles[i] = newCircle();
    }
  }

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