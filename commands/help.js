module.exports = {
    name: 'help',
	aliases: ['helppage', 'h'],
    description: "this is a help page",
    execute(message, args, Discord){
		const help = require('./help.json');

		help.helpEmbed.timestamp = new Date();
		
		message.channel.send({ embed: help.helpEmbed });
		
    }
}