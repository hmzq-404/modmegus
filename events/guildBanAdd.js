"use strict";

const utils = require("../src/utils.js")



module.exports = {
  name: "guildBanAdd",
  description: "",
  
  async execute(guild, user) {
    utils.getChannel("welcome", guild)
      .send(`${user} was struck by the banhammer!`);
  }
}