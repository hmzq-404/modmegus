"use strict";

const fs = require("fs");
const {Client, MessageAttachment} = require("discord.js");
const client = new Client();



async function loadEvents() {
  //Read events directory
  fs.readdir("./events", (err, files) => {
    if (err) throw new Error(err);
    
    for (const file of files) {
      const event = require(`../events/${file}`);
  
      //Set up event listeners
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
      } else {
        client.on(event.name, (...args) => event.execute(...args));
      }
  
      //Set intervals for timed events 
      if (event.interval) {
        setInterval(() => client.emit(event.name), event.interval);
      }
    }
  });
}


async function loadClient() {
  try {
    await Promise.all([
      client.login(process.env["BOT_TOKEN"]),
      loadEvents()
    ]);
    
    client.user.setActivity("Minecraft");
    
  } catch (error) {
    throw new Error(error)
  }
  
}



module.exports = {
  client,
  MessageAttachment,
  loadClient
}