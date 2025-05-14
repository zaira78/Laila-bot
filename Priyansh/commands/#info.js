module.exports.config = {
	name: "info",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "Admin and Bot info.",
	commandCategory: "info",
	cooldowns: 1,
	dependencies: {
		"request": "",
		"fs-extra": "",
		"axios": ""
	}
};

module.exports.run = async function ({ api, event }) {
	const axios = global.nodemodule["axios"];
	const request = global.nodemodule["request"];
	const fs = global.nodemodule["fs-extra"];
	const moment = require("moment-timezone");

	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);

	const juswa = moment.tz("Asia/Kolkata").format("『D/MM/YYYY』 【HH:mm:ss】");

	// Must be a direct image link, not an Imgur album/page
	const imageUrl = "https://i.imgur.com/7tpZKJM.jpg"; // Replace with a direct image URL
	const imgPath = __dirname + "/cache/juswa.jpg";

	const callback = () => api.sendMessage({
		body: `╾━╤デ╦︻(▀̿Ĺ̯▀̿ ̿)🇵🇰 𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 🇵🇰\n(⌐▀͡ ̯ʖ▀)︻̷┻̿═━一-\n
☄️Bot Name︎︎︎☄️  ${global.config.BOTNAME || "Unknown"}

🔥Bot Admin🔥☞︎︎︎ 𝐂𝐇𝐔𝐙𝐀 ☜︎︎︎✰🎁

🙈Owner Facebook link🙈👇🏻\nhttps://www.facebook.com\n
🌸Bot Prefix🌸☞︎︎︎ ${global.config.PREFIX || "!"}
♥️Bot Owner♥️ ☞︎︎︎ 𝐂𝐇𝐔𝐙𝐀☜︎︎︎✰ 

🥳 UPTIME 🥳
🌪️Today is🌪️ ☞︎︎︎ ${juswa}
⚡Bot is running⚡ ${hours}:${minutes}:${seconds}

✅ Thanks for using ${global.config.BOTNAME || "this"} bot 🖤

🦢🍒••• Here is bot owner name •••🌷💞
┏━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┓
🌸✦✧.Cʜ͢͡ʋʑ͜͡ʑʌ͓̽🐥🤩✦🌸
┗━🕊️━━°❀•°:🎀🧸💙🧸🎀:°•❀°━━💞━┛`,
		attachment: fs.createReadStream(imgPath)
	}, event.threadID, () => fs.unlinkSync(imgPath), event.messageID);

	return request(encodeURI(imageUrl)).pipe(fs.createWriteStream(imgPath)).on("close", callback);
};
