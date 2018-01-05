// Defines a brick object
class Brick{
  constructor(health, x,y,width,height,extra){
    this.health = health;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.extra = extra;
  }
  // Displays the brick object based on its health
  show(){
    push();
    switch (this.health) {
      case 3:
      fill(255,0,0);
      break;

      case 2:
      fill(0,255,0);
      break;

      case 1:
      fill(255);
      break;

      case 0:
      fill(0);
      break;

      default:
      fill(255);
      break;
    }
    rect(this.x,this.y,this.width,this.height);
    pop();
  }

  // changes the health if a collision has occurred
  checkHealth(puck,hit){
    if(hit){
      if(this.health >= 1){
        this.health -=1;
      }else if(this.health == 0){
        this.health == 0;
      }
    }
  }

  // Display that the brick gives a bonus ball
  extraBall(){
    push();
    textSize(12);
    noStroke();
    fill(0,0,255);
    ellipse(this.x + this.width/2,this.y + this.height/2,10);
    pop();
  }
}
