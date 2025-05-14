module.exports.config = {
  name: "uid",
  version: "1.0.0",
  permission: 0,
  credits: "Aaryan (fixed by ChatGPT)",
  usePrefix: false,
  description: "Get user ID from reply, mention, or link.",
  commandCategory: "without prefix",
  cooldowns: 5
};

module.exports.run = async function({ event, api, args, Users }) {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const axios = global.nodemodule["axios"];
  const accessToken = "6628568379|c1e620fa708a1d5696fb991c1bde5662";
  let uid, name;

  // Helper function to download and send profile pic
  const sendProfile = async (uid, threadID, messageID) => {
    const callback = () => api.sendMessage({
      body: `=== [ 𝗨𝗜𝗗 𝗨𝗦𝗘𝗥 ] ====\n━━━━━━━━━━━━━━━━━━\n[ ▶️]➜ 𝗜𝗗: ${uid}\n[ ▶️]➜ 𝗜𝗕: m.me/${uid}\n[ ▶️]➜ 𝗟𝗶𝗻𝗸𝗳𝗯: https://www.facebook.com/profile.php?id=${uid}\n━━━━━━━━━━━━━━━━━━`,
      attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), messageID);

    request(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=${accessToken}`)
      .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
      .on('close', () => callback());
  };

  try {
    if (event.type === "message_reply") {
      uid = event.messageReply.senderID;
      await sendProfile(uid, event.threadID, event.messageID);
    } else if (!args[0]) {
      uid = event.senderID;
      await sendProfile(uid, event.threadID, event.messageID);
    } else if (args[0].includes(".com/")) {
      uid = await api.getUID(args[0]);
      await sendProfile(uid, event.threadID, event.messageID);
    } else if (args.join().includes("@")) {
      uid = Object.keys(event.mentions)[0];
      await sendProfile(uid, event.threadID, event.messageID);
    } else {
      return api.sendMessage("Invalid input. Please reply to a message, mention a user, or provide a Facebook profile link.", event.threadID, event.messageID);
    }
  } catch (error) {
    console.error("UID command error:", error);
    return api.sendMessage("An error occurred while retrieving the UID.", event.threadID, event.messageID);
  }
};
