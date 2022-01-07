const { MessageEmbed } = require("discord.js")

const url_schedule = 'https://media.discordapp.net/attachments/910090516006330371/921983318352863283/209984C3-C346-4367-BB2E-5C433939AAF3.png?width=1070&height=682'

module.exports = {
    name: 'schedule',
    description: 'Show Class Schedule',
    execute(msg, argument) {
        if (argument.length > 0) {
            return
        } else {
            const schedule = new MessageEmbed()
                .setColor('#ffb703')
                .setTitle('📝 ตารางสอน ชั้นมัธยมศึกษาปีที่ 6/3')
                .setDescription('**:bangbang: อย่าลืมเช็คชื่อในแต่ละคาบ :bangbang:**')
                .setImage(url_schedule)
                .setFooter('อ้างอิงข้อมูลจาก ฝ่ายวิชาการโรงเรียนมารีวิทยากบินทร์บุรี')
        
            msg.channel.send({ embeds: [schedule] });
        }
    }
}