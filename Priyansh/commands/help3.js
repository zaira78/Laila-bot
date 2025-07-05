module.exports.config = {
    name: "help3",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SHANKAR-SUMAN",
    description: "beginners guide",
    usages: "[all/-a] [number of pages]",
    commandCategory: "guides",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args }) {
    const { commands } = global.client;
    const { threadID } = event;
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    
    const commandGroups = new Map();
    const imgP = [];
    
    for (const command of commands.values()) {
        const category = command.config.commandCategory.toUpperCase();
        if (!commandGroups.has(category)) {
            commandGroups.set(category, []);
        }
        commandGroups.get(category).push(`✪${command.config.name}`);
    }
  
    let message = "";
    for (const [category, commands] of commandGroups.entries()) {
        message += `╭────────────✦\n│  ${category}\n├───✦\n`;
        message += `${commands.join(" │")}\n`;
        message += "├───✦\n";
        message += "╰───────────⧕\n\n";
    }
    
    message += `╭────────────✦\n│ »      ☆✦⃝𝘼𝙥𝙠𝙞 𝙇𝙖⃟𝙞𝙡𝙖☆ 
    《${commands.size} commands》 
    𝓬𝓻𝓮𝓭𝓲𝓽 ● 𝓜𝓻𝓼.☆𝓐𝓻𝓼𝓪𝓵𝓪𝓷\n│ » 𝗧𝗛𝟯'𝗪☆𝆺𝅥⃝𝗭𝗔𝗜𝗥⃟𝗔\n𝓯𝓮𝓮𝓵 𝓽𝓱𝓮 𝓹𝓸𝔀𝓮𝓻 𝓸𝓯 𝓜𝓻𝓼.𝓐𝓻𝓼𝓪𝓵𝓪𝓷\n╰────────────✦`;
    
    return api.sendMessage(message, threadID, (error, info) => {
        if (error) console.log(error);
    });
}
