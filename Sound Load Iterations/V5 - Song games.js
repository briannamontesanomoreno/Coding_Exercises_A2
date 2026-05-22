let song1, song2, song3;
let img1, img2, img3;
let selected = null;
let allowed;

function preload() {
  song1 = loadSound("data/godschariots.mp3");
  song2 = loadSound("data/pp_glm.mp3");
  song3 = loadSound("data/Igual_Que_Ayer.mp3");
  img1 = loadImage("data/okloualb.jpg");
  img2 = loadImage("data/PP_FTAlb.jpg");
  img3 = loadImage("data/RKM_KenY.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  allowed = floor(random(1, 4));
}

function mousePressed() {
  if (selected && selected === allowed) {
    if (song1.isPlaying() || song2.isPlaying() || song3.isPlaying()) {
      song1.pause(); song2.pause(); song3.pause();
    } else {
      if (selected === 1) song1.play();
      if (selected === 2) song2.play();
      if (selected === 3) song3.play();
    }
    return;
  }

  let d1 = dist(mouseX, mouseY, width / 4, height / 2);
  let d2 = dist(mouseX, mouseY, width / 2, height / 2);
  let d3 = dist(mouseX, mouseY, (width / 4) * 3, height / 2);

  if (d1 < 60) {
    selected = 1;
    if (allowed === 1) { song2.stop(); song3.stop(); song1.play(); }
  } else if (d2 < 60) {
    selected = 2;
    if (allowed === 2) { song1.stop(); song3.stop(); song2.play(); }
  } else if (d3 < 60) {
    selected = 3;
    if (allowed === 3) { song1.stop(); song2.stop(); song3.play(); }
  } else {
    selected = null;
  }
}

function draw() {
  background(0);

  if (selected && selected === allowed) {
    let img  = selected === 1 ? img1 : selected === 2 ? img2 : img3;
    let name = selected === 1 ? "God's Chariots" : selected === 2 ? "Girl Like Me" : "Igual Que Ayer";
    imageMode(CENTER);
    image(img, width / 2, height / 2 - 60, 300, 300);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(24);
    text(name, width / 2, height / 2 + 110);
    if (!song1.isPlaying() && !song2.isPlaying() && !song3.isPlaying()) {
      textSize(16);
      text("click to resume", width / 2, height / 2 + 150);
    }
  } else {
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(20);
    text("click to play", width / 2, height / 2 - 90);

    // circle 1
    fill(selected === 1 ? color(255, 0, 0) : color(255, 105, 150));
    noStroke();
    circle(width / 4, height / 2, 120);

    // circle 2
    fill(selected === 2 ? color(255, 0, 0) : color(255, 160, 190));
    noStroke();
    circle(width / 2, height / 2, 120);

    // circle 3
    fill(selected === 3 ? color(255, 0, 0) : color(255, 200, 215));
    noStroke();
    circle((width / 4) * 3, height / 2, 120);
  }
}