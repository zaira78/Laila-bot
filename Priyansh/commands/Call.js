module.exports.config = {
  name: "call",
  version: "7.3.1",
  hasPermssion: 0,
  credits: "John Lester", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
  var { threadID, messageID } = event;
  var name = await Users.getNameUser(event.senderID);
  if (event.body.indexOf("call aa")>=0 || event.body.indexOf("Call a")>=0 || event.body.indexOf("CALL")>=0 || event.body.indexOf("Bot call")>=0 || event.body.indexOf("CLL")>=0 || event.body.indexOf("CL")>=0 || event.body.indexOf("Call aao")>=0 || event.body.indexOf("Call tapko")>=0 || event.body.indexOf("call tapko")>=0 || event.body.indexOf("Call bot")>=0 ) { 
    var msg = {
        body: ` ${name} 𝗬𝗮𝗿 𝗺𝗲 𝗸𝗲𝘀𝗲 𝗰𝗮𝗹𝗹 𝗮𝗼𝘂𝗻 𝗺𝗲 𝘁𝗼 𝗯𝗼𝘁 𝗵𝘂 𝗻𝗮🥺🥺👈`
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
