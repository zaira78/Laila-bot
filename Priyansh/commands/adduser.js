module.exports.config = {
	name: "adduser",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Priyansh Rajput (cleaned by ChatGPT)",
	description: "Add user to group via UID or Facebook profile link",
	commandCategory: "group",
	usages: "[uid/profile_link]",
	cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
	const { threadID, messageID } = event;
	const send = msg => api.sendMessage(msg, threadID, messageID);

	if (!args[0]) return send("Please enter a Facebook UID or profile link.");

	let uid = args[0];

	// If it's a link, convert to UID
	if (uid.includes("facebook.com")) {
		try {
			uid = await api.getUID(uid);
		} catch (e) {
			return send("Failed to extract UID from link. Make sure it's a valid Facebook profile.");
		}
	}

	// Check if user is already in group
	const threadInfo = await api.getThreadInfo(threadID);
	const members = threadInfo.participantIDs.map(id => parseInt(id));
	if (members.includes(parseInt(uid))) return send("User is already in the group.");

	// Try adding user
	try {
		await api.addUserToGroup(uid, threadID);
		return send(`Successfully added user: ${uid}`);
	} catch (error) {
		return send(`Failed to add user. Possibly due to:\n- User has message restrictions\n- Your bot is not an admin\n- User disabled adds`);
	}
};
