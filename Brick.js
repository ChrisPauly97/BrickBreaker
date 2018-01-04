"use strict";
class Brick{
  constructor(health, x,y,width,height,extra){
    this.health = health;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.extra = extra;
  }

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
  checkHealth(puck,hit){
    if(hit){
      if(this.health >= 1){
        this.health -=1;
      }else if(this.health == 0){
        this.health == 0;
      }
    }
  }
}
