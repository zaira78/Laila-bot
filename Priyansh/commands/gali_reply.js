const fs = require("fs");
module.exports.config = {
	name: "gali5",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "no prefix",
	commandCategory: "no prefix",
	usages: "abal",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("bsdk")==0 || event.body.indexOf("mkc")==0 || event.body.indexOf("tmkc")==0 || event.body.indexOf("bkl")==0 || event.body.indexOf("chutiye")==0 || event.body.indexOf("chutiya")==0 || event.body.indexOf("gand mara")==0 || event.body.indexOf("behenchod")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("madarchod")==0 || event.body.indexOf("Bsdke")==0 || event.body.indexOf("gandu")==0) {
		var msg = {
				body: "Gali q Dete Ho Lund Katke Hath M rakh Dungi😒🔪",
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
