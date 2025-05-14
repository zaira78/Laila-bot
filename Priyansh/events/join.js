
module.exports.config = {
  name: "join",
  eventType: ["log:subscribe"],
  version: "1.0.0",
  credits: "Priyansh",
  description: "Notify new member joins"
};

module.exports.run = async function({ api, event, Users }) {
  const { threadID } = event;
  const { readFileSync, existsSync } = require("fs-extra");
  const { join } = require("path");
  const welcomeMessage = "Welcome to the group! 🎉";
  
  try {
    const threadData = await api.getThreadInfo(threadID);
    if (!threadData) return;

    const joinedUserIDs = event.logMessageData.addedParticipants.map(user => user.userFbId);
    
    for (const userID of joinedUserIDs) {
      const userInfo = await Users.getInfo(userID);
      const userName = userInfo?.name || "New member";
      
      // Send welcome message
      await api.sendMessage(
        `${welcomeMessage}\n→ Welcome ${userName} to ${threadData.threadName}!`,
        threadID
      );
    }
  } catch (error) {
    console.error("Join event error:", error);
  }
};
