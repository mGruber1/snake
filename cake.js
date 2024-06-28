"use strict";

export default class Cake {
  constructor(gameFieldWidth, gameFieldHeight) {
    this.x = 50;
    this.y = 50;
    this.width = 10;
    this.height = 10;
    this.gameFieldWidth = gameFieldWidth;
    this.gameFieldHeight = gameFieldHeight;
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    let randomNumX = Math.round(Math.random() * this.gameFieldWidth);
    let randomNumY = Math.round(Math.random() * this.gameFieldHeight);
    if (randomNumX >= this.x + this.gameFieldWidth) {
      this.x = this.x - this.width;
    }
    this.x = randomNumX;
    if (randomNumY >= this.y + this.gameFieldHeight) {
      this.y = this.y - this.height;
    }
    this.y = randomNumY;
  }
}
