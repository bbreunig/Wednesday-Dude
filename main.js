const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on("ready", () => {
    console.log("Bot activated. Ready to scream"); 
    
    const test = bot.channels.cache.find(channel => channel.id === "428856232485453825");
    // var ourchannel = Discord.channel.id("764604038271467553");
    
    checkWdn();
});

bot.on('message', message => {
    console.log("message received: " + message.content);
    if (message.content === '!dude') {
        console.log("If clause fails me");
        var current = new Date(),
        nextwdn = new Date();
        while(nextwdn.getDay != 3) {
            var nextday = nextwdn.getDate()+1;
            nextwdn.setDate(nextday);
        }
        nextwdn.setHours(0);
        nextwdn.setMinutes(0);
        nextwdn.setSeconds(0);

        var distance = nextwdn - current;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        message.channel.send("Next wednesday will be in " + days + ":" + hours + ":" + minutes + ":" + seconds);
    }
});

function checkWdn() {
    var date = new Date();
    const channel = bot.channels.cache.find(channel => channel.id === "764604038271467553");
    if((date.getDay() === 3) && (date.getSeconds() === 0) && (date.getMinutes() === 0) && (date.getHours() === 0)) {   
        channel.send("It's wednesday my dudes. AAAAAAAAAAAHHH.", {
            files: ['https://cdn.discordapp.com/attachments/764604038271467553/809079104854425690/image0-1.jpg']
        });
    } else {
        console.log(date.getMinutes() + ":" + date.getSeconds());
    }
    setTimeout(checkWdn, 1000);
}

bot.login(process.env.token);