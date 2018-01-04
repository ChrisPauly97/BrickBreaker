"use strict";
class Puck {
  constructor(r, xspeed, yspeed, x, y) {
      this.r = r;
      this.xspeed = xspeed;
      this.yspeed = yspeed;
      this.x = x;
      this.y = y;
    }
    // Draws the puck at the position defined in update
  show() {
      push();
      fill(0,0,255);
      ellipse(this.x, this.y, 2 * this.r);
      pop();
    }
    // Reset the pucks color and position
  reset() {
    if(gameStart == false){
      this.xspeed = 0;
      this.yspeed = 0;
      this.x = width / 2;
      this.y = height / 2;
    }
    gameStart = false;
  }
  update() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  xEdges() {
    if (this.y + this.r > 400) {
      this.reset();
    } else if (this.y - this.r < 0) {
      this.yspeed *= -1;
    }
  }
  yEdges() {
    if (this.x - this.r < 0 || this.x + this.r > width) {
      this.xspeed *= -1;
    }
  }
  addMomentum() {
    if (leftPressed === true && this.xspeed < 5) {
      this.xspeed += -3;
    } else if (rightPressed === true && this.xspeed < 5) {
      this.xspeed += 3;
    }
  }
}
