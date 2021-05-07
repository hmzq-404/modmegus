"use strict";

const {client, loadClient} = require("./src/client.js");

const express = require("express");
const server = express();
const PORT = process.env.PORT || 3000


server.get("/", (req, res) => {
  res.send("Server is live!")
});

server.listen(PORT, () => {
  console.log("Server is live!")
});


loadClient();