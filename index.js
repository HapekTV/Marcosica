// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
const { Client, RichEmbed } = require('discord.js');

const client = new Client();

client.on('ready', () => {
  console.log('I am ready!');
  client.user.setActivity('Administrator RBTeam');
  
});

client.on('message', message => {
  if (message.content === 'marcos') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/p720x720/79078346_482934285910310_8592490222095171584_o.jpg?_nc_cat=105&_nc_sid=d4cf07&_nc_ohc=ITkaNZqWZ6cAX9Dxbwj&_nc_ht=scontent.fwaw6-1.fna&_nc_tp=6&oh=5d5b9e21db9aa7897e95c4cafac4b83c&oe=5EAC4B60')
	.setTitle('Nie do wiara w to zdjęcie xD')
    message.channel.send(embed);
  }
  });
client.on('message', message => {
  if (message.content === 'marcosica') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/79206946_480941569442915_2097729084690792448_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=cQYbxkdmwtsAX_PyasE&_nc_ht=scontent.fwaw6-1.fna&oh=74028d6e06583a1926ddd52db8715a80&oe=5EAD171F')
	.setTitle('Jak tam Panowie? <:marcos:692633883941928960>')
    message.channel.send(embed);
  }
  
});
client.on('message', message => {
  if (message.content === 'koma') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/p720x720/79510943_2619903898127999_6899397307804942336_o.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=4sCo1XaZlLMAX8YXF2b&_nc_ht=scontent.fwaw6-1.fna&_nc_tp=6&oh=8e0d4636c651fc7b5e23aa3568adbb0b&oe=5EAD4CBF')
	.setTitle('Co tam chłopaki, kiedy się widzimy? <:koma:692334994856607774>')
    message.channel.send(embed);
  }
  
});
client.on('message', message => {
  if (message.content === 'martin') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/p720x720/75388218_2524935907624799_3635093571524100096_o.jpg?_nc_cat=103&_nc_sid=110474&_nc_ohc=s1kiN35HzF8AX-KrG7u&_nc_ht=scontent.fwaw6-1.fna&_nc_tp=6&oh=a5cd748829c1ac9d9fbbbdf3085bf958&oe=5EABA836')
	.setTitle('Juz po was <:kolia:692337031811956743>')
    message.channel.send(embed);
  }
  
});
client.on('message', message => {
  if (message.content === 'ochman') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/s960x960/64877483_2277194475732278_2530490723875160064_o.jpg?_nc_cat=108&_nc_sid=110474&_nc_ohc=KWVqGc53g4IAX-G3Fcu&_nc_ht=scontent.fwaw6-1.fna&_nc_tp=7&oh=c0c434d34a49916b924120695c629302&oe=5EAD258C')
	.setTitle('Japierdole Ty jakie siano xD')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'astra') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/s960x960/91939377_2666737646938940_5465136182381772800_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=sQAysAKVUL0AX-qnmXv&_nc_ht=scontent.fwaw6-1.fna&_nc_tp=7&oh=f512b50a902184b42f9bde9dfcf2908c&oe=5EB0B822')
	.setTitle('Fajna ta współpraca <:morgu:653320675368370239>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'patryk') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/AWCk2D3.jpg')
	.setTitle('Znowu lajwik u Astra się wysypał <:una:692637290446454794>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'cześć') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/8ZK8Sfm.png')
	.setTitle('A ty co, jeszcze nie odpaliłeś RL? <:marcos:692633883941928960>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'michal') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/bIhm5Sa.jpg')
	.setTitle('<:marcos:692633883941928960>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'marek') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/Z5GhyWG.png')
	.setTitle('RBTeam to jednak w dupe się może pocałować xD <:marcos:692633883941928960>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'gyt') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/g5RlkOB.png')
	.setTitle('Zacznijmy od rankedów, okej? <:MarcosLewo:703324057923354656>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'laptop') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/pXSnQl7.png')
	.setTitle('Bez beki xD')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'hapek') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/SEXLNQS.png')
	.setTitle('XDDDDDDDD')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'piwnica') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/qG4OG9v.png')
	.setTitle('Nie ma to jak stara, niepostrzątana piwniczka Jubara <:marcos:692633883941928960>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'łosiu') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/s960x960/79090668_2964458336950330_6936634927664332800_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=dbhWc-aPFK0AX9_DaTC&_nc_ht=scontent.fwaw6-1.fna&_nc_tp=7&oh=83914239a6c9c329820cc752f77e949f&oe=5ECF461D')
	.setTitle('Jak dzisiaj u RBTeam, biedy nie ma? <:morgu:653320675368370239>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'p') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/s960x960/79090668_2964458336950330_6936634927664332800_o.jpg?_nc_cat=100&_nc_sid=174925&_nc_ohc=dbhWc-aPFK0AX9_DaTC&_nc_ht=scontent.fwaw6-1.fna&_nc_tp=7&oh=83914239a6c9c329820cc752f77e949f&oe=5ECF461D')
	.setTitle('Jak dzisiaj u RBTeam, biedy nie ma? <:morgu:653320675368370239>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'postepy') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/s6cUXl3.png')
	.setTitle('Co prosze xD')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'michał') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/MygXuDf.png')
	.setTitle('Chyba pora się ustatkować <:kolia:704398296222793748>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'myszka') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/3g35b1n.jpg')
	.setTitle('Myszka z aliexpress za 3zł? <:kolia:704398296222793748>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'pizza') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/jljWALp.png')
	.setTitle('Pizzerka! <:sentsmile:707906560487194624>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'gramy?') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/t9LfE8Y.png')
	.setTitle('Ja już jestem <:koma:692334994856607774>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'gc') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/xWkZI6J.png')
	.setTitle('Na razie to tylko plotki <:jubar:629335648062406660>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'igl') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/A8rPMdO.jpg')
	.setTitle('Chyba znamy faworytów <:jubar:629335648062406660>')
    message.channel.send(embed);
  }
});
client.on('message', message => {
  if (message.content === 'mamy to') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://i.imgur.com/ar7ESt6.png')
	.setTitle('Następny mecz - chyba nasz? Co nie? <:soltysiak:704047218558238832>')
    message.channel.send(embed);
  }
});
client.on('message', async message => {
    if(message.content.includes('rbteam')) { 
		try {
			await message.react('692633883941928960');
			await message.react('639521161683795968');
			await message.react('653320675368370239');
      await message.react('692337031811956743');
			await message.react('657870719719571466');
			await message.react('692639406489862174');
      await message.react('668864343571431427');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});
client.on('message', async message => {
    if(message.content.includes('berry')) { 
		try {
			await message.react('692633883941928960');
			await message.react('639521161683795968');
			await message.react('653320675368370239');
      await message.react('692337031811956743');
			await message.react('657870719719571466');
			await message.react('692639406489862174');
      await message.react('668864343571431427');
		} catch (error) {
			console.error('One of the emojis failed to react.');
		}
	}
});


client.on('message', message => {
    if(message.content.includes('steam')) { 
    message.channel.send('HapekTV: https://steamcommunity.com/id/hapektv/');
    message.channel.send('Jubar: https://steamcommunity.com/id/jubar/');
    message.channel.send('Berry: https://steamcommunity.com/profiles/76561198280820820/');
  }
  
});
client.on('message', message => {
    if(message.content.includes('tajne')) { 
    message.channel.send('https://youtu.be/MCBFhklw5vI');
    message.channel.send('https://youtu.be/Mxt8ExlvT64');
  }
  });
  function randomMessage(){
    var randomNumber = Math.round(Math.random()*2); // 0, 1 or 2
    switch(randomNumber){
        case 0: return 'Papier <:marcos5Good:695696784550527076>';
        case 1: return 'Kamien <:kolia:704398296222793748>';  
        case 2: return 'Nozyce <:morgu:653320675368370239>';
    }
}

client.on('message', (message)=>{ 
    if(message.content.includes('kamien')) { 
        message.reply(randomMessage());
    }
});

client.on('message', (message)=>{ 
    if(message.content.includes('nozyce')) { 
      message.reply(randomMessage());
  }
});

client.on('message', (message)=>{ 
    if(message.content.includes('papier')) { 
      message.reply(randomMessage());
  }
  
});

client.login(process.env.token);
