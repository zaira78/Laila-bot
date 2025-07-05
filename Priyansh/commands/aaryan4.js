const fs = require("fs");
module.exports.config = {
	name: "imoge3",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("🙂") ||
     react.includes("🙂") || react.includes("🙂") || react.includes("😃") ||
react.includes("🙂") ||
react.includes("🙂")) {
		var msg = {
				body: `𝘈𝘞𝘞𝘞𝘞,𝘈𝘕𝘋𝘈𝘙 𝘚𝘌 𝘛𝘖𝘖𝘛𝘌 𝘏𝘖 𝘛𝘖 𝘍𝘌𝘝𝘐𝘒𝘖𝘓 𝘗𝘌𝘌𝘓𝘖 𝘉𝘈𝘉𝘜🥺`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
