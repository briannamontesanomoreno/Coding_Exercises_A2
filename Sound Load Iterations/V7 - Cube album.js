let song1;
let img1;
let angle = 0;

function preload() {
  song1 = loadSound("data/godschariots.mp3");
  img1 = loadImage("data/okloualb.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  song1.play();
}

function mousePressed() {
  if (song1.isPlaying()) {
    song1.pause();
  } else {
    song1.play();
  }
}

function draw() {
  background(0);

  ambientLight(150);

  directionalLight(255, 255, 255, -1, -1, -1);
  directionalLight(200, 200, 255, 1, 0, -1);
  directionalLight(255, 200, 200, 0, 1, -1);

  angle += 0.005;
  rotateY(angle);
  rotateX(0.3);

  texture(img1);
  noStroke();
  box(300);

  if (!song1.isPlaying()) {
    resetMatrix();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("click to resume", 0, height / 2 - 30);
  }
}