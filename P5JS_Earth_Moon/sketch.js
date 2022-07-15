// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com



let angle = 0;
let aVelocity = 0;
let aAcceleration = 0.0001;

let capture;
//decides location of earth
let halfWidth; 
let halfHeight; 

let direction;
let speed;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(bg_color_x, bg_color_y, bg_color_z);
  halfWidth = width/2;
  halfHeight = height/2;
  direction = 0
  speed = 3
}


function draw() {

  if (leaveTrail == true) {
    //dont update background color
  }
  else {
    background(bg_color_x, bg_color_y, bg_color_z);
  }  
  if (direction == 0){
    //do nothing
  }
  if (direction == 1){
    halfWidth = halfWidth - speed
    //go left
  }
  if (direction == 2){
    halfWidth = halfWidth + speed
    //go right
  }
  if (direction == 3){
    halfHeight = halfHeight - speed
    //going up
  }
  if (direction == 4){
    halfHeight = halfHeight + speed
    //going down
  }
  //top left
  if (direction == 5){
    halfHeight = halfHeight - speed
    halfWidth = halfWidth - speed
  }
  //top right
  if (direction == 6){
    halfHeight = halfHeight - speed
    halfWidth = halfWidth + speed
  }
  //bottom left
  if (direction == 7){
    halfHeight = halfHeight + speed
    halfWidth = halfWidth - speed
  }
  //bottom right
  if (direction == 8){
    halfHeight = halfHeight + speed
    halfWidth = halfWidth + speed
  }
  if (direction == 9){
    //do nothing
  }
  //halfHeight = halfHeight + 1
  //halfWidth = halfWidth + 1
  //a quick animation test
  //quickPendulum();

  //console.log(halfWidth)
  if (halfWidth <= 0){
    direction = 2
  }
  if (halfHeight <= 0){
    direction = 4
  }
  if (halfWidth >= width){
    direction = 1
  }
  if (halfHeight >= height){
    direction = 3
  }
  //TODO:
//   Right now, we are able to bounce in 90 degree angles.

// But, if we are moving diagonally, it does not work. it becomes 90 degrees, straight bounce. this is a bug that needs fixing.
earthAndMoon();
 

  // print(n);
}
// display() {
//   ellipseMode(CENTER);
//   strokeWeight(4);
//   stroke(0);
//   if (this.dragging) {
//       fill(50);
//   } else if (this.rollover) {
//       fill(100);
//   } else {
//       fill(175, 200);
//   }
//   ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
// }
function earthAndMoon() {
  let ellipseOne = 200
  let ellipseTwo = 200
  let strokeWeightVar = 15
  //rgb(24, 34, 136)
  let strokeVarR = 24
  let strokeVarG = 34
  let strokeVarB = 136
  //rgb(255, 48, 103)
  let fillVarR = 255
  let fillVarG = 48
  let fillVarB = 103
  stroke(strokeVarR,strokeVarG,strokeVarB);
  strokeWeight(strokeWeightVar);
  fill(fillVarR,fillVarG,fillVarB);
  ellipse(halfWidth,halfHeight,ellipseOne,ellipseTwo)
}

function keyPressed() {
  print(keyCode);
  //left is 37, direction = 1
  //right is 39, direction = 2
  //up is 38, direction = 3
  //down is 40, direction = 4
  //1. Move earth to left
  if (keyCode == 37) {
    let moveLeft = speed;
    halfWidth = halfWidth - moveLeft;
    direction = 1
  }
  if (keyCode == 39) {
    let moveRight = speed;
    halfWidth = halfWidth + moveRight;
    direction = 2
  }
  if (keyCode == 38) {
    let moveUp = speed;
    halfHeight = halfHeight - moveUp;
    direction = 3
  }
  if (keyCode == 40) {
    let moveDown = speed;
    halfHeight = halfHeight + moveDown;
    direction = 4
  }
  //this is w key
  if (keyCode == 87){
    direction = 5
  }
  //this is d key
  if (keyCode == 68){
    direction = 6
  }
  //this is a key
  if (keyCode == 65){
    direction = 7
  }
  //this is s key
  if (keyCode == 83){
    direction = 8
  }
  //this is space key
  if (keyCode == 32){
    direction = 9
  }
}

function quickPendulum()
{
  translate(width / 2, height / 2);
  rotate(angle);

  let rgbSetStroke = new colorRGBSet();
  let tempStrokeWeight = random(stroke_Weight);
  let rgbSetFill = new colorRGBSet();

  //rgb(10, 16, 111)
  stroke(217, 107, 152);
  strokeWeight(15);
  //rgb(217, 107, 152)
  fill(217, 107, 152);  

  let lineEndPoint = 600;
  let ellipseRadius = 64;

  line(-lineEndPoint, 0, lineEndPoint, 0);
  ellipse(lineEndPoint, 0, ellipseRadius, ellipseRadius);
  ellipse(-lineEndPoint, 0, ellipseRadius, ellipseRadius);  

  angle += aVelocity;
  aVelocity += aAcceleration; 
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(bg_color_x, bg_color_y, bg_color_z);
}
