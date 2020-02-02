const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let servIcon = message.guild.iconURL;
    let servEmbed = new Discord.RichEmbed()
        .setDescription('Information sur le bot')
        .setColor('#dc143c')
        .setThumbnail(servIcon)
        .addField('Nom du serveur', message.guild.name)
        .addField('Nombre total de membres', message.guild.memberCount)
        .addField('Créer le', message.guild.createdAt)
        .addField('Vous avez rejoint le', message.member.joinedAt);

        return message.channel.send(servEmbed);
};

module.exports.help = {
    name: "infoserv"
};