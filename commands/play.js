const Discord = require("discord.js");
const ytdl = require('ytdl-core');



module.exports.run = async (bot, message, args) => {
   if (!message.member.voiceChannel) 
    return message.channel.send("Connectez-vous à un salon vocal !"); 
   if (message.guild.me.voiceChannel) 
     return message.channel.send("Le bot est déjà connecté à un salon");
   if (!args[0]) 
    return message.channel.send ('Merci de préciser un lien YouTube');

   const validate = await ytdl.validateURL(args[0]);
   if (!validate) return message.channel.send("Désolé, l'URL n'est pas valide !")

   // Commande
   const info = await ytdl.getInfo(args[0]);
   const connection = await message.member.voiceChannel.join();
   const dispatcher = await connection.playStream(
       ytdl(args[0], {filter: 'audioonly'})
   );
    message.channel.send(`Musique ajoutée : ${info.title}.`)
};

module.exports.help = {
    name: "play"
};