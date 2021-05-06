"use strict";

const {client, loadClient} = require("./src/client.js");

const express = require("express");
const server = express();
const port = 3000;


server.get("/", (req, res) => {
  res.send("Server is live!")
});

server.listen(port, () => {
  console.log(`Server listening at port ${port}.`)
});


loadClient();