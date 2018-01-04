"use strict";
var slow = false,invert = false,gameStart = false,hit = false;
var PaddleIsMoving;
var rand1,rand2,rand3,posX,posY,updated;
var width = 600,height = 400;
var bricks = [],pucks = [],paddles = [];
var brickX = 0,brickY = 0,count = 0,i = 0;

function setup() {
  createCanvas(600,400);
  paddles.push(new Paddle(0,300,380,80,20));
  pucks.push(new Puck(12,0,0,300,200));

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
function draw() {
  background(0);
  // Check each brick
  for(let brick of bricks){
    brick.show();
    if(brick.health == 0){
      continue
    }
    for(let i = 0; i < pucks.length; i++){
      hit = puckCollision(pucks[i],brick)
      if(hit) createPuck(brick);
      brick.checkHealth(pucks[i],hit);
    }


    if(brick.extra){
      push();
      textSize(12);
      noStroke();
      fill(0,0,255);
      ellipse(brick.x + brick.width/2,brick.y + brick.height/2,10);
      pop();
    }

  }
  for(let puck of pucks){
    var paddleHit = puckCollision(puck, paddles[0]);
    if(paddleHit){
      puck.addMomentum();
    }
    puck.update();
    puck.show();
	  puck.yEdges();
	  puck.xEdges();
  }
  for(let paddle of paddles){
    paddle.update();
    paddle.show();
  }
}
function collides(posX, posY, object, puck) {
  var DeltaX = posX - Math.max(object.x, Math.min(posX, object.x + object.width ));
  var DeltaY = posY - Math.max(object.y, Math.min(posY, object.y + object.height));
  return ((DeltaX * DeltaX + DeltaY * DeltaY) < (puck.r * puck.r))
}

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

function createPuck(brick) {

  if (brick.extra) {
    pucks.push(new Puck(12, 3, 2, brick.x + brick.width / 2, brick.y + 10))
    brick.extra = false;
  }
}
