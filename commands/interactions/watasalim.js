const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js')

const axios = require('axios')

const url_salim = 'https://watasalim.vercel.app/api/quotes/random'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('watasalim')
		.setDescription('Send Watasalim Quote.'),
	async execute(interaction) {
		axios.get(url_salim).then(res => {
            
            const quote = res.data.quote.body

            const wataEmbed = new MessageEmbed()
                .setColor('#ffb703')
                .setTitle('💬 วาทกรรมสลิ่ม')
                .setDescription(`**${quote}**`)
                
            
            return interaction.reply({embeds: [wataEmbed]});
            
        })
	}
};