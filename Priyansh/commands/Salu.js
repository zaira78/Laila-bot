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
  if (event.body.indexOf("@Salu Shriwastav")==0 || event.body.indexOf("Salu")==0 || event.body.indexOf("salu")==0 || event.body.indexOf("admin ki janu")==0) {
    var msg = {
        body: "❤️𝐘𝐄 𝐋𝐎 𝐒𝐀𝐋𝐔 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
        attachment: fs.createReadStream(__dirname + `/cache/salu.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
