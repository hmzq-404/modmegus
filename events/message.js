"use strict";

const moderation = require("../src/moderation.js");



module.exports = {
  name: "message",
  description: "",
  
  async execute(message) {
    //Exit if author is bot or message is DM
    if (message.author.bot || message.guild === undefined) return;
    
    if (message.member.hasPermission("ADMINISTRATOR") === false) {
      moderation.moderateMessage(message);
    }
    
  }
}