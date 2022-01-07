const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING],
        partials: ["CHANNEL", "MESSAGE", "REACTION", "USER"], });

dotenv.config()

client.once('ready', () => {
	console.log('Ready!');
});

const textRole = "รับยศ"
const textCheckRole = ["friend","junior"]
const role = ["928828694351474718","928829588140863510"]

client.on("messageCreate", (msg) => {
    if (msg.channel.type === "DM" && !msg.author.bot) {
        if (textCheckRole.includes(msg.content)) {
            msg.react("✅").then(() => {
                setTimeout(() => {
                    msg.channel.send("คุณได้รับยศแล้ว")
                }, 200);
            }).then(()=>{
                if (msg.content === "friend") {
                    client.guilds.cache.get("928808583255191652").members.cache.get(msg.author.id).roles.add(role[0]);
                } else if (msg.content === 'junior') {
                    client.guilds.cache.get("928808583255191652").members.cache.get(msg.author.id).roles.add(role[1]);
                }
            })
        }
    } else if (msg.channel.type === "GUILD_TEXT") {
        if (msg.channelId === "928826905103323136") {
            if (msg.content === textRole) {
                msg.react("✅").then(() => {
                    msg.author.send("รับยศพิมพ์ friend หรือ junior")
                    setTimeout(() => msg.delete(), 300);
                })
            }
        }
    } 
    
})

client.login(process.env.TOKEN);