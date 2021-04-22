module.exports = {
    name: 'ping',
    aliases: [],
    description: "Gieves NOT a ping back",
    execute(message, args, Discord){
        message.channel.send('HA, YOU FOOL, did you really expect that i give you a pong?');

    }
}
