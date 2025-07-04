const fs = require("fs");
module.exports.config = {
  name: "lund",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SHANKAR SUMAN", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Bot bkl") ||
     react.includes("Bot tmkc") || react.includes("Bot khassi") || react.includes("Bot bsdk") ||
react.includes("Bot chutiya") ||
react.includes("Bot lund")) {
    var msg = {
        body: `𝘛𝘦𝘳𝘪 𝘮𝘢𝘢 𝘬𝘪 𝘬𝘶𝘴𝘴 𝘩𝘦𝘦𝘳𝘢𝘮𝘢𝘯𝘥𝘪 𝘬𝘪 𝘱𝘦𝘥𝘢𝘸𝘢𝘳`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖕🏻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
