const {MessageEmbed} = require('discord.js')

const axios = require('axios')

const url_salim = 'https://watasalim.vercel.app/api/quotes/random'

module.exports = {
    name: 'watasalim',
    execute(msg,argument) {
        if (argument.length > 0) {
            return
        } else {
            axios.get(url_salim).then(res => {
            
                const quote = res.data.quote.body
    
                const wataEmbed = new MessageEmbed()
                    .setColor('#ffb703')
                    .setTitle('💬 วาทกรรมสลิ่ม')
                    .setDescription(`**${quote}**`)
                    
                
                msg.channel.send({embeds: [wataEmbed]});
                
            })
        }
    }
}