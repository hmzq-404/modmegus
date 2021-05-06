"use strict";

const fs = require("fs");
const {client, MessageAttachment} = require("../src/client.js");
const utils = require("../src/utils.js");


module.exports = {
  name: "memeTime",
  description: "Posts a memes everyday at specified UTC time",
  interval: 3600000, //1 hour
  
  async execute() {
    let currentDate = new Date();
    if (currentDate.getUTCHours() !== 8) return;
    
    //Get random meme
    fs.readdir("./memes", (err, files) => {
      if (err) throw new Error(err);
        
      let index = utils.randomInt(0, files.length);
      let randomMeme = `./memes/${files[index]}`;
      let memeAttachment = new MessageAttachment(fs.readFileSync(randomMeme));

      //Send meme
      utils.bulkSend("Hello @everyone! Here's today's meme of the day:", "memes");
      utils.bulkSend(memeAttachment, "memes");

      //Delete file
      fs.unlinkSync(randomMeme);
    });
  }
}