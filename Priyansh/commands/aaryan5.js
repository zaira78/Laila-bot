const fs = require("fs");
module.exports.config = {
	name: "aaryan5",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Aaryan", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("😒") ||
     react.includes("🙈") || react.includes("🥺") || react.includes("😗") ||
react.includes("🙄") ||
react.includes("😙")) {
		var msg = {
				body: `𝐀𝐖𝐖 𝐌𝐄𝐋𝐀 𝐁𝐀𝐁𝐔 𝐒𝐇𝐎𝐍𝐀 𝐉𝐀𝐃𝐔 𝐓𝐎𝐍𝐀 𝐍𝐀 𝐑𝐎𝐍𝐀 𝐍𝐀 𝐃𝐇𝐎𝐍𝐀 𝐍𝐀 𝐒𝐎𝐍𝐀`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😒", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }