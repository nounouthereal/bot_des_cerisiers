const Discord = require("discord.js")
const { MessageEmbed } = require("discord.js")

let timeout_easier = 600 * 1000

console.log(timeout_easier)

module.exports = {
    name: "beg",
    description: "💰 Beg for money, poor human.",
    timeout: timeout_easier,
    

    run: async (bot, interaction, args) => {
        const usertag = interaction.member;
        const random = Math.round(Math.random() * 100);
        const randomMessage = [
            `**Elon Musk** gived you ${random.toLocaleString()} :coin:.`,
            `**Bill Gates** gived you ${random.toLocaleString()} :coin:.`,
            `A **rich** gived you ${random.toLocaleString()} :coin:.`,
            `Joe robinet🚰 biden gived you ${random.toLocaleString()} :coin:.`,
        ];
    
        const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
    
        let begembed = new MessageEmbed()
        .setColor("#57c478")
        .addField(`✅ You received money:`,` **${usertag.user.username}** : ${response}`)
        await interaction.followUp({embeds: [begembed]}).catch();

        await bot.giveCoins(interaction.user.id, random);
    }


}