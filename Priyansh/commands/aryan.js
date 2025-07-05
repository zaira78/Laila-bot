const fs = require("fs");
module.exports.config = {
	name: "Aryan",
    version: "1.0.1",
	hasPermssion: 2,
	credits: "VanHung - Fixed by LTD", 
	description: "hihi",
	commandCategory: "no prefix",
	usages: "🙂",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Zaira")==0 || event.body.indexOf("zaira")==0 || event.body.indexOf("Alicca")==0 || event.body.indexOf("alicca")==0) {
		var msg = {
				body: "BOSS BUSSY HAIN ABHI WAIT KRO FREE HOTY AJYEGY MA UNKO BATA DUGI K AP NY YAD KYA BOSS KO🙂🌍🌸",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤦🏻‍♀️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
