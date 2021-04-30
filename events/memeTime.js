"use strict";

const fs = require("fs");
const {client, MessageAttachment} = require("../src/bot.js");
const utils = require("../src/utils.js");


module.exports = {
  name: "memeTime",
  description: "Posts a memes everyday at specified UTC time",
  interval: 3600000, //1 hour
  
  execute() {
    let currentDate = new Date();
    if (currentDate.getUTCHours() !== 8) return;
    
    try {
      //Get random meme
      let memeFiles = fs.readdirSync("./memes");
      let index = utils.randomInt(0, memeFiles.length);
      let randomMeme = `./memes/${memeFiles[index]}`;
      let memeAttachment = new MessageAttachment(fs.readFileSync(randomMeme));

      //Send meme
      utils.bulkSend("Hello @everyone! Here's today's meme of the day:", "memes");
      utils.bulkSend(memeAttachment, "memes");

      //Delete file
      fs.unlinkSync(randomMeme);
    
    } catch(error) {
      console.log(error)
    }
  }
}