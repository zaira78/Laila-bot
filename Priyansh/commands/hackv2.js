const fs = require("fs-extra");
const axios = require("axios");
const { loadImage, createCanvas } = require("canvas");

module.exports.config = {
  name: "hackv2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joland Manzano",
  description: "Account hacking simulator",
  commandCategory: "Giải trí",
  usages: "@mention",
  cooldowns: 0,
  dependencies: {
    "axios": "",
    "fs-extra": ""
  }
};

module.exports.wrapText = (ctx, text, maxWidth) => {
  return new Promise(resolve => {
    if (ctx.measureText(text).width < maxWidth) return resolve([text]);
    if (ctx.measureText('W').width > maxWidth) return resolve(null);

    const words = text.split(' ');
    const lines = [];
    let line = '';

    while (words.length > 0) {
      let split = false;
      while (ctx.measureText(words[0]).width >= maxWidth) {
        const word = words[0];
        words[0] = word.slice(0, -1);
        if (split) words[1] = `${word.slice(-1)}${words[1]}`;
        else {
          split = true;
          words.splice(1, 0, word.slice(-1));
        }
      }

      if (ctx.measureText(`${line}${words[0]}`).width < maxWidth) {
        line += `${words.shift()} `;
      } else {
        lines.push(line.trim());
        line = '';
      }

      if (words.length === 0) lines.push(line.trim());
    }

    resolve(lines);
  });
};

module.exports.run = async function ({ args, Users, api, event }) {
  const pathImg = __dirname + "/cache/background.png";
  const pathAvt = __dirname + "/cache/avt.png";

  const id = Object.keys(event.mentions)[0] || event.senderID;
  if (!id) return api.sendMessage("Please mention a user to simulate the hack.", event.threadID);

  const name = await Users.getNameUser(id);

  // Background options
  const backgrounds = [
    "https://i.imgur.com/Cozetb3.jpg",
    // Add more background options here if you want
  ];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Fetch avatar
  try {
    const avatarBuffer = (await axios.get(
      `https://graph.facebook.com/${id}/picture?width=720&height=720&access_token=6628568379|c1e620fa708a1d5696fb991c1bde5662`,
      { responseType: "arraybuffer" }
    )).data;
    fs.writeFileSync(pathAvt, Buffer.from(avatarBuffer, "utf-8"));
  } catch (error) {
    return api.sendMessage("Error fetching avatar image.", event.threadID);
  }

  // Fetch background
  try {
    const bgBuffer = (await axios.get(randomBackground, { responseType: "arraybuffer" })).data;
    fs.writeFileSync(pathImg, Buffer.from(bgBuffer, "utf-8"));
  } catch (error) {
    return api.sendMessage("Error fetching background image.", event.threadID);
  }

  const baseImage = await loadImage(pathImg);
  const baseAvatar = await loadImage(pathAvt);

  const canvas = createCanvas(baseImage.width, baseImage.height);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(baseImage, 0, 0, canvas.width, canvas.height);
  ctx.font = "bold 26px Arial"; // Changed to bold Arial
  ctx.fillStyle = "#00FFFF";
  ctx.textAlign = "start"; // You can change it to "center" if needed

  const lines = await this.wrapText(ctx, name, 1160);
  ctx.fillText(lines.join('\n'), 200, 340); // Adjust text position if necessary

  ctx.drawImage(baseAvatar, 83, 280, 100, 101); // Position for avatar

  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  fs.removeSync(pathAvt);

  return api.sendMessage({
    body: `Hack simulation complete! Here's the profile mockup of ${name}.`,
    attachment: fs.createReadStream(pathImg)
  }, event.threadID, () => fs.unlinkSync(pathImg), event.messageID);
};
