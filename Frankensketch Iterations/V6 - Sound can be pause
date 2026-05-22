let song, fft;

function preload() {
  song = loadSound("data/song.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  song.play();
}

function keyPressed() {
  if (key === ' ') {
    if (song.isPlaying()) {
      song.pause();
    } else {
      song.play();
    }
  }
}

function draw() {
  background(0);

  fft.analyze();
  let bass   = fft.getEnergy("bass");
  let mid    = fft.getEnergy("mid");
  let treble = fft.getEnergy("treble");

  let bassSize   = map(bass,   0, 255, 80, 200);
  let midSize    = map(mid,    0, 255, 80, 200);
  let trebleSize = map(treble, 0, 255, 80, 200);

  let spacing = width / 4;
  let cy = height / 2;

  // Red circle - bass
  fill(255, 0, 0);
  noStroke();
  circle(spacing, cy, bassSize);

  // Yellow square - mid
  fill(255, 200, 0);
  noStroke();
  rectMode(CENTER);
  square(spacing * 2, cy, midSize);

  // Green triangle - treble
  fill(0, 255, 0);
  noStroke();
  let t = trebleSize / 2;
  triangle(spacing * 3, cy - t, spacing * 3 - t, cy + t, spacing * 3 + t, cy + t);

  // Pause indicator
  if (!song.isPlaying()) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("PAUSED — press space to play", width / 2, 30);
  }
}