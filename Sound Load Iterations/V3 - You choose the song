let song1, song2;

function preload() {
  song1 = loadSound("data/godschariots.mp3");
  song2 = loadSound("data/pp_glm.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  let d1 = dist(mouseX, mouseY, width / 3, height / 2);
  let d2 = dist(mouseX, mouseY, (width / 3) * 2, height / 2);

  if (song1.isPlaying() || song2.isPlaying()) {
    song1.pause();
    song2.pause();
    return;
  }

  if (d1 < 60) {
    song2.stop();
    song1.play();
  } else if (d2 < 60) {
    song1.stop();
    song2.play();
  }
}

function draw() {
  background(0);

  if (!song1.isPlaying() && !song2.isPlaying()) {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("you choose", width / 2, height / 2 - 90);

    fill(255, 105, 150);
    noStroke();
    circle(width / 3, height / 2, 120);

    fill(5, 160, 190);
    noStroke();
    circle((width / 3) * 2, height / 2, 120);
  }
}