const fs = require("fs");
module.exports.config = {
  name: "inbox",
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
  if(react.includes("ib a") ||
     react.includes("Ib s") || react.includes("IB") || react.includes("INBOX") ||
react.includes("inbox") ||
react.includes("Inbox")) {
    var msg = {
        body: `𝘐𝘉 𝘉𝘜𝘓𝘈𝘛𝘌 𝘏𝘖 𝘚𝘏𝘈𝘙𝘈𝘔 𝘕𝘈𝘏𝘐 𝘈𝘈𝘛𝘐 𝘉𝘈𝘋𝘛𝘈𝘔𝘌𝘌𝘡😒`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("👀", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
