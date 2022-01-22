const Discord = require("discord.js");
const config = require(`./botconfig/config.json`);
const settings = require(`./botconfig/settings.json`);

const filters = require(`./botconfig/filters.json`);
const colors = require("colors");
const Enmap = require("enmap");
const fs = require('fs');
const path = require('path');

const client = new Discord.Client({
    shards: "auto",
    restTimeOffset: 0,
    allowedMentions: {
      parse: [ ],
      repliedUser: false,
    },
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
    intents: [ 
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    ],
    presence: {
      activity: {
        name: `!help`, 
        type: "Competing", 
      },
      status: "Competing"
    }
});
client.on('rateLimit', (info) => {
  console.log(`Rate limit hit `)
})


client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);
client.allEmojis = require("./botconfig/emojis.json");

client.setMaxListeners(100); require('events').defaultMaxListeners = 100;

client.settings = new Enmap({ name: "settings",dataDir: "./databases/settings"});
client.infos = new Enmap({ name: "infos", dataDir: "./databases/infos"});


["events", "commands", "slashCommands", settings.antiCrash ? "antiCrash" : null, ]
    .filter(Boolean)
    .forEach(h => {
        require(`./handlers/${h}`)(client);
    })|| config.token
//Index foda



client.login(process.env.token || config.token)
