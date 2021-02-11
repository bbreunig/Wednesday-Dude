const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on("ready", () => {
    console.log("Bot activated. Ready to scream"); 
    var curDate = new Date(),
    curday = curDate.getDay();

    console.log(curday);

    const channel = bot.channels.cache.find(channel => channel.id === "764604038271467553");
    const test = bot.channels.cache.find(channel => channel.id === "428856232485453825");
    // var ourchannel = Discord.channel.id("764604038271467553");


    if(curday == 3) {   
        console.log("It's wednesday my Dudes");
        test.send("It's wednesday my dudes. AAAAAAAAAAAHHH.", {
            files: ['https://cdn.discordapp.com/attachments/764604038271467553/809079104854425690/image0-1.jpg']
        });
    }
});


//ODA5MTMwMzE5MTg5MTE0OTQx.YCQnVQ.YmeXfZEWAWou1mwH4Mf2bnG882k
