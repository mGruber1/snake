"use strict";

export default class Cake {
  constructor() {
    this.x = 50;
    this.y = 50;
    this.width = 10;
    this.height = 10;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    let randomNumX = Math.round(Math.random() * 640);
    let randomNumY = Math.round(Math.random() * 480);
    if (randomNumX >= this.x + 640) {
      this.x = this.x - this.width;
    }
    this.x = randomNumX;
    if (randomNumY >= this.y + 480) {
      this.y = this.y - this.height;
    }
    this.y = randomNumY;
  }
}
