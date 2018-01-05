"use strict";
// Defines a paddle object
class Paddle {
  constructor(xchange,x,y,width,height){
    this.xchange = xchange;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

	// Updates the position of the paddle
	update() {
		this.x += this.xchange;
		if (this.x < 0) {
			this.x = 0;
		} else if (this.x > 520) {
			this.x = 520;
		}
	}

	// Draws the paddle on a given side
	show() {
		rect(this.x, this.y, this.width, this.height);
	}
  
	// Moves the paddle by a given value
	move(value) {
		this.xchange = value;
	}
}
