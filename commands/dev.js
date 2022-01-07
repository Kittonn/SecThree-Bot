const { MessageEmbed } = require("discord.js");

const url_github = 'https://github.com/lnwtxn'
const url_ig =  'https://www.instagram.com/kitton._/'
const url_facebook = 'https://web.facebook.com/Thunder2004/'

module.exports = {
    name: 'dev',
    description: 'Show information Developer',
    execute(msg, argument) {
        
        if (argument.length > 0) {
            return;
        } else {
            const dev = new MessageEmbed()
            .setColor('#03045e')
            .setTitle('💻 Developer Profile')
            .setDescription('**This Bot is Develop by : <@400087960428609536> **'+ 
                            `\n\n ✉️ **Contact Me** \n 🔗 My Github : ${url_github}`+
                            `\n 🔗 My Facebook : ${url_facebook} \n 🔗 My Instagram : ${url_ig}`)

            msg.channel.send({ embeds: [dev] });
        }
        
    }
}