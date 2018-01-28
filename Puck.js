//Defines a puck object
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
    if(lives == 0){
      createBricks();
      lives = 3;
    }
    this.xspeed = 2;
    this.yspeed = 4;
    this.x = width / 2;
    this.y = height / 2;
  }

  // Move the puck based on its speed
  update() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }

  // Check if the puck is off-screen
  xEdges() {
    if (this.y + this.r > 400 && pucks.length == 1) {
      this.reset();
      lives--;
    } else if(pucks.length > 1 && this.y + this.r > 400){
        pucks.splice(pucks.indexOf(this),1)
    } else if (this.y - this.r < 0) {
      this.yspeed *= -1;
    }
  }

  // Logic to bounce the puck off the left and right side
  yEdges() {
    if (this.x - this.r < 0 || this.x + this.r > width) {
      this.xspeed *= -1;
    }
  }

  // If the paddle was moving during the collision, add momentum
  addMomentum() {
    if (PaddleIsMoving == -1 && this.xspeed < 5) {
      this.xspeed += -3;
    } else if (PaddleIsMoving == 1 && this.xspeed < 5) {
      this.xspeed += 3;
    }
  }
}
