module.exports = (Discord, bot,) =>{
    console.log('EliteArmy Bot is Online!')
    bot.user.setActivity('.help', { type: 'LISTENING'}).catch(console.error);
}
