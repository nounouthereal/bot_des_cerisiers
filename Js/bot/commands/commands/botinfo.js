const Discord = require ("discord.js")
const { MessageEmbed } = require("discord.js")
const { version: discordjsVersion } = require('discord.js');

module.exports.run = async (bot, message, args) =>  {
    var serversembed = new MessageEmbed()
    .setTitle(`📝 Informations sur ${bot.user.username}`)
    .addField(`🤖 | Bot certifié :`,`Non.`)
    .addField(`📡 | Je suis actif sur :`,`${bot.guilds.cache.size} serveurs.`, true)
    .addField("🏓 | J'ai un ping de : ", Math.round(bot.ws.ping) + "ms", true)
    .addField("📋 Nom :", `${bot.user.username}`, true)
    .addField("🔗 Tag :", "#" + `${bot.user.discriminator}`, true)
    .addField("📊 Utilisateurs :", `${bot.users.cache.size}`, true)
    .addField("🔧 Version de discord.js :", `${discordjsVersion}`, true)
    .addField("🔨 Version de node.js :", `�undefined�`, true)
    .addField("🟢 En ligne depuis :", (Math.round(bot.uptime / (1000 * 60 * 60))) + ' heures ' + (Math.round(bot.uptime / (1000 * 60)) % 60) + ' minutes ' + (Math.round(bot.uptime / 1000) % 60) + ' secondes ', true)
    .addField("💾 __Mémoire__ :", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}` + " MB", true)
    .addField(" Développeurs :", "**nounou#0001** , **Deku Midoriya**", true)
    .setFooter(`${bot.user.tag}`, bot.user.displayAvatarURL)

    .setColor("RANDOM")
    .setThumbnail(bot.user.avatarURL)
    .setTimestamp()
    message.channel.send({embeds: [serversembed]});
}

module.exports.config = {
    name: 'botinfo', // Command Name
    description: 'Donnes des informations sur le bot.', // Description
    usage: '+botinfo', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['bi','infobot'], // Aliases 
    bankSpace: 3, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}