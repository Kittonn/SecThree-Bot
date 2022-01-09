const { SlashCommandBuilder } = require('@discordjs/builders');
const {MessageEmbed} = require('discord.js')

const dotenv = require('dotenv');
dotenv.config()

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

const getBook = async (db) => {
    const Book = collection(db, "Book")
    const bookSnapshot = await getDocs(Book)
    const bookList = bookSnapshot.docs.map(doc => doc.data())
    return bookList
}

module.exports = {
    data: new SlashCommandBuilder()
            .setName('book')
            .addStringOption(option => option
                            .setName('subject')
                            .setDescription('subject book.')
                            .setRequired(true))
            .setDescription('Send book.'),
    
    async execute(interaction) {

        const args = interaction.options.getString('subject')
        const Book = await getBook(db)

        for (let i = 0; i < Book.length; i++) {
            if (args === Book[i].subject){
                const subject = Book[i].subject
                const link = Book[i].link

                const bookEmbed = new MessageEmbed()
                    .setColor('#001524')
                    .setTitle(`📚 ชีทวิชา ${subject.toUpperCase()}`)
                    .setDescription(`💯**Link :** ${link}`)
                    .setFooter({text: 'อ้างอิงจาก Firebase'})
                
                return interaction.reply({embeds: [bookEmbed]})

            }
            
        }


        interaction.reply({embeds: [bookEmbed]})
    }
}