const fs = require("fs");
module.exports.config = {
	name: "Aadi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MR AARYAN", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "aadu",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Aadi")==0 || event.body.indexOf("@Chuza")==0 || event.body.indexOf("aadi")==0 || event.body.indexOf("Ruhi ka babu")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐀𝐏𝐊𝐄 𝐂𝐇𝐔𝐙𝐀 𝐉𝐈 𝐀 𝐆𝐀𝐘𝐄🙈",
				attachment: fs.createReadStream(__dirname + `/cache/balam.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }