let song1;
let img1;
let angle = 0;
let fft;

function preload() {
  song1 = loadSound("data/godschariots.mp3");
  img1 = loadImage("data/okloualb.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  fft = new p5.FFT();
  song1.play();
}

function mousePressed() {
  if (!mouseDragged) {
    if (song1.isPlaying()) {
      song1.pause();
    } else {
      song1.play();
    }
  }
}

function mouseDragged() {
  let dx = mouseX - pmouseX;
  angle += dx * 0.01;

  // Map mouse X position to playback rate
  // left = slow/reverse, middle = normal, right = fast
  let rate = map(mouseX, 0, width, -2, 2);
  song1.rate(rate);
}

function mouseReleased() {
  song1.rate(1);
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

  resetMatrix();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(14);

  let rate = map(mouseX, 0, width, -2, 2);
  text("rate: " + nf(rate, 1, 2) + "x", 0, height / 2 - 30);

  if (!song1.isPlaying()) {
    textSize(20);
    text("click to resume", 0, height / 2);
  }
}