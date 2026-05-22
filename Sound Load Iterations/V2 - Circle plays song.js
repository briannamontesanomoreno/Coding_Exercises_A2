let song;
let started = false;

function preload() {
  song = loadSound("data/godschariots.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (!started || !song.isPlaying()) {
    if (d < 60) {
      song.play();
      started = true;
    }
  } else {
    song.pause();
  }
}

function draw() {
  background(0);

  if (!started || !song.isPlaying()) {
    fill(255, 105, 150);
    noStroke();
    circle(width / 2, height / 2, 120);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("click to play", width / 2, height / 2 - 90);
  }
}