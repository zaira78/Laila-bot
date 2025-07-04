const fs = require("fs");
module.exports.config = {
  name: "lough2",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "VanHung - Fixed by LTD", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("😂")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😹")==0 || event.body.indexOf("😆")==0) {
    var msg = {
        body: "💐𝗛𝗮𝘀 𝗿𝗲 𝗵𝗮𝗹𝗸𝗮𝘁 𝗵𝗮𝘀, 𝗯𝗮𝗿𝗶 𝗵𝗮𝘀𝗶 𝗮𝗶 𝗻𝗮 𝘁𝗲𝗿𝗲𝗸𝗼💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤪", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
