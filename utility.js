"use strict";

function randomInt(min, max) {
  randomFloat = Math.random() * (max - min) + min;
  return Math.floor(randomFloat);
};



module.exports = {
  randomInt
}