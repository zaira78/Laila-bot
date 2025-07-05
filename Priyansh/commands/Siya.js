const fs = require("fs");
module.exports.config = {
	name: "kashish",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "FAIZ ANSARI", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "naina",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("reej")==0 || event.body.indexOf("@سـﹻﹿﹿﹻﹻﹻﹻﹿـیدہ عـﹻﹿﹿﹻﹻـریج فـﹻﹿﹿﹻﹻﹻﹻﹿـاطـﹻﹿﹿﹻﹻﹻـمہ")==0 || event.body.indexOf("reejay")==0 || event.body.indexOf("Areej")==0) {
		var msg = {
				body: "❤️𝐘𝐄 𝐋𝐎 𝗥𝗘𝗘𝗝𝗔𝗬 𝐉𝐈 𝐀 𝐆𝐀𝐈🙈",
				attachment: fs.createReadStream(__dirname + `/cache/kashish.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
