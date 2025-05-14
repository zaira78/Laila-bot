
const axios = require("axios");
const fs = require("fs-extra");
const { loadImage, createCanvas } = require("canvas");

module.exports.config = {
  name: "hack",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Generate fake hack image of mentioned user",
  commandCategory: "fun",
  usages: "@mention",
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "canvas": ""
  },
  cooldowns: 0
};

module.exports.run = async function ({ api, event }) {
  try {
    const id = Object.keys(event.mentions)[0] || event.senderID;
    if (!id) return api.sendMessage("Please mention someone to hack!", event.threadID);

    const name = event.mentions[id]?.replace("@", "") || "User";
    const pathImg = __dirname + "/cache/background.png";
    const pathAvt = __dirname + "/cache/Avtmot.png";

    // Download avatar
    try {
      const avatarResponse = await axios.get(
        `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`,
        { responseType: "arraybuffer" }
      );
      fs.writeFileSync(pathAvt, Buffer.from(avatarResponse.data));
    } catch (err) {
      return api.sendMessage("Error fetching avatar", event.threadID);
    }

    // Download background
    try {
      const backgroundResponse = await axios.get("https://i.imgur.com/VQXViKI.png", { responseType: "arraybuffer" });
      fs.writeFileSync(pathImg, Buffer.from(backgroundResponse.data));
    } catch (err) {
      fs.unlinkSync(pathAvt);
      return api.sendMessage("Error fetching background", event.threadID);
    }

    const baseImage = await loadImage(pathImg);
    const baseAvatar = await loadImage(pathAvt);

    const canvas = createCanvas(baseImage.width, baseImage.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "400 23px Arial";
    ctx.fillStyle = "#1878F3";
    ctx.textAlign = "start";
    ctx.fillText(name, 200, 497);
    ctx.drawImage(baseAvatar, 83, 437, 100, 101);

    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.unlinkSync(pathAvt);

    return api.sendMessage(
      { 
        body: `Hack simulation complete! Here's ${name}'s hacked profile:`,
        attachment: fs.createReadStream(pathImg)
      },
      event.threadID,
      () => fs.unlinkSync(pathImg),
      event.messageID
    );
  } catch (err) {
    console.error(err);
    return api.sendMessage("An error occurred while processing the command.", event.threadID);
  }
};
