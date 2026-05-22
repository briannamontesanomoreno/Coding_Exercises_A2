let counter = 0;
let positions = [];
let delay = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  positions.push({ x: mouseX, y: mouseY });

  if (positions.length > delay) {
    let delayed = positions.shift();
    stroke(random(255), random(255), random(255));
    strokeWeight(2);
    line(mouseX, mouseY, delayed.x, delayed.y);
  }
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveCanvas(`glitch_tv_${nf(counter, 3)}`, 'jpg');
    counter++;
  }
}