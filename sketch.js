function setup() {
  createCanvas(400, 400);
  mic = new p5.AudioIn();
  mic.start();
  
}

function draw() {
  let vol = mic.getLevel();
  
  background(0);
  noStroke();
  fill('white');
  circle(200, 200, 200 + 200 * noise(frameCount / 0.5))
  fill('red')
  stroke('red');
  circle(200, 200, 180 + 20 * noise(frameCount / 0.1))
  noFill();
  stroke('blue');
}