const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "shayri",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "Ranmdom a Shayri",
  commandCategory: "group",
  usages: "shayri",
  cooldowns: 2,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Teri muskurahat dil chura leti hai 😉💘",
      "Tum poochhte ho na mohabbat kisay kehte hain? Bas ek baar aankhon mein dekho 😍",
      "Tera naam jab bhi aata hai, chehra khil jaata hai 🌸❤️",
      "Dil karta hai har pal tujhe dekhun, bina wajah muskurata rahun 😊💖",
      "Tum samundar ho ya saahil? Kyun har baar kheench lete ho apni taraf 🌊😍",
      "Bina wajah tera khayal aa jaye toh samajh lo, koi dil se soch raha hai 💭💕",
      "Tujhe chhup chhup ke dekhna bhi mohabbat hai, aur tujhe hasate dekhna ibadat 💓😚",
      "Kya tujhme kuch jaadu hai? Har mulaqat ke baad dil sambhalta nahi 💫😉",
      "Tumhare bina subha ka kya maza, aur shaam bhi adhoori lagti hai 🌅❤️",
      "Dil toh har kisi ka hota hai, par tu uska khwaab hai jiska main haqdar banna chahta hoon 🥰👑"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   mess = "{name}"

  if (event.body.indexOf("Poetry") == 0 || (event.body.indexOf("poetry") == 0)) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
