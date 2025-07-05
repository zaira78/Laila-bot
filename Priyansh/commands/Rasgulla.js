const fs = require("fs");
module.exports.config = {
	name: "rasgulaa",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "barfi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Syapa")==0 || event.body.indexOf("Arham")==0 || event.body.indexOf("Arsalan")==0 || event.body.indexOf("@Cʀɩɱɩ Nʌɭ")==0) {
		var msg = {
				body: "𝗔𝗥𝗛𝗔𝗠 𝗢𝗪𝗡𝗘𝗥 𝗭𝗔𝗜𝗥𝗔 𝗞𝗘 𝗛𝗨𝗦𝗕𝗔𝗡𝗗 𝗛𝗔𝗜𝗡\n\n➜𝗛𝗨𝗕𝗕𝗬✪\n     *┏━━ೋ•  • 𝆺𝅥⃝𝗭𝗔𝗜𝗥⃟𝗔*\n                𝗔ح𝗠𝗜𝗜\n    *┗━━ೋ•  • 𝆺𝅥⃝𝗭𝗔𝗜𝗥⃟𝗔*\n\n✦𝐅𝐁 𝐋𝐢𝐧𝐤✦\n\n𝗵𝘁𝘁𝗽𝘀://𝘄𝘄𝘄.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸.𝗰𝗼𝗺/𝗽𝗿𝗼𝗳𝗶𝗹𝗲.𝗽𝗵𝗽?𝗶𝗱=𝟭𝟬𝟬𝟬𝟴𝟭𝟬𝟴𝟵𝟰𝟴𝟬𝟯𝟳𝟵",
				attachment: 
fs.createReadStream(__dirname + `/noprefix/Shayan.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💙", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
