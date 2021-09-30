module.exports = {
    name: 'author',
    aliases: ['owner'],
    description: "Outputs the Author",
    execute(message, args, Discord){
		const messages = [
			"I have been created by ***Flathill#2014***",
			"My Author is ***Flathill#2014***",
			"My creator calls himself ***Flathill#2014***",
			"Bot.parents() = ***Flathill#2014***"
		];

		const message = messages[Math.floor(Math.random()*items.length)];

		return message.channel.send(message);
    }
}
