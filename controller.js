"use strict";

export default class Controller {
  constructor(snake) {
    document.addEventListener("keydown", (event) => {
      this.handleKeypress(event, snake);
    });
  }

  handleKeypress(event, snake) {
    switch (event.key) {
      case "d":
        snake.direction = "right";
        break;
      case "a":
        snake.direction = "left";
        break;
      case "w":
        snake.direction = "up";
        break;
      case "s":
        snake.direction = "down";
        break;
    }
  }
}
