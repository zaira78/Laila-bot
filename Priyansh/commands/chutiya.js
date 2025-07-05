const fs = require("fs");
module.exports.config = {
  name: "chutiya",
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
  if(react.includes("botchutiya") ||
     react.includes("Bot chutiya") || react.includes("CHUTIYA") || react.includes("chutiye") ||
react.includes("bot Chutiye") ||
react.includes("BOT CHUTIYE")) {
    var msg = {
        body: `${name} 𝐓𝐮 𝐜𝐡𝐮𝐭𝐢𝐲𝐚 𝐭𝐞𝐫𝐚 𝐛𝐚𝐚𝐩 𝐜𝐡𝐮𝐭𝐲𝐚 𝐭𝐞𝐫𝐞 𝐤𝐡𝐚𝐧𝐝𝐚𝐧 𝐰𝐚𝐥𝐞 𝐜𝐡𝐮𝐭𝐲𝐚 🖕🏻`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😡", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
