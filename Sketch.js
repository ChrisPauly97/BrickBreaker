var slow = false,invert = false,hit = false;
var posX,posY,updated,PaddleIsMoving;
var width = 600,height = 400;
var bricks = [],pucks = [],paddles = [];
var brickX = 0,brickY = 0,count = 0,i = 0;
var lives = 3;

function setup() {
  createCanvas(600,400);
  createBricks();
  paddles.push(new Paddle(0,300,380,80,20));
  pucks.push(new Puck(12,0,0,300,200));
  pucks[0].reset();

}
function draw() {
  background(0);
  textAlign(CENTER);
  var txt = ("lives: " + lives)
  fill(255);
  text(txt,550,100)
  checkKeys(0);
  // Check each brick
  for(let brick of bricks){
    brick.show();
    if(brick.health == 0){
      continue;
    }

    // Check if any puck collides with the bricks
    for(let puck of pucks){
      hit = puckCollision(puck,brick)
      if(hit) createPuck(brick);
      brick.checkHealth(puck,hit);
    }

    if(brick.extra){
      brick.extraBall();
    }
  }

  // Check if any puck collides with the paddles
  for(let puck of pucks){
    if(puckCollision(puck, paddles[0])){
      puck.addMomentum();
    }
    puck.update();
    puck.show();
	  puck.yEdges();
	  puck.xEdges();
  }

  // Update and show every paddle
  for(let paddle of paddles){
    paddle.update();
    paddle.show();
  }
}

// Collision detection maths
function collides(posX, posY, object, puck) {
  var DeltaX = posX - Math.max(object.x, Math.min(posX, object.x + object.width ));
  var DeltaY = posY - Math.max(object.y, Math.min(posY, object.y + object.height));
  return ((DeltaX * DeltaX + DeltaY * DeltaY) < (puck.r * puck.r))
}

// Logic for puck collision
function puckCollision(puck, paddle) {
  posX = puck.x + puck.xspeed;
  posY = puck.y + puck.yspeed;

  if (collides(posX, puck.y, paddle, puck)) {
    puck.xspeed *= -1;
    return true;
  }

  if (collides(puck.x, posY, paddle, puck)) {
    puck.yspeed *= -1;
    return true;
  }

  if(!updated) puck.update();

  updated = true
  return false;
}

// Create the bricks for the level
function createBricks(){
  bricks = [];
  brickX = 0;
  brickY = 0;
  for(i = 0; i < 26; i++){
    var extra = false;
    if(random(0,1) > 0.9){
      extra = true;
    }
    if(brickX + width/8 > 600){
      brickX = 0;
      brickY+=20;
      bricks.push(new Brick((floor(random(1,4))),brickX,brickY,width/8,20,extra));
    }else{
      bricks.push(new Brick(floor(random(1,4)),brickX,brickY,width/8,20,extra));
      brickX += width/8;
    }
  }
}
// Create a new Puck
function createPuck(brick) {
  if (brick.extra) {
    pucks.push(new Puck(12, 3, 2, brick.x + brick.width / 2, brick.y + 10))
    brick.extra = false;
  }
}
