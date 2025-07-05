const fs = require("fs");
module.exports.config = {
  name: "salu",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "FAIZ ANSARI", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "haniya",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("moiz")==0 || event.body.indexOf("Moiz")==0 || event.body.indexOf("MOIZ")==0 || event.body.indexOf("moiz")==0) {
    var msg = {
        body: "❤️𝐘𝐄 𝐋𝐎 𝗠𝗢𝗜𝗭 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
        attachment: fs.createReadStream(__dirname + `/cache/salu.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
