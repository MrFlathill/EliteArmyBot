module.exports = {
    name: 'author',
    aliases: ['owner'],
    description: "Outputs the Author",
    execute(message, args, Discord){
        const rnd = parseInt(Math.random()*4);

        switch (rnd) {
            case 0:
                return message.channel.send("I have been created by ***Flathill#2014***");
            case 1:
                return message.channel.send("My Author is ***Flathill#2014***");
            case 2:
                return message.channel.send("My creator calls himself ***Flathill#2014***");
            case 3:
                return message.channel.send("Bot.parents() = ***Flathill#2014***");
        }

    }
}