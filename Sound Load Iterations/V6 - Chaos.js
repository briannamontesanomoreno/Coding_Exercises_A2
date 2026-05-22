let song1, song2, song3;
let img1, img2, img3;
let chaos = false;

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
}

function mousePressed() {
  let dc = dist(mouseX, mouseY, width / 2, height / 2);
  if (dc < 40) {
    chaos = !chaos;
    if (chaos) {
      song1.play();
      song2.play();
      song3.play();
    } else {
      song1.stop();
      song2.stop();
      song3.stop();
    }
  }
}

function draw() {
  if (chaos) {
    background(random(255), random(255), random(255));

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(random(20, 80));
    text("God's Chariots", random(width), random(height));
    textSize(random(20, 80));
    text("Girl Like Me", random(width), random(height));
    textSize(random(20, 80));
    text("Igual Que Ayer", random(width), random(height));

    imageMode(CENTER);
    image(img1, random(width), random(height), random(50, 200), random(50, 200));
    image(img2, random(width), random(height), random(50, 200), random(50, 200));
    image(img3, random(width), random(height), random(50, 200), random(50, 200));

    fill(255, 0, 0);
    noStroke();
    circle(width / 2, height / 2, 80);
  } else {
    background(0);
    fill(255, 0, 0);
    noStroke();
    circle(width / 2, height / 2, 80);
  }
}