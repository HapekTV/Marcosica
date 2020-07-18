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
  if (message.content === 'kaufland') {
    const embed = new RichEmbed()
	.setColor('#FFBF00')
	.setImage('https://scontent.fwaw6-1.fna.fbcdn.net/v/t1.0-9/87744339_2779520008833053_8141361069370114048_o.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=MyVAoTBej-EAX9FNIEC&_nc_ht=scontent.fwaw6-1.fna&oh=df79952bea48ba3b14bb194abe1a788d&oe=5F394E77')
	.setTitle('Dobra nie pierdol Hapek, idziesz do kauflandu? <:marcos:692633883941928960>')
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
