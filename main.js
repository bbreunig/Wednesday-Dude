const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on("ready", () => {
    console.log("Bot activated. Ready to scream"); 
    var curDate = new Date();
    while(true) {
        var curday = curDate.getDay();

        console.log(curday);

        const channel = bot.channels.cache.find(channel => channel.id === "764604038271467553");
        const test = bot.channels.cache.find(channel => channel.id === "428856232485453825");
        // var ourchannel = Discord.channel.id("764604038271467553");


        if(curday == 3) {   
            setTimeout(() => console.log("It's wednesday my Dudes"), 1000);
            test.send("It's wednesday my dudes. AAAAAAAAAAAHHH.", {
                files: ['https://cdn.discordapp.com/attachments/764604038271467553/809079104854425690/image0-1.jpg']
            });
        }
    }
});