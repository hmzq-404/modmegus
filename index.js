"use strict";

const {client, loadClient} = require("./src/client.js");

const express = require("express");
const server = express();


server.get("/", (req, res) => {
  res.send("Server is live!")
});

server.listen(process.env.port || 3000, () => {
  console.log("Server is live!")
});


loadClient();