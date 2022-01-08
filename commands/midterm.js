const {MessageEmbed} = require('discord.js')

const img_test_schedule = "https://media.discordapp.net/attachments/927969038213210142/929400581938880532/IMG_0190.png"

module.exports = {
    name: 'midterm',
    execute(msg) {
        const testEmbed = new MessageEmbed()
            .setColor('#9b2226')
            .setTitle('⏳ ตารางสอบกลางภาค')
            .setImage(img_test_schedule)
            .setFooter('อ้างอิงข้อมูลจาก ฝ่ายวิชาการโรงเรียนมารีวิทยากบินทร์บุรี')
        msg.channel.send({ embeds: [testEmbed] });
    }
}