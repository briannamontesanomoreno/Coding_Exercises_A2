let song, fft, amplitude;
let speckles = [];

function preload() {
  song = loadSound("data/feel_you.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  song.play();
  for (let i = 0; i < 200; i++) {
    speckles.push({
      x: random(width),
      y: random(height),
      base: random(3, 8),
      type: floor(random(3))
    });
  }
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
  let vol    = amplitude.getLevel();

  let bassBoost   = map(bass,   0, 255, 1, 4);
  let midBoost    = map(mid,    0, 255, 1, 4);
  let trebleBoost = map(treble, 0, 255, 1, 4);

  for (let s of speckles) {
    let boost = s.type === 0 ? bassBoost : s.type === 1 ? midBoost : trebleBoost;
    let sz = s.base * boost;
    if (s.type === 0) fill(255, 105, 150);
    if (s.type === 1) fill(255, 160, 190);
    if (s.type === 2) fill(255, 200, 215);
    noStroke();
    circle(s.x, s.y, sz);
  }

  let titleSize = map(vol, 0, 1, 40, 200);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(titleSize);
  text("Feel You By X CLUB", width / 2, height / 2);

  if (!song.isPlaying()) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("PAUSED — press space to play", width / 2, 30);
  }
}