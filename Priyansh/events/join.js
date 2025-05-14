
module.exports.config = {
  name: "join",
  eventType: ["log:subscribe"],
  version: "1.0.0",
  credits: "Priyansh",
  description: "Notify group member changes"
};

module.exports.run = async function({ api, event, Users }) {
  const { threadID } = event;
  const { participantIDs } = await api.getThreadInfo(threadID);
  
  const botID = api.getCurrentUserID();
  const joinIDs = event.logMessageData.addedParticipants.map(user => user.userFbId);
  
  if (joinIDs.includes(botID)) {
    return api.sendMessage(`Connected successfully! Thanks for adding me.`, threadID);
  }

  for (const id of joinIDs) {
    const userName = await Users.getNameUser(id);
    const welcomeMessage = `Welcome ${userName} to the group! 👋`;
    api.sendMessage(welcomeMessage, threadID);
  }
};
