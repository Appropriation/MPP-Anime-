const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Goodnight') {
        message.channel.send('https://gifimage.net/wp-content/uploads/2017/09/anime-sleep-gif-7.gif');
      }
});

client.on('message', message => {
    if (message.content === 'Goodmorning') {
        message.channel.send('https://gifimage.net/morning-anime-gif-6/');
      }
   
});

client.on('message', message => {
    if (message.content === 'Adorable') {
        message.channel.send(' https://media1.tenor.com/images/86aece98ba2859b552825808b48cfbd9/tenor.gif?itemid=5948544');
      }
});

client.on('message', message => {
    if (message.content === 'Spice') {
        message.channel.send('https://gifimage.net/wp-content/uploads/2018/05/spice-and-wolf-holo-gif-12.gif');
      }
});
                                                                                                                                                                                                                                                       
                                                                                                                              
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
