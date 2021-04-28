"use strict";

const utils = require("../utils.js");


module.exports = {
  name: "guildMemberAdd",
  description: "Executes whenever a new user joins the server",
  
  execute(member) {
    const welcomeString = `Welcome to the gang ${member}! This server is an epic place for friends to hangout and have fun. Make sure to take a look at <#${utils.getChannel("rules").id}>`;

    utils.getChannel("welcome", member.guild).send(welcomeString);
  }
}