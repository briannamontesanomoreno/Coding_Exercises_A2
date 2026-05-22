let bgImage;
let smallImage;
let drops = [];

function preload() {
  bgImage = loadImage("data/DP145911.jpg");
  smallImage = loadImage("data/IMG_2896.JPG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 20; i++) {
    drops.push(newDrop());
  }
}

function newDrop() {
  return {
    x: random(width),
    y: random(-500, 0),
    speed: random(4, 6),
    size: random(60, 120)
  };
}

function draw() {
  imageMode(CORNER);
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);

  imageMode(CENTER);
  for (let i = 0; i < drops.length; i++) {
    let d = drops[i];
    image(smallImage, d.x, d.y, d.size, d.size);
    d.y += d.speed;

    if (d.y > height + d.size) {
      drops[i] = newDrop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}