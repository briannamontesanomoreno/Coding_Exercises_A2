let counter = 0;
let positions = [];
let delay = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  positions.push({ x: mouseX, y: mouseY });

  if (positions.length > delay) {
    let delayed = positions.shift();
    stroke(random(255), random(255), random(255));
    strokeWeight(20);
    line(mouseX, 0, mouseX, height);
  }

  background(0, 25);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg');
    counter++;
  }
}