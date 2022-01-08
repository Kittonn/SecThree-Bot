const {MessageEmbed} = require('discord.js')

module.exports = {
    name: 'help',
    description: 'Information of All Command.',
    execute(msg, argument) {
        if (argument.length > 0){
            return
        } else {
            const help = new MessageEmbed()
                .setColor('#03045e')
                .setTitle('📁 Command List')
                .setDescription('**🔴 Prefix : `;`**'+ 
                    '\n\n**🏫 Class Schedule** \n`;schedule` = `ดูตารางสอน online`\n`;midterm` = `ดูตารางสอบกลางภาค`\n`;book ชื่อวิชา` = `ดูชีทวิชาที่เลือก`'+ 
                    '\n\n**📝 TCAS65 Schudule**\n `;gatpat` = `ดูตารางสอบ Gat & Pat และดูเวลาเตรียมตัว`'+ 
                    '\n `;saman` = `ดูตารางสอบ 9 วิชาสามัญ และดูเวลาเตรียมตัว` \n `;tcas65` = `ดูปฏิทิน TCAS65`'+ 
                    '\n\n **🗨️ Message API** \n`;covid ชื่อประเทศ` = `ดูรายงานโควิดแต่ละประเทศ`'+
                    ' \n `;inspire` = `ดูแรงบันดาลใจ`'+
                    '\n`;watasalim` = `ดูวาทกรรมสลิ่ม`'+
                    '\n\n **🔎 About** \n `;dev` = `ข้อมูลผู้พัฒนา`')
        
            msg.channel.send({ embeds: [help] });       
        }         
    }
}