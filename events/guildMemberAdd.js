"use strict";

const utils = require("../utils.js");


module.exports = {
  name: "guildMemberAdd",
  description: "Executes whenever a new user joins the server",
  
  execute(member) {
    const welcomeString = `Welcome to the gang ${member}! Make sure to take a look at <#${utils.getChannel("rules").id}> and <#${utils.getChannel("channels-info").id}>`;

    utils.getChannel("welcome").send(welcomeString);
  }
}