module.exports = {
    name: 'temp',
    aliases: ['clock'],
    description: "Gives Server Status (raspberry pi)",
    async execute(message, args, cmd, Discord){
        const execSync = require('child_process').execSync;
        // import { execSync } from 'child_process';  // replace ^ if using ES modules
        
        if (cmd === 'temp') {
            output = execSync('vcgencmd measure_temp', { encoding: 'utf-8' });  // the default is 'buffer'
            return await message.channel.send(output);

        }else if (cmd === 'clock') {
            output = execSync('vcgencmd measure_clock arm', { encoding: 'utf-8' });
            return await message.channel.send(output);

        } else {
            return message.reply('Wrong Argument!');
        }
    }
}