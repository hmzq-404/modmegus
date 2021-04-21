"use strict";

const {client} = require("./bot.js");


function randomInt(min, max) {
  const randomFloat = Math.random() * (max - min) + min;
  return Math.floor(randomFloat);
};


function getChannel(name) {
  const channel = client.channels.cache.find(ch => ch.name === name);
  return channel;
}



module.exports = {
  randomInt,
  getChannel
}