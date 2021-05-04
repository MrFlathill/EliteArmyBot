const ytdl = require('ytdl-core')
const ytSearch = require('yt-search');
const message = require('../events/guild/message');

const queue = new Map();
// queue(message.guild.id, queue_constructor object { voice channel, text channel, connection, song[]});

module.exports = {
    name: 'play',
    aliases: ['p', 'skip', 'stop', 'leave', 'dc', 'idi_nahui'],
    description: 'Joins and plays a video form youtube',
    async execute(message, args, cmd, Discord, bot) {

        const voice_channel = message.member.voice.channel;
        if(!voice_channel) return message.channel.send('You need to be in a channel to execute this command');
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send('You dont have the correct permission');
        if (!permissions.has('SPEAK')) return message.channel.send('You dont have the correct permission');
        const command = cmd;

        const server_queue = queue.get(message.guild.id);

        if(cmd === 'play' || cmd === 'p'){
            if (!args.length) return message.channel.send('You need to send the second argument!')
            let song = {};

            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);
                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }
            } else {
                // if the video is not a URL, then use keywords to find that video
                const video_finder = async (query) =>{
                    const videoResult = await ytSearch(query);
                    // picking the very first video
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null
                }

                const video = await video_finder(args.join(' '));
                if (video){
                    song = { title: video.title, url: video.url }
                } else {
                    message.channel.send('Error finding video');
                }
            }

            if (!server_queue){
            
                const queue_constructor = {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }
    
                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);
    
                try {
                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);
                } catch (err) {
                    queue.delete(message.guild.id);
                    message.channel.send('There was an error connecting!');
                    throw err;
                }
            } else {
                server_queue.songs.push(song);
                return message.channel.send(`:thumbsup: **${song.title}** added to queue!`);
            }
        }
        // skip
        else if(cmd === 'skip') skip_song(message, server_queue);
        // disconnect
        else if(cmd === 'stop' || cmd === 'leave' || cmd === 'dc' || cmd === 'idi_nahui') stop_song(message, server_queue, cmd);

    }

}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }
    const stream = ytdl(song.url, {filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
    .on('finish', () => {
        song_queue.songs.shift();
        video_player(guild, song_queue.songs[0]);
    });
    console.log(`Now playing ${song.title}`);
    await song_queue.text_channel.send(`:notes: Now playing **${song.title}**`)

}

const skip_song = (message, server_queue) => {
    if(!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command');
    if(!server_queue){
        return message.channel.send('There are no songs in queue!');
    }
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue, cmd) => {
    if(!message.member.voice.channel) return message.channel.send('You need to be in a channel to execute this command');
    if(cmd === 'idi_nahui') {
        message.channel.send('Сука блядь :face_with_symbols_over_mouth:');
    }
    if(message.guild.me.voice.channel !== null){
        server_queue.songs = [];
        server_queue.connection.dispatcher.end();
    }
}