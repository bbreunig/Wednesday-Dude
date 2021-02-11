const Discord = require('discord.js');
const bot = new Discord.Client();




function checkWdn() {
    var date = new Date();
    const channel = bot.channels.cache.find(channel => channel.id === "764604038271467553");
    if(date.getDay() === 3 && date.getSeconds() === 0 && date.getMinutes() === 0 && date.getHours() === 0) {   
        setTimeout(() => console.log("It's wednesday my Dudes"), 1000);
        channel.send("It's wednesday my dudes. AAAAAAAAAAAHHH.", {
            files: ['https://cdn.discordapp.com/attachments/764604038271467553/809079104854425690/image0-1.jpg']
        });
    } else {
        console.log(date.getMinutes() + ":" + date.getSeconds());
    }
    setTimeout(checkWdn, 1000);
}

bot.on("ready", () => {
    console.log("Bot activated. Ready to scream"); 
    
    const test = bot.channels.cache.find(channel => channel.id === "428856232485453825");
    // var ourchannel = Discord.channel.id("764604038271467553");
    
    checkWdn();
});

bot.login(process.env.token);