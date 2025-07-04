const fs = require("fs");
module.exports.config = {
  name: "lough",
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
  if (event.body.indexOf("😁")==0 || event.body.indexOf("😅")==0 || event.body.indexOf("😄")==0 || event.body.indexOf("😃")==0) {
    var msg = {
        body: "💐𝗭𝗶𝗻𝗱𝗮𝗴𝗶 𝗷𝗲𝘀𝗶 𝗯𝗵𝗶 𝗴𝘂𝘇𝗿𝗲 𝗵𝗮𝘀𝗻𝗮 𝗸𝗼𝗶 𝘁𝘂𝗷𝗵𝘀𝗲 𝘀𝗲𝗲𝗸𝗵𝗲💐",
      }
      api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😀", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
