const commands = require('../handler/commandHandler')
const PREFIX = ';'

module.exports = {
    name: 'messageCreate',
    execute(msg,client) {
        const args = msg.content.substring(PREFIX.length).split(/ +/)
        const command = args.shift().toLowerCase()
        const argument = args.toString()

        if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;
        
        if (!args) return;
        
        try {
            commands.get(command).execute(msg, argument)
        } catch (error) {
            return;
        }
    }
}
