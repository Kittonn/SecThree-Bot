const { Client, Intents } = require('discord.js');
const dotenv = require('dotenv');
const fs =require('fs')

const { initializeApp } = require("firebase/app");
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "secthree-bot.firebaseapp.com",
  projectId: "secthree-bot",
  storageBucket: "secthree-bot.appspot.com",
  messagingSenderId: "519178478877",
  appId: "1:519178478877:web:a9c66671d3c11915a36df4"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const client = new Client({ 
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MESSAGE_TYPING,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_VOICE_STATES],
        partials: ["CHANNEL", "MESSAGE", "REACTION", "USER"], });



dotenv.config()

const eventFiles = fs.readdirSync('./events')
                    .filter((file) => file.endsWith(".js"))

for(const file of eventFiles) {
    const event = require(`./events/${file}`)
    if (event.once) {
        client.once(event.name, (args) => event.execute(args,client))
    } else {
        client.on(event.name, (args) => event.execute(args,client))
    }
}


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

//async function getFriend(db) {
//    const Friend = collection(db, 'Friend');
//    const friendSnapshot = await getDocs(Friend);
//    const friendList = friendSnapshot.docs.map(doc => doc.data());
//    return friendList;
//}
//
//(async () => {
//    const Friend = await getFriend(db);
//
//    console.log(Friend);
//})();




client.login(process.env.TOKEN);