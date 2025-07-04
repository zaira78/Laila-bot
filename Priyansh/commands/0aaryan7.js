const fs = require("fs");
module.exports.config = {
	name: "gutkha",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "Nitin bauddh(Nick)", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😝")==0 || event.body.indexOf("😜")==0 || event.body.indexOf("🤪")==0 || event.body.indexOf("😛")==0) {
		var msg = {
				body: "💐𝗔𝗶𝗹𝗮 𝗶𝘁𝗻𝗶 𝗹𝗮𝗺𝗯𝗶 𝘇𝗮𝗯𝗮𝗻💐",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
