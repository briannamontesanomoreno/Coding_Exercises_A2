let song;
let started = false;

function preload() {
  song = loadSound("data/godschariots.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  if (!started) {
    song.play();
    started = true;
  } else {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}

function draw() {
  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(20);
  if (!started) {
    text("click to play", width / 2, height / 2);
  } else if (!song.isPlaying()) {
    text("click to resume", width / 2, height / 2);
  }
}