const DiscordCommand = require('../DiscordCommand.js');

class DiscordCommandTrump extends DiscordCommand {

  constructor(subsystem) {
    super("trump", "Murica, fuck yeah", undefined, subsystem, true);
  }

  onRun(message, permissions, args) {
    var responses = ["https://cdn.discordapp.com/attachments/134722036353204224/357313396645036033/image.jpg", "https://cdn.discordapp.com/attachments/134722036353204224/357307859412975628/1504461825252.png", "https://cdn.discordapp.com/attachments/134722036353204224/357306304030703627/image.jpg", "http://i0.kym-cdn.com/photos/images/original/001/213/930/813.jpg", "https://cdn.discordapp.com/attachments/134722036353204224/357301669312331788/image.jpg", "https://cdn.discordapp.com/attachments/134722036353204224/357278447216754689/1478453994669.png", "https://cdn.discordapp.com/attachments/134722036353204224/357278183013482496/image.jpg", "http://i.imgur.com/MQinI89.jpg", "http://i.imgur.com/FJMoq.jpg"];
    var response = responses[Math.floor(Math.random() * responses.length)];
    message.reply(response);
  }

}

module.exports = DiscordCommandTrump;
