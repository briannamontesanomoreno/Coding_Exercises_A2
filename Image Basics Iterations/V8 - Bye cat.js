let capture;
let smallImage;
let drops = [];
let rects = [];

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
  for (let i = 0; i < 5; i++) {
    rects.push(newRect());
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

function newRect() {
  return {
    x: -200,
    y: random(height),
    w: 200,
    h: 80,
    vx: random(4, 8)
  };
}

function draw() {
  imageMode(CORNER);
  image(capture, 0, 0, width, height);

  for (let i = 0; i < rects.length; i++) {
    let r = rects[i];
    r.x += r.vx;

    fill(0);
    noStroke();
    rect(r.x, r.y, r.w, r.h);

    for (let j = 0; j < drops.length; j++) {
      let d = drops[j];
      if (d.x > r.x - d.size / 2 && d.x < r.x + r.w + d.size / 2 &&
          d.y > r.y - d.size / 2 && d.y < r.y + r.h + d.size / 2) {
        d.vx += r.vx * 2;
        d.x += d.vx;
      }
    }

    if (r.x > width + r.w) {
      rects[i] = newRect();
    }
  }

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