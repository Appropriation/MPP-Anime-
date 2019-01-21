const Discord = require('discord.js');
const client = new Discord.Client();

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
		message.channel.send("Good Luck Cadet!", {files:["https://gifimage.net/wp-content/uploads/2018/10/anime-salute-gif-5.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'TokyoGhoul') {
		message.channel.send("If an angelic being fell from the sky and tried to live in this world of ours I think even they would commit many wrongs.Sometimes good people make bad choices. It doesn't mean they are bad people.", {files:["https://gifimage.net/wp-content/uploads/2018/11/tokyo-ghoul-sad-gif-3.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Inu') {
		message.channel.send("Never Again...", {files:["https://gifimage.net/wp-content/uploads/2017/11/inu-x-boku-ss-gif-11.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Hug') {
		message.channel.send("Aww You need a hug", {files:["https://gifimage.net/wp-content/uploads/2018/11/sad-anime-hug-gif-4.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'GurrenLagann') {
		message.channel.send("Just who the hell do you think i am!?", {files:["https://gifimage.net/wp-content/uploads/2018/11/gurren-lagann-believe-in-me-who-believes-in-you-gif-4.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'NGNL') {
		message.channel.send("Baka", {files:["https://gifimage.net/wp-content/uploads/2018/11/no-game-no-life-zero-gif.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'TWGOK') {
		message.channel.send("I am the god of conquest", {files:["https://gifimage.net/wp-content/uploads/2018/06/the-world-god-only-knows-gif.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Neptune') {
		message.channel.send("oww i just wanna play!", {files:["https://gifimage.net/wp-content/uploads/2017/10/neptune-hyperdimension-neptunia-gif-4.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'AbsoluteDuo') {
		message.channel.send("Julie and Toore", {files:["https://gifimage.net/wp-content/uploads/2017/09/absolute-duo-gif-12.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Charlotte') {
		message.channel.send("Blunder", {files:["https://gifimage.net/wp-content/uploads/2018/11/charlotte-yuu-gif.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'NoWorldBreak') {
		message.channel.send("I remember, i remember it all!", {files:["https://gifimage.net/wp-content/uploads/2018/05/seiken-tsukai-no-world-break-gif-7.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Deku') {
		message.channel.send("Plus Ultra!!!", {files:["https://gifimage.net/wp-content/uploads/2018/11/my-hero-academia-deku-vs-todoroki-gif-1.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'ToLoveRu') {
		message.channel.send("Squishy!", {files:["https://gifimage.net/wp-content/uploads/2018/06/to-love-ru-run-gif-6.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Almight') {
		message.channel.send("UNITED STATES OF SMASH", {files:["https://gifimage.net/wp-content/uploads/2018/11/my-hero-academia-united-states-of-smash-gif-1.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Bakugo') {
		message.channel.send("Move it!", {files:["https://gifimage.net/wp-content/uploads/2018/11/katsuki-bakugo-gif.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Toga') {
		message.channel.send("yay!", {files:["https://gifimage.net/wp-content/uploads/2018/11/himiko-toga-gif-1.gif"]});;
	}
});
client.on('message', message => {
	if (message.content === 'Kurumi') {
		message.channel.send("Adorable!!!", {files:["https://gifimage.net/wp-content/uploads/2017/10/date-a-live-kurumi-gif.gif"]});;
	}
});
client.on('message', message => {
    if (message.content === 'Help') {
    	message.reply('Heres a list of commands: Toga Kurumi Bakugo Deku Almight ToLoveRu NoWorldBreak Charlotte AbsoluteDuo Neptune TWGOK NGNL GurrenLagann Hug Inu TokyoGhoul Salute Spice Adorable Saitama GoodMorning! Welcome! OnePunch
');
  	}
});
                                                                                                                                                                                                                                                                                                                                                                                 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
