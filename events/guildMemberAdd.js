"use strict";

const utils = require("../src/utils.js");


module.exports = {
  name: "guildMemberAdd",
  description: "Executes whenever a new user joins the server",
  
  async execute(member) {
    const welcomeString = `Welcome to the gang ${member}!  Make sure to take a look at <#${utils.getChannel("rules", member.guild).id}>`;

    utils.getChannel("welcome", member.guild).send(welcomeString);
  }
}