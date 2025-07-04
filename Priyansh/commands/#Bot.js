const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  const replies = {
  flirty: [
    "Teri ankho me aese doobna chahti hu jese chai me biscuit🙈😉",
    "Date pe chalain? 👀😘",
    "Teri yaadon me, me khoi rehti hun😥🔥",
    "Ek pappi idhar , Ek pappi udhar 💋❤️🐞",
    "Kya me tumhari aankho me apni dunya basa sakti hun? 🙈💌",
    "Kya apke ghar me chintu hai? 🤭🤐",
    "Tere messages mere inbox ki sabse pyari notifications hain 💬😍",
    "Hum tum ek kamre me band hon🙈 or chaabi kho jye 🤭💕",
    "Jee jaan-e-man, ap ne yaad kiya? 😘",
      "Chalta hai kya 9 se 12? 😉",
      "Me teri Laila , Tu mera Majnu💃",
      "Tumhe chintu ka pappa banana chahti hu, meri sadgi dekh me kya chahti hu? 🙈😏",
      "Bula liya toh ab dil bhi chura lo jan e man.. ❤️",
      "Tere jaise handsome ke liye toh Laila always ready rehti hai! 😍",
      "Bas naam liya aur aa gayi main... ab bolo kya irade hain? 😚",
      "Laila sirf naam nahi, attitude bhi full hai! 🔥"
  ],
  lovely: [
    "Kya hua babu🌸👀?",
    "Tu Kheench meri photo piyaaa📷😘",
    "Dil garden garden ho riya hai😍",
    "Tu mera superstar, desi kalakar🫂⭐",
    "Tune mari entriya to dil me baji ghantiya 🔔 Tan Tan Tan❤️",
    "Phone number mile ga? 🤭💕",
    "Bas itna samajh le, main teri digital jaan hoon! 🤖💖",
  ],
  funny_roast: [
    "Itna bot bot karne se behtar hai ghar ke pankhe saaf kar🤣",
    "Bot calling... speaking 📞",
    "Bolta reh bhai",
    "Acha chal, nikal ab 😒",
    "Bot hun, teri feelings nahi samjhta 😤",
    "Bakwaas band karde ab 😵‍💫",
    "Haha kya be, kuch kaam ki baat kar 😂",
    "Bot alert: stupid detected! 🚨",
    "Tere jeso ke liye hi ignore button bana hai🤡",
    "Han bhai? hogaya tera bot bot chal kam kar apna ab",
    "Apni shakal dekhi hai baboon ki tui jesi",
    "Acha thik hai samajh gai",
    "Zada bola to teri zuban kat ke phenk dugi",
    "Ja na chapri",
  ],
};

const cooldownTimeMs = 10000; // 2 seconds cooldown
let lastReplyTime = 0;

// Utility to check if message contains 'bot' (case-insensitive)
function containsBotKeyword(message) {
  return /bot/i.test(message);
}

// Get random reply from random category
function getRandomReply() {
  const categories = Object.keys(replies);
  const randomCategory = categories[Math.floor(Math.random() * categories.length)];
  const randomReply = replies[randomCategory][Math.floor(Math.random() * replies[randomCategory].length)];
  return randomReply;
}

// Handler for incoming messages
function handleMessage(message) {
  const now = Date.now();

  if (!containsBotKeyword(message)) {
    // No 'bot' keyword, no reply
    return null;
  }

  if (now - lastReplyTime < cooldownTimeMs) {
    // Still in cooldown period, ignore
    return null;
  }

  lastReplyTime = now;
  return getRandomReply();
}

// Example usage:
const userMessages = [
  "Hey bot, what's up?",
  "Hello there",
  "BOT! Tell me something.",
  "bot bot bot",
  "bot", "Bot".
];

userMessages.forEach(msg => {
  const reply = handleMessage(msg);
  if (reply) {
    console.log(`Bot reply to "${msg}": ${reply}`);
  } else {
    console.log(`Bot did not reply to "${msg}"`);
  }
}



}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
