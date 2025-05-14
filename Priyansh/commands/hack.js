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
          "fs-extra": ""
    },
    cooldowns: 0
  };

module.exports.wrapText = (ctx, name, maxWidth) => {
  return new Promise(resolve => {
    if (ctx.measureText(name).width < maxWidth) return resolve([name]);
    if (ctx.measureText('W').width > maxWidth) return resolve(null);
    const words = name.split(' ');
    const lines = [];
    let line = '';
    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const temp = words[0];
        words[0] = temp.slice(0, -1);
        if (split) words[1] = `${temp.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, temp.slice(-1));
        }
      }
      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) line += `${words.shift()} `;
      else {
        lines.push(line.trim());
        line = '';
      }
      if (words.length === 0) lines.push(line.trim());
    }
    resolve(lines);
  });
};

const axios = require("axios");
const fs = require("fs-extra");

module.exports.run = async function({ api, event, args }) {
  const pathImg = __dirname + "/cache/background.png";
  const pathAvt = __dirname + "/cache/Avtmot.png";

  try {
    const id = Object.keys(event.mentions)[0] || event.senderID;
    const name = await Users.getNameUser(id);
    const backgroundUrl = "https://i.imgur.com/VQXViKI.png";

    // Download avatar
    const avatarBuffer = (
      await axios.get(
        `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`,
        { responseType: "arraybuffer" }
      )
    ).data;
    fs.writeFileSync(pathAvt, Buffer.from(avatarBuffer, "utf-8"));

    // Download background
    const backgroundBuffer = (
      await axios.get(backgroundUrl, { responseType: "arraybuffer" })
    ).data;
    fs.writeFileSync(pathImg, Buffer.from(backgroundBuffer, "utf-8"));

    const baseImage = await loadImage(pathImg);
    const baseAvatar = await loadImage(pathAvt);

    const canvas = createCanvas(baseImage.width, baseImage.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "400 23px Arial";
    ctx.fillStyle = "#1878F3";
    ctx.textAlign = "start";

    const lines = await this.wrapText(ctx, name, 1160);
    ctx.fillText(lines.join('\n'), 200, 497);

    ctx.drawImage(baseAvatar, 83, 437, 100, 101);

    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(pathImg, imageBuffer);
    fs.removeSync(pathAvt);

    return api.sendMessage({
      body: `Hack simulation complete! Here's ${name}'s hacked profile:`,
      attachment: fs.createReadStream(pathImg)
    }, event.threadID, () => fs.unlinkSync(pathImg), event.messageID);
  } catch (err) {
    console.error(err);
    return api.sendMessage("KISI KO MENTION DE KR TRY KR NAI TO COMMAND WAR GI HAI 🧐", event.threadID);
  }
};