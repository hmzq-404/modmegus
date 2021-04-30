"use strict";

const {Client, MessageAttachment} = require("discord.js");
const client = new Client();


async function loadClient() {
  await client.login(process.env["BOT_TOKEN"]);
  client.user.setActivity("Minecraft");
}


module.exports = {
  client,
  MessageAttachment,
  loadClient
}