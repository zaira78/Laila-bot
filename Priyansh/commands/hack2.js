
const { loadImage, createCanvas } = require("canvas");
const fs = require("fs-extra");
const axios = require("axios");

module.exports.config = {
  name: "hackv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Priyansh",
  description: "Simulated account hacking (joke command)", 
  commandCategory: "fun",
  usages: "@mention",
  cooldowns: 5,
  dependencies: {
    "canvas": "",
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const pathImg = __dirname + "/cache/background.png";
  const pathAvt = __dirname + "/cache/avt.png";

  try {
    var id = Object.keys(event.mentions)[0] || event.senderID;
    let name = event.mentions[id]?.replace("@", "") || "User";

    let avatarResponse = await axios.get(
      `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    );
    fs.writeFileSync(pathAvt, Buffer.from(avatarResponse.data, 'binary'));

    let bgResponse = await axios.get("https://i.imgur.com/Cozetb3.jpg", { responseType: "arraybuffer" });
    fs.writeFileSync(pathImg, Buffer.from(bgResponse.data, 'binary'));

    let baseImage = await loadImage(pathImg);
    let baseAvatar = await loadImage(pathAvt);

    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");

    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(baseAvatar, 83, 280, 100, 101);
    
    ctx.font = "400 26px Arial";
    ctx.fillStyle = "#00FFFF";
    ctx.textAlign = "start";
    ctx.fillText(name, 200, 340);

    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);

    return api.sendMessage(
      { attachment: fs.createReadStream(pathImg) },
      event.threadID,
      () => {
        fs.unlinkSync(pathImg);
        fs.unlinkSync(pathAvt);
      },
      event.messageID
    );
  } catch (error) {
    console.error(error);
    return api.sendMessage("Error processing command. Please try again later.", event.threadID, event.messageID);
  }
};
