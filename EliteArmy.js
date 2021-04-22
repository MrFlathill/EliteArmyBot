// https://discord.com/oauth2/authorize?client_id=831522065126391828&scope=bot&permissions=2147483647

const Discord = require('discord.js');
require('dotenv').config();
const bot = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"]});

bot.commands = new Discord.Collection();
bot.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(bot, Discord);
})

bot.login(process.env.DISCORD_TOKEN);

// start the bot with "node ." (make sure to be in /discordbots/[BOTNAME])