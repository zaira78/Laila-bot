const fs = require("fs");
module.exports.config = {
	name: "sweety",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sub",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("adii")==0 || event.body.indexOf("Adii")==0 || event.body.indexOf("ADII")==0 || event.body.indexOf("Ahad")==0) {
		var msg = {
				body: "𝐘𝐄 𝐋𝐎 𝗠𝗢𝗜𝗭 𝗞𝗘 𝗣𝗔𝗣𝗔 𝐀𝐀 𝐆𝐘𝗘😂",
				attachment: fs.createReadStream(__dirname + `/noprefix/sweety.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤭", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
