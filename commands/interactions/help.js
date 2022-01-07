const { MessageEmbed } = require("discord.js");
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageSelectMenu } = require('discord.js');

const help = new MessageEmbed()
    .setColor('#03045e')
    .setTitle('📁 Command List')
    .setDescription('**🔴 Prefix : `;`**'+ 
                    '\n\n**🏫 Class Schedule** \n`;schedule` = `ดูตารางสอน online`'+ 
                    '\n\n**📝 TCAS65 Schudule**\n `;gatpat` = `ดูตารางสอบ Gat & Pat และดูเวลาเตรียมตัว`'+ 
                    '\n `;saman` = `ดูตารางสอบ 9 วิชาสามัญ และดูเวลาเตรียมตัว` \n `;tcas65` = `ดูปฏิทิน TCAS65`'+ 
                    '\n\n **🗨️ Message API** \n`;covid ชื่อประเทศ` = `ดูรายงานโควิดแต่ละประเทศ`'+
                    ' \n `;inspire` = `ดูแรงบันดาลใจ`'+
                    '\n`;watasalim` = `ดูวาทกรรมสลิ่ม`'+
                    '\n\n **🔎 About** \n `;dev` = `ข้อมูลผู้พัฒนา`')

const row = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId('select')
        .setPlaceholder('Nothing selected')
        .addOptions([
            {
                label: 'Schedule',
                description: 'Send Class Schedule.',
                value: 'schedule',
                emoji: '🏫'
            },
            {
                label: 'Gatpat',
                description: 'Send Gat & Pat Schedule.',
                value: 'gatpat',
                emoji: '📆'
            },
            {
                label: 'Saman',
                description: 'Send Saman Schedule.',
                value: 'saman',
                emoji: '🗓️'
            },
            {
                label: 'Tcas65',
                description: 'Send Tcas65 Schedule.',
                value: 'tcas65',
                emoji: '🗓️'
            },
            {
                label: 'Inspirational Quote',
                description: 'Send Inspirational Quote.',
                value: 'inspire',
                emoji: '💗'
            },
            {
                label: 'Watasalim Quote',
                description: 'Send Watasalim Quote.',
                value: 'watasalim',
                emoji: '💬'
            },
            {
                label: 'Developer Information',
                description: 'Send Developer Information.',
                value: 'dev',
                emoji: '👨‍💻'
            },
            {
                label: 'Covid Thailand',
                description: 'Send Covid Stats in Thailand.',
                value: 'covid',
                emoji: '🦠'
            }
        ]),
);


module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Send All Commands.'),
    async execute(interaction) {
        return interaction.reply({ embeds: [help], components: [row] });
    },
};