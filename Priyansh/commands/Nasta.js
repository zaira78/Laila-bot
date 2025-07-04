const fs = require("fs");
module.exports.config = {
	name: "nasta",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐌𝐫.𝐀𝐚𝐫𝐲𝐚𝐧", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "nasta",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("NASHTA")==0 || event.body.indexOf("breakfast")==0 || event.body.indexOf("Breakfast")==0 || event.body.indexOf("Nashta")==0) {
		var msg = {
				body: "💝 YE LO BBY NASTA KARLO🫓\n\n(-❤️-)",
				attachment: 
fs.createReadStream(__dirname + `/cache/Nasta.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫓", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
