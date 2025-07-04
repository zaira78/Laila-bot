module.exports.config = {
  name: "Anaya2",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Aaryan",
  description: "THIS BOT IS MR PREM SHARMA",
  commandCategory: "ADMIN-BOT-REPLY-MESSAGE",
  usages: "MENTION-BOT-ADMIN",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "1329398841821521") {
    var aid = ["1329398841821521"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = [" 𝗠𝗮𝗱𝗮𝗺 𝗷𝗶 𝗮𝗯𝗵𝗶 𝘀𝗼𝗿𝗮𝗵𝗶 𝗵𝗮𝗶𝗻  ━━•☆__❤️__🤸‍♂️", " 𝗠𝗮𝗱𝗮𝗺 𝗷𝗶 𝗯𝘂𝘀𝘆 𝗵𝗮𝗶𝗻 🏃🙅❁•═════", " ━━•☆__🤸‍♂️---❤️ ", "𝗨𝗻𝗵𝗲 𝘇𝗮𝗱𝗮 𝗽𝗮𝗿𝗲𝘀𝗵𝗮𝗻 𝗺𝗮𝘁 𝗸𝗮𝗿𝗼🥺____❤️"]
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
