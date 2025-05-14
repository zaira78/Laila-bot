
module.exports.config = {
  name: "music",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Priyansh",
  description: "Play music from YouTube",
  commandCategory: "media",
  usages: "[song name]",
  cooldowns: 5,
  dependencies: {
    "ytdl-core": "",
    "youtube-search-api": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const fs = require("fs-extra");
  const ytdl = require("ytdl-core");
  const YouTubeAPI = require("youtube-search-api");
  
  if (!args[0]) {
    return api.sendMessage("Please provide a song name!", event.threadID);
  }

  try {
    api.sendMessage("🔎 Searching and downloading your song...", event.threadID);
    
    const searchResults = await YouTubeAPI.GetListByKeyword(args.join(" "), false, 1);
    if (!searchResults || !searchResults.items[0]) {
      return api.sendMessage("⚠ Song not found!", event.threadID);
    }

    const videoId = searchResults.items[0].id;
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    
    const stream = ytdl(videoUrl, { 
      quality: 'highestaudio',
      filter: 'audioonly'
    });

    const path = __dirname + `/cache/${videoId}.mp3`;
    
    stream.pipe(fs.createWriteStream(path))
    .on('finish', () => {
      api.sendMessage(
        {
          body: `🎵 Here's your song: ${searchResults.items[0].title}`,
          attachment: fs.createReadStream(path)
        },
        event.threadID,
        () => fs.unlinkSync(path)
      );
    });
  } catch (error) {
    console.error(error);
    api.sendMessage("⚠ An error occurred while processing your request.", event.threadID);
  }
};
