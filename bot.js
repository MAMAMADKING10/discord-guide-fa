const { Client, Intents, Collection } = require('discord.js');Command Gay Sanj
Language JS
Version discord.js ^12
command handelr
 
module.exports = {
    name: 'gaysanj',
    aliases: ['gs'],
    category: 'Fun',
    utilisation: '{prefix}gaysanj',
  async execute(client, message, args) { 
const Discord = require('discord.js')
      const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const gayicon = new Discord.MessageAttachment(encodeURI(`https://api.monkedev.com/canvas/gay?imgUrl=${Member.user.displayAvatarURL({ format: "png" , size: 1024 })}`), "gay.png")
      const alpha = Math.floor(Math.random() * 100) ;
            if (Number(alpha) > 1) sanjesh = "(0/10) ▱▱▱▱▱▱▱▱▱▱";
            if (Number(alpha) > 9) sanjesh = "(1/10) ▰▱▱▱▱▱▱▱▱▱";
            if (Number(alpha) > 19) sanjesh = "(2/10) ▰▰▱▱▱▱▱▱▱▱";
            if (Number(alpha) > 29) sanjesh = "(3/10) ▰▰▰▱▱▱▱▱▱▱";
            if (Number(alpha) > 39) sanjesh = "(4/10) ▰▰▰▰▱▱▱▱▱▱";
            if (Number(alpha) > 49) sanjesh = "(5/10) ▰▰▰▰▰▱▱▱▱▱";
            if (Number(alpha) > 59) sanjesh = "(6/10) ▰▰▰▰▰▰▱▱▱▱";
            if (Number(alpha) > 69) sanjesh = "(7/10) ▰▰▰▰▰▰▰▱▱▱";
            if (Number(alpha) > 79) sanjesh = "(8/10) ▰▰▰▰▰▰▰▰▱▱";
            if (Number(alpha) > 89) sanjesh = "(9/10) ▰▰▰▰▰▰▰▰▰▱";
            if (Number(alpha) > 99) sanjesh = "(10/10) ▰▰▰▰▰▰▰▰▰▰";
            const gayembed = new Discord.MessageEmbed()
             .setAuthor(`Requested by ${message.author.username}`, `https://cdn.discordapp.com/emojis/914253452853538917.png`)
             .setThumbnail(`https://api.monkedev.com/canvas/gay?imgUrl=${Member.user.displayAvatarURL({ format: "png" , size: 1024 })}`)
             .setTimestamp()
             .setColor('RANDOM')   
             .addField(` میزان گی بودن شما  **${alpha}%** <a:qer:914468879546347541>است <a:hehe:876118334662389791>`,`[${sanjesh}](${"https://discord.gg/"})`)   
message.channel.send(gayembed).then(message.react('🌈'))
        }
}
  

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const fs = require('fs');

// daryaft data az .env file
require("dotenv").config();
let token = process.env.TOKEN



client.commands = new Collection();

// commands

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (!client.commands.has(commandName)) return;

	try {
		await client.commands.get(commandName).execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

// events

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
};


client.login(token);
