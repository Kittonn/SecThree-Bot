const commands = require('../handler/interactionHandler')


module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        
        if (!interaction.isSelectMenu()) return;

        const command = commands.get(interaction.values[0])

        if (!command) return

        

        if (interaction.customId === 'select') {
            await command.execute(interaction)
        }

    }
}