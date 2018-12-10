const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Log#') {
    	message.reply('Current Log 2016-2017 Last log before shutdown');
  	}
});

client.on('message', message => {
    if (message.content === 'No u') {
    	message.reply('You have achieved the big homosapian, miss me with that gay shit');
  	}
});

client.on('message', message => {
    if (message.content === 'no u') {
    	message.reply('Good commies do not use capitals because they are not capitalist scumbags good work commrades *stands and solutes*');
  	}
});

client.on('message', message => {
    if (message.content === 'Shreck Meme') {
    	message.reply('https://cdn.discordapp.com/attachments/380292099377201162/515270334174461952/tumblr_pie02giID21xoyw8po1_400.gif');
  	}
});
                                                                                                                                                                                                                                                        
                                                                                                                              
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
