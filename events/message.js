"use strict";

const moderation = require("../src/moderation.js");



module.exports = {
  name: "message",
  description: "",
  
  async execute(message) {
    //Exit if author is bot or message is DM
    if (message.author.bot || message.guild === null) return;
    
    //Check if message is from guild, if yes, then check if not from adim, else return false
    if (message.member.hasPermission("ADMINISTRATOR") === false) {
      moderation.moderateMessage(message);
    }
    
  }
}