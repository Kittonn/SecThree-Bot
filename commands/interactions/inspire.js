const {MessageEmbed} = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders');
const { default: axios } = require('axios')

const url_inspire = 'https://zenquotes.io/api/random'

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inspire')
		.setDescription('Send Inspirational Quote.'),
	async execute(interaction) {
		axios.get(url_inspire).then(res => {
            const quote = res.data[0].q
            const name = res.data[0].a

            const inspite_quote = new MessageEmbed()
                .setColor('#3c096c')
                .setTitle('💬 Inspirational Quotes')
                .setDescription(`**${quote}** \n ${name}`)
            return interaction.reply({embeds: [inspite_quote]})
            
            })
	},
};