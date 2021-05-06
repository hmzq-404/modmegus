"use strict";

const {client} = require("../src/client.js");


module.exports = {
  name: "ready",
  description: "Executes once client is ready",
  once: true,
  
  async execute() {
    console.log(`${client.user.tag} is live!`);
  }
}