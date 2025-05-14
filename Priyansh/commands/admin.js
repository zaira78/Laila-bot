module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Show admin info with image",
  commandCategory: "Random-IMG",
  usages: "admin",
  cooldowns: 2,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];

  // Replace this with a direct image URL (must end in .jpg, .png, etc.)
  const imageLinks = [
    "https://i.imgur.com/7tpZKJM.jpg" // Example direct image link
  ];

  const imagePath = __dirname + "/cache/1.jpg";

  const callback = () => api.sendMessage({
    body: `❤️ 𝐀𝐃𝐌𝐈𝐍 𝐈𝐍𝐅𝐎 ❤️

🍒 𝗠𝗥. 𝐂𝐇𝐔𝐙𝐀 𝗕𝗔𝗕𝗨 🥀

📘 Facebook: https://www.facebook.com

📱 WhatsApp: +923243375326`,
    attachment: fs.createReadStream(imagePath)
  }, event.threadID, () => fs.unlinkSync(imagePath), event.messageID);

  request(encodeURI(imageLinks[Math.floor(Math.random() * imageLinks.length)]))
    .pipe(fs.createWriteStream(imagePath))
    .on("close", () => callback());
};
