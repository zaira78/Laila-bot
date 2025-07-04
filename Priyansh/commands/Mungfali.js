const fs = require("fs");
module.exports.config = {
	name: "mungfali",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "mungfali",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("peanut")==0 || event.body.indexOf("Peanut")==0 || event.body.indexOf("PEANUT")==0 || event.body.indexOf("Peanut")==0) {
		var msg = {
				body: "💝 YE LO BBY PEANUT KHAO 🥜\n\n(-❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/mungfali.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥜", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
