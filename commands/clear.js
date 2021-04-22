module.exports = {
    name: 'clear',
    aliases: [],
    description: "Clear message!",
    async execute(message, args, bot) {
        if(!args[0]) return message.reply("please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("please enter a real number!");

        if(args[0] > 100) return message.reply("You canno't delete more then 100 masseges!");
        if(args[0] < 1) return message.reply("You must delete at least one message!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        }).catch((err) => { console.log(err)});

    }
}