const config = require('./config.json');
const Discord = require('discord.js');
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const ytdl = require('ytdl-core');


Client.login(process.env.TOKEN)

bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if(err) console.log(err);

    let jsFile = files.filter(f => f.split('.').pop() === 'js');
    if (jsFile.length <= 0) {
        console.log('Je ne trouve pas la commande');
        return;
    }

    jsFile.forEach((f, i) => {
        let props = require (`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    });
});


bot.on('ready', async () => {
    console.log(`${bot.user.username} Je suis en ligne !`)
    bot.user.setActivity("Work in progresse");
});

bot.on('message', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes : config.prefix
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args =messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message,args);
    
});



bot.login(config.token);
