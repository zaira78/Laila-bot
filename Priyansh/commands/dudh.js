const fs = require("fs");
module.exports.config = {
	name: "dudh",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "dudh",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("doodh")==0 || event.body.indexOf("DOODH")==0 || event.body.indexOf("MILK")==0 || event.body.indexOf("Milk")==0) {
		var msg = {
				body: "😋𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐃𝐎𝐎𝐃𝐇😋🤟\n\n(-❤️-)",
				attachment: fs.createReadStream(__dirname + `/cache/dudh.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍼", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
