"use strict";

const utils = require("../src/utils.js");


module.exports = {
  name: "guildMemberRemove",
  description: "Executes whenever a member leaves the server",
  
  execute(member) {
    const farewellString = `For some reason, ${member} vanished from the server :(`;
    
    utils.getChannel("welcome", member.guild).send(farewellString);
  }
}