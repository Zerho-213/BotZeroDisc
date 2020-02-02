const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
        .setDescription('Information sur le bot')
        .setColor('#dc143c')
        .setThumbnail(botIcon)
        .addField('Nom du bot', bot.user.username)
        .addField('Créer le', bot.user.createdAt)
        .addField('Commandes', '----------')
        .addField('!info', 'Renvoie des informations sur le bot')
        .addField('!infoserv', 'Renvoie des informations sur le serveur')
        .addField('!play', 'Lire de la musique depuis YouTube')
        .addField('!stop', 'Arrêter la musique')
        .addField('!dog', 'Renvoie des images de chien')
        .addField('!cat', 'Renvoie des images de chat')
        .addField('!prefix', 'Permet de changer le prefix.')
        /*.addField('!addrole', 'Ajoute un rôle.')*/
        /*.addField('!removerole', 'Enlève un rôle.')*/
        /*.addField('!report', 'Reporter un utilisateur avec une raison')*/
        /*.addField('!mute', 'Mute un utilisateur avec une raison')*/
        /*.addField('!kick', 'Kick un utilisateur avec une raison')*/
        /*.addField('!ban', 'Ban un utilisateur avec une raison');*/
        
    return message.channel.send(embed);
};

module.exports.help = {
    name: "info"
};