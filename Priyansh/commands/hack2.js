
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
    "axios": "",
    "fs-extra": ""
  }
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
    return resolve(lines);
  });
};

module.exports.run = async function({ api, event, args }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = require("fs-extra");
  const axios = require("axios");
  const pathImg = __dirname + "/cache/background.png";
  const pathAvt = __dirname + "/cache/avt.png";

  var id = Object.keys(event.mentions)[0] || event.senderID;
  
  let background = ["https://i.imgur.com/Cozetb3.jpg"];
  let rd = background[Math.floor(Math.random() * background.length)];

  try {
    let getAvatar = (await axios.get(
      `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )).data;
    fs.writeFileSync(pathAvt, Buffer.from(getAvatar, "utf-8"));

    let getBackground = (await axios.get(rd, {
      responseType: "arraybuffer",
    })).data;
    fs.writeFileSync(pathImg, Buffer.from(getBackground, "utf-8"));

    let baseImage = await loadImage(pathImg);
    let baseAvatar = await loadImage(pathAvt);

    let canvas = createCanvas(baseImage.width, baseImage.height);
    let ctx = canvas.getContext("2d");
    ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
    ctx.font = "400 26px Arial";
    ctx.fillStyle = "#00FFFF";
    ctx.textAlign = "start";

    let name = event.mentions[id]?.replace("@", "") || "User";
    const lines = await this.wrapText(ctx, name, 1160);
    ctx.fillText(lines.join('\n'), 200, 340);

    ctx.drawImage(baseAvatar, 83, 280, 100, 101);

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
    return api.sendMessage("Error processing command.", event.threadID, event.messageID);
  }
};
