"use strict";
// Simple Paddle Movement
function checkKeys() {
  PaddleIsMoving = 0
  if (keyIsDown(LEFT_ARROW)){
    PaddleIsMoving = -1;
    paddles[0].move(-7)
    paddles[0].update(-7);
  }
  if (keyIsDown(RIGHT_ARROW)){
    PaddleIsMoving = 1;
    paddles[0].move(7)
    paddles[0].update(7);
  }

  paddles[0].move(0);
}
