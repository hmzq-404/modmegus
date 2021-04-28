"use strict";

const {client} = require("./bot.js");


function randomInt(min, max) {
  const randomFloat = Math.random() * (max - min) + min;
  return Math.floor(randomFloat);
};


function getChannel(name, guild) {
  const channel = guild.channels.cache.find(ch => ch.name === name);
  return channel;
}


function getAllChannels(name) {
  let channels = [];
  client.guilds.cache.each((guild) => {
    channels.push(getChannel(name, guild));
  })
  return channels;
}


function bulkSend(message, channelName){
  for (const channel of getAllChannels(channelName)) {
    channel.send(message);
  }
}



module.exports = {
  randomInt,
  getChannel,
  getAllChannels,
  bulkSend
}