const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv')
const fs = require('fs')
dotenv.config()

const commands = [];
const commandFiles = fs.readdirSync('./commands/interactions')
                        .filter(file => file.endsWith('.js'))
    
for (const file of commandFiles) {
    const command = require(`./commands/interactions/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationGuildCommands("928814199851860058", "928808583255191652"), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);