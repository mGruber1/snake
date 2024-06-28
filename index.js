"use strict";

import Snake from "./snake.js";
import Controller from "./controller.js";
import Cake from "./cake.js";
import { rectangleOverlap } from "./collisionDetection.js";
const canvas = document.getElementById("gameField");
var ctx = canvas.getContext("2d");
const gameFieldWidth = ctx.canvas.width;
const gameFieldHeight = ctx.canvas.height;

const snake = new Snake(gameFieldWidth, gameFieldHeight);
const cake = new Cake(gameFieldWidth, gameFieldHeight);
const controller = new Controller(snake);

const animate = () => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  snake.update();
  snake.draw(ctx);
  cake.draw(ctx);

  if (rectangleOverlap(snake, cake)) {
    cake.update();
  }

  requestAnimationFrame(animate);
};

animate(ctx);
