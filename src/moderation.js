"use strict";

const bannedContent = require("../banned_content.json");



function containsBannedWords(string) {
  for (const word of bannedContent.words) {
    if (string.includes(word)) {
      return true;
    }
  }
}


async function moderateMessage(message) {
  //"My Name is Bob" => "mynameisbob"
  const cleanedMessage = message.content.replace(/ /g, "").toLowerCase();
  
  if (containsBannedWords(cleanedMessage)) {
    console.log(message.content);
    
    try {
      await message.delete();
      
      await message.member.ban({"reason": "Use of innapropriate words"});
      
    } catch (error) {
      throw new Error(error);
    }
  }
}



module.exports = {
  moderateMessage
}