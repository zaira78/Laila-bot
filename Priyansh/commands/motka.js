module.exports.config = {
  name: "motka",
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
  if (event.body.indexOf("KUTTA")>=0 || event.body.indexOf("Kutta")>=0 || event.body.indexOf("Kutte")>=0 || event.body.indexOf("Kutte")>=0 || event.body.indexOf("kutte")>=0 || event.body.indexOf("kute")>=0 || event.body.indexOf("kutta")>=0 || event.body.indexOf("kuta")>=0 || event.body.indexOf("Kuta")>=0 || event.body.indexOf("kutta")>=0 ) { 
    var msg = {
        body: `  ${name} Tu kutta me to bot hu😝 `
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🐶", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
