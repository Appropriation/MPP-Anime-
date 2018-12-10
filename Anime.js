const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'Goodnight') {
    	message.reply('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiJ8NnqqJXfAhVByYMKHfTYAuUQjRx6BAgBEAU&url=https%3A%2F%2Fgifimage.net%2Fanime-sleep-gif-7%2F&psig=AOvVaw2kDHP8sW2QAmqIupIYsicT&ust=1544533222027407');
  	}
});

client.on('message', message => {
    if (message.content === 'Goodmorning') {
    	message.reply('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi0yOWUqZXfAhWHq4MKHYbZD2QQjRx6BAgBEAU&url=http%3A%2F%2Fpokemonfanon.wikia.com%2Fwiki%2FFile%3ANodoka_waking_up.gif&psig=AOvVaw22GGGIPh_bWJMEXJgR_7rf&ust=1544533296885345');
  	}
});

client.on('message', message => {
    if (message.content === 'Adorable') {
    	message.reply('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwifmt69qZXfAhUl44MKHVBEAq4QjRx6BAgBEAU&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fcute-little-anime-girl-gifs&psig=AOvVaw2ds3Z8Akso6B8vScveY4gZ&ust=1544533390183705');
  	}
});

client.on('message', message => {
    if (message.content === 'Spice') {
    	message.reply('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiTtrHXqZXfAhXK3YMKHco6CD8QjRx6BAgBEAU&url=https%3A%2F%2Fsteamcommunity.com%2Fsharedfiles%2Ffiledetails%2F%3Fid%3D846908828&psig=AOvVaw2-0a2Vlyg8sJwe46_jbqWx&ust=1544533447797652');
  	}
});
                                                                                                                                                                                                                                                        
                                                                                                                              
// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTIxNjY4MjExNDM2MDI3OTA0.Du_1_Q.Hx7BfblvQnFQ2DARcAfeQKadmOc);
