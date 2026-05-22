let bgImage;
let smallImage;

function preload() {
  bgImage = loadImage("data/DP145911.jpg");
  smallImage = loadImage("data/IMG_2896.JPG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  imageMode(CORNER);
  image(bgImage, 0, 0, width, height, 0, 0, bgImage.width, bgImage.height, COVER);

  imageMode(CENTER);
  image(smallImage, mouseX, mouseY, 100, 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}