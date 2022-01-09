const {MessageEmbed} = require('discord.js')

const axios = require('axios')

const date = new Date().toLocaleString()

const url_covid_country = 'https://coronavirus-19-api.herokuapp.com/countries'

const CovidData = async () => {
    const res = await axios.get(url_covid_country)
    return res.data
}


module.exports = {
    name: 'covid',
    async execute(msg,argument) {
        
        const data = await CovidData()

        for (let i = 0; i < data.length; i++) {
            if (argument === data[i].country) {

                const country = data[i].country
                const cases = data[i].cases
                const todayCases = data[i].todayCases
                const deaths = data[i].deaths
                const todayDeaths = data[i].todayDeaths
                const recovered = data[i].recovered
                
                const covidEmbed = new MessageEmbed()
                    .setColor('#001524')
                    .setTitle(`🦠 รายงานยอดผู้ติดเชื้อประเทศ ${country}`)
                    .setDescription(`\`ข้อมูล ณ ${date}\``)
                    .addFields(
                        {name: 'ติดเชื้อเพิ่มวันนี้', value: `${todayCases.toLocaleString()}`, inline: true},
                        {name: 'ติดเชื้อสะสมในประเทศ', value: `${cases.toLocaleString()}`, inline: true},
                        {name: 'เสียชีวิตเพิ่ม', value: `${todayDeaths.toLocaleString()}`, inline: true},
                        {name: 'เสียชีวิตรวม', value: `${deaths.toLocaleString()}`, inline: true},
                        {name: 'รักษาหายรวม', value: `${recovered.toLocaleString()}`, inline: true}
                    )
                    .setFooter({text: 'อ้างอิงจากองค์การอนามัยโลก'})
                    
                    
                return msg.channel.send({embeds: [covidEmbed]})

            }

        }
         
        

        

    }
}

