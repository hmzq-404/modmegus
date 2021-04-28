"use strict";

const fs = require("fs");
const {client} = require("./bot.js");


//Event Handler
const eventFiles = fs.readdirSync("./events");

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}


//Tries to post a meme every hour
setInterval(() => {
  client.emit("memeTime");
}, 3600000);



client.login(process.env["BOT_TOKEN"]);