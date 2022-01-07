const { default: axios } = require('axios')
const { MessageEmbed } = require('discord.js')

const url_inspire = 'https://zenquotes.io/api/random'

module.exports = {
    name: 'inspire',
    execute(msg,argument) {

        if (argument.length > 0) {
            return;
        } else {
            axios.get(url_inspire).then(res => {
            const quote = res.data[0].q
            const name = res.data[0].a

            const inspite_quote = new MessageEmbed()
                .setColor('#3c096c')
                .setTitle('💬 Inspirational Quotes')
                .setDescription(`**${quote}** \n ${name}`)
            msg.channel.send({embeds: [inspite_quote]})
            
            })
        }
        
    }
}