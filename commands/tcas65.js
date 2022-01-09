const {MessageEmbed} = require('discord.js')

const url_tcas65 = 'https://media.discordapp.net/attachments/906186108650528808/910210700692049920/IMG_9777.jpg?width=705&height=393'
const url_mytcas = 'https://www.mytcas.com/news/announcement-61'
const url_mytcas_img = 'https://media.discordapp.net/attachments/906186108650528808/910442373576806420/9k.png'

module.exports = {
    name: 'tcas65',
    description: 'tcas65 Schedule',
    execute(msg, argument) {
        if (argument.length > 0) {
            return
        } else {
            const tcas65 = new MessageEmbed()
                .setColor('#9b2226')
                .setURL(url_mytcas) 
                .setTitle('🗓️ ปฏิทิน TCAS65')
                .setImage(url_tcas65)
                .setFooter({text:'อ้างอิงข้อมูลจาก www.mytcas.com', iconURL:url_mytcas_img})
            
            msg.channel.send({ embeds: [tcas65] });
        }
    }
}