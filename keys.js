"use strict";
//All General control functions
var leftPressed = false;
var rightPressed = false;
var slow = false;
var invert = false;

function keyPressed() {
  for (let paddle of paddles) {
    if (keyCode == LEFT_ARROW) {
      PaddleIsMoving = -1;
      leftPressed = true;
      if (slow) {
        paddle.move(-2);
      } else if (invert) {
        paddle.move(7);
      } else {
        paddle.move(-7);
      }
    }
    if (keyCode == RIGHT_ARROW) {
      PaddleIsMoving = 1;
      rightPressed = true;
      if (slow) {
        paddle.move(2);
      } else if (invert) {
        paddle.move(-7);
      } else {
        paddle.move(7);
      }
    }
    if (key == ' ') {
      pucks[0].yspeed = 4;
      pucks[0].xspeed = 3;
      gameStart = true;
    }
  }
}
//Function which means the paddles stop when the keys are released
function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    leftPressed = false;
  }
  if (keyCode == RIGHT_ARROW) {
    rightPressed = false;
  }
  for (let paddle of paddles) {
    if (leftPressed === false && rightPressed === false) {
      paddle.move(0);
    }
  }
}