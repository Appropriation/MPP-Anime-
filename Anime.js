const Discord = require('discord.js');
const client = new Discord.Client();

const GoogleImages = require('google-images');
const googleImagesClient = new GoogleImages(process.env.GCSE_ID, process.env.GCSE_API_KEY);

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'Goodnight!') {
		message.channel.send("Sleep Tight!", {files:["https://gifimage.net/wp-content/uploads/2017/09/anime-sleep-gif-7.gif"]});;
	}
});

client.on('message', message => {
	if (message.content === 'Yato') {
		message.channel.send("I cleanse thee. Rend!", {files:["https://pa1.narvii.com/6186/abadf3a5fb3df4bc8b6710797f141a64c508dd50_hq.gif"]});;
	}
});

client.on('message', message => {
	if (message.content === 'OnePunch') {
		message.channel.send("I'm Going to be the strongest Hero", {files:["https://gifimage.net/wp-content/uploads/2018/04/one-punch-man-gif-tumblr-10.gif"]});;
	}
});    

client.on('message', message => {
	if (message.content === 'Welcome!') {
		message.channel.send("Welcome to the MPP Anime Discord! :D", {files:["https://gifimage.net/wp-content/uploads/2017/09/anime-welcome-gif.gif"]});;
	}
});     

client.on('message', message => {
	if (message.content === 'Goodmorning!') {
		message.channel.send("Get Enough Sleep?", {files:["https://gifimage.net/wp-content/uploads/2018/11/morning-anime-gif-6.gif"]});;
	}
});

client.on('message', message => {
	if (message.content === 'Saitama') {
		message.channel.send("Wack", {files:["https://gifimage.net/wp-content/uploads/2018/11/one-punch-man-gif-manga.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Adorable') {
		message.channel.send("Just so Cute!", {files:["https://media1.tenor.com/images/86aece98ba2859b552825808b48cfbd9/tenor.gif?itemid=5948544"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Spice') {
		message.channel.send("Lawrence + Holo Forever!", {files:["https://gifimage.net/wp-content/uploads/2018/05/spice-and-wolf-holo-gif-12.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Salute') {
		message.channel.send('https://gifimage.net/wp-content/uploads/2018/10/anime-salute-gif-5.gif');
	}
});
client.on('message', message => {
    if (message.content.startsWith("GoogleImages")) {
        googleImagesClient.search(message.content.substr(12)).then(function(images){
            message.channel.send(images.map(x => x.url).join("\n"), {split:true});
        });
    }
});	
                                                                                                                                                                                                                                                       
                                                                                                                              
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
