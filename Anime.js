const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Goodnight') {
    	message.reply('https://gifimage.net/wp-content/uploads/2017/09/anime-sleep-gif-7.gif');
  	}
});

client.on('message', message => {
    if (message.content === 'Goodmorning') {
    	message.reply('https://vignette.wikia.nocookie.net/pokemonfanon/images/6/63/Nodoka_waking_up.gif/revision/latest?cb=20161110064638');
  	}
});

client.on('message', message => {
    if (message.content === 'Adorable') {
    	message.reply('https://media1.tenor.com/images/86aece98ba2859b552825808b48cfbd9/tenor.gif?itemid=5948544');
  	}
});

client.on('message', message => {
    if (message.content === 'Spice') {
    	message.reply('https://steamusercontent-a.akamaihd.net/ugc/163654259564205421/86463FD8B6EB83F487FC7829393A3774CD80A51F/');
  	}
});
                                                                                                                                                                                                                                                        
                                                                                                                              
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
