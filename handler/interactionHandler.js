const {Collection} = require('discord.js')
const fs = require('fs')

const commands = new Collection();

const commandFiles = fs.readdirSync('./commands/interactions')
                            .filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = require(`../commands/interactions/${file}`)

    commands.set(command.data.name, command)
}

module.exports = commands;