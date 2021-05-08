"use strict";

const bannedContent = require("../banned_content.json");



async function hasBannedWords(message) {
  //"My Name is Bob" => "mynameisbob"
  const cleanedMessage = message.replaceAll(" ", "").lower();
  
  for (const word of bannedContent.words) {
    
  }
  
}



module.exports = {
  hasBannedWords
}