const fs = require("fs");
module.exports.config = {
	name: "biskit",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "biskit",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("biscuit")==0 || event.body.indexOf("Biscuit")==0 || event.body.indexOf("BISCUIT")==0 || event.body.indexOf("Biskut")==0) {
		var msg = {
				body: "💝𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐁𝐈𝐒𝐂𝐔𝐈𝐓 𝐊𝐇𝐀𝐎🤟\n\n(-❤️-)",
				attachment: fs.createReadStream(__dirname + `/cache/biskit.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍪", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
