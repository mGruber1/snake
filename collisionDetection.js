"use strict";

export const rectangleOverlap = (rectA, rectB) => {
  return (
    rectA.x + rectA.width >= rectB.x &&
    rectA.x <= rectB.x + rectB.width &&
    rectA.y + rectA.height >= rectB.y &&
    rectA.y <= rectB.y + rectB.height
  );
};
