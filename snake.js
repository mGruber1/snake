"use strict";

export default class Snake {
  constructor(gameFieldWidth, gameFieldHeight) {
    this.x = 0;
    this.y = 0;
    this.speed = 3;
    this.width = 20;
    this.height = 20;
    this.length = 2;
    this.direction = "";
    this.gameFieldWidth = gameFieldWidth;
    this.gameFieldHeight = gameFieldHeight;
    this.snakeBody = [];
  }

  draw(ctx) {
    ctx.fillStyle = "green";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // Paint snakeBody

    if (this.snakeBody.length !== 0) {
      for (let bodyPart of this.snakeBody) {
        ctx.fillStyle = "black";
        ctx.fillRect(bodyPart.x, bodyPart.y, this.width, this.height);
      }
    }
  }

  update() {
    switch (this.direction) {
      case "right":
        if (this.x >= this.gameFieldWidth) {
          this.x = 0 - this.width;
        }
        this.x += this.speed;

        if (this.snakeBody.length !== 0) {
          this.snakeBody[0].x = this.x - this.width;
          this.snakeBody[0].y = this.y;
        }

        break;
      case "left":
        if (this.x + this.width <= 0) {
          this.x = this.gameFieldWidth;
        }
        this.x -= this.speed;

        if (this.snakeBody.length !== 0) {
          this.snakeBody[0].x = this.x + this.width;
          this.snakeBody[0].y = this.y;
        }
        break;
      case "up":
        if (this.y + this.height <= 0) {
          this.y = this.gameFieldHeight;
        }
        this.y -= this.speed;

        if (this.snakeBody.length !== 0) {
          this.snakeBody[0].x = this.x;
          this.snakeBody[0].y = this.y + this.height;
        }
        break;
      case "down":
        if (this.y >= this.gameFieldHeight) {
          this.y = 0 - this.height;
        }
        this.y += this.speed;

        if (this.snakeBody.length !== 0) {
          this.snakeBody[0].x = this.x;
          this.snakeBody[0].y = this.y - this.height;
        }
        break;
    }
  }

  eat() {
    this.snakeBody.push({ x: this.x, y: this.y });
    console.log(this.snakeBody);
  }
}
