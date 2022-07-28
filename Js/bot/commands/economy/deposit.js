const { MessageEmbed } = require('discord.js');
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'

module.exports.run = async (bot, message, args) => {
    let data = await bot.fetchUser(message.author.id);
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if (args.join(' ') === 'all') {
        if (data.coinsInWallet > data.bankSpace) {
            const max_deposit = (data.coinsInWallet + data.coinsInBank - data.bankSpace);
         
          if (data.coinsInBank-data.bankSpace === 0) {
            let bankerrorembed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(`:warning: **${member.user.username}** : Votre banque est pleine.`);

            return message.channel.send({embeds: [bankerrorembed]}).catch();
            //return message.channel.send("You don't have that much space in your bank. ");
        }
          
          
          
            data.coinsInWallet = max_deposit;
            let dep111embed = new MessageEmbed()
            .setColor("BLUE")
            .setThumbnail()
            .setTitle(`🏦 Dêpot banquaire réalisé`)
            .setFooter(message.guild.name)
            .addField(`💰 Argent déposé:`,`**${(data.bankSpace - data.coinsInBank).toLocaleString()}** :coin:`)
            .addField(`💸 Argent en banque:`,`**${data.coinsInBank}** :coin:`)
            .addField(`🏦 Espace banquaire restant:`,`**${data.coinsInBank-data.bankSpace}** d'espace banquaire`)

            await message.channel.send({embeds: [dep111embed]}).catch();
            //await message.channel.send(`Deposited **${data.bankSpace - data.coinsInBank}** coins.`);

            data.coinsInBank = ((data.coinsInWallet + data.bankSpace) - max_deposit);

            await data.save();
        } else {

            if ((data.coinsInWallet + data.coinsInBank) > data.bankSpace) {
                const left = (data.coinsInWallet + data.coinsInBank) - data.bankSpace;

            let begembed = new MessageEmbed()
            .setColor("BLUE")
            .setThumbnail()
            .setTitle(`🏦 Dêpot banquaire réalisé`)
            .setFooter(message.guild.name)
            .addField(`💰 Argent déposé:`,`**${(data.coinsInWallet - left).toLocaleString()}** :coin:`)
            .addField(`💸 Argent en banque:`,`**${data.coinsInBank}** :coin:`)
            .addField(`🏦 Espace banquaire restant:`,`**${data.coinsInBank-data.bankSpace}** d'espace banquaire`)

            await message.channel.send({embeds: [begembed]}).catch();
              
                //message.channel.send(`Deposited **${(data.coinsInWallet - left).toLocaleString()}** coins`);
                
                data.coinsInBank += (data.coinsInWallet - left);
                data.coinsInWallet = left;

                await data.save();
            } else {
            let dep111embed = new MessageEmbed()
            .setColor("BLUE")
            .setThumbnail()
            .setTitle(`🏦 Dêpot banquaire réalisé`)
            .setFooter(message.guild.name)
            .addField(`💰 Argent déposé:`,`**${data.coinsInWallet.toLocaleString()}** :coin:`)
            .addField(`💸 Argent en banque:`,`**${data.coinsInBank}** :coin:`)
            .addField(`🏦 Espace banquaire restant:`,`**${data.coinsInBank-data.bankSpace}** d'espace banquaire`)
            await message.channel.send({embeds: [dep111embed]}).catch();
            //message.channel.send(`Deposited **${(data.coinsInWallet).toLocaleString()}** coins`);

                data.coinsInBank += data.coinsInWallet;
                data.coinsInWallet = 0;

                await data.save();
            }
        }
    } else {
        if (isNaN(args[0])) {
          let numbererrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`❌ **${member.user.username}** : Ce n'est pas un nombre.`);

            return message.channel.send({embeds: [numbererrorembed]}).catch();
            //return message.channel.send('That\'s not a number.');
        }
        if ( data.bankSpace - data.coinsInBank < parseInt(args[0])) {
            let bankfullerrorembed = new MessageEmbed()
            .setColor("RED")
            .setDescription(`❌ **${member.user.username}** : Ta banque n'est pas assez grande.`);

            return message.channel.send({embeds: [bankfullerrorembed]}).catch();
            //return message.channel.send('Your bank is not big enough.');
        }
        if (parseInt(args[0]) > data.coinsInWallet) {
          let moneyerrorembed = new MessageEmbed()
            .setColor("YELLOW")
            .setDescription(`:warning: **${member.user.username}** : Tu n'as pas cette somme.`);
            message.channel.send({embeds: [moneyerrorembed]})
            //return message.channel.send("You don't have that much money.");
        }

        data.coinsInBank += parseInt(args[0]);
            let depamountembed = new MessageEmbed()
            .setColor("BLUE")
            .setThumbnail()
            .setTitle(`🏦 Dêpot banquaire réalisé`)
            .setFooter(message.guild.name)
            .addField(`💰 Argent déposé:`,`**${parseInt(args[0]).toLocaleString()}** :coin:`)
            .addField(`💸 Argent en banque:`,`**${data.coinsInBank}** :coin:`)
            .addField(`🏦 Espace banquaire restant:`,`**${data.coinsInBank-data.bankSpace}** d'espace banquaire`)

            await message.channel.send({embeds: [depamountembed]}).catch();
        //await message.channel.send(`Deposited **${args[0]}** coins.`);

        data.coinsInWallet -= parseInt(args[0]);

        await data.save();
    }
}

module.exports.config = {
    name: 'deposit', // Command Name
    description: 'Dépose de l\'argent dans votre banque si vous avez de l\'espace banquaire.', // Description
    usage: '+deposit <somme>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['dep','bankadd','addbank','deposition','dépôt','depot','dépot'], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 10 // Command Cooldown
}