"use strict";

export default class Snake {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.speed = 3;
    this.width = 20;
    this.height = 20;
    this.length = 2;
    this.direction = "";
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    switch (this.direction) {
      case "right":
        if (this.x + this.width >= 640) {
          this.x = 0;
        }
        this.x += this.speed;
        break;
      case "left":
        if (this.x + this.width <= 0) {
          this.x = 640;
        }
        this.x -= this.speed;
        break;
      case "up":
        if (this.y + this.height <= 0) {
          this.y = 480;
        }
        this.y -= this.speed;
        break;
      case "down":
        if (this.y + this.height >= 480) {
          this.y = 0;
        }
        this.y += this.speed;
        break;
    }
  }

  eat() {
    this.width = this.width * this.length;
  }
}
