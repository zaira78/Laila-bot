const fs = require("fs");
module.exports.config = {
	name: "Tofee",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Tofee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Toffee")==0 || event.body.indexOf("TOFFEE")==0 || event.body.indexOf("tafi")==0 || event.body.indexOf("Tofi")==0) {
		var msg = {
				body: "💝 YE LO BBY TOFFEE KHAO 🍬\n\n(-❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Tofee.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍬", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
