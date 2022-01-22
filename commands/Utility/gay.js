const {
  MessageEmbed
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const {
  duration
} = require("../../handlers/functions")
const settings = require("../../botconfig/settings.json");
module.exports = {
  name: "gay", //the command name for execution & for helpcmd [OPTIONAL]

  category: "fun",
  usage: "gay",

  cooldown: 1, //the command cooldown for execution & for helpcmd [OPTIONAL]
  description: "gay", //the command description for helpcmd [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
    try {
      //things u can directly access in an interaction!
      const {
        member,
        channelId,
        guildId,
        applicationId,
        commandName,
        deferred,
        replied,
        ephemeral,
        options,
        id,
        createdTimestamp
      } = message;
      const {
        guild
      } = member;
      function progressDef(current, total, barSize) {
        const progressDefesa = Math.round((barSize*current)/total)
      
        return '▮'.repeat(progressDefesa) + '▯'.repeat(barSize-progressDefesa)
      }
      const vida = Math.floor(Math.random() * 100) + 1;
      let lifi = progressDef(vida, 100, 10)
      const user = message.mentions.users.first() || message.author;
      const image = (`https://some-random-api.ml/canvas/gay?avatar=https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`)
      message.reply({
        embeds: [new MessageEmbed()
          .setColor(ee.color)
          .setFooter(ee.footertext, ee.footericon)
          .setImage(image)
          .setDescription(`**Clique [aqui](${image}) para baixar a imagem!**\n\n${user.username} e ${lifi} ${vida}% gay`)
          .setTitle(`${user.username}`)
          
        ]
      });
    } catch (e) {
      console.log(String(e.stack).bgRed)
    }
  }
}
