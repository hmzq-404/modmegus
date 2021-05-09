"use strict";

const bannedContent = require("../banned_content.json");
const utils = require("../src/utils.js")


function containsBannedWords(string) {
  for (const word of bannedContent.words) {
    if (string.includes(word)) {
      return true;
    }
  }
}


async function moderateMessage(message) {
  //"My Name is Bob" => "mynameisbob"
  const cleanedMessage = message.replaceAll(" ", "").lower();
  
  if (containsBannedWords(message.content)) {
    
  }
}



module.exports = {
  moderateMessage
}