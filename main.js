const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("guildCreate", message => {
    message.send("Hello my dudes. To stay informed of wednesdays, please type !frog into the desired channel for more info type !sauce");
});

bot.on("ready", () => {
    console.log("Bot activated. Ready to scream"); 
    
});

bot.on('message', message => {
    if (message.content.toLowerCase() === '!dude' || message.content.toLowerCase() === '!dudette') {
        var current = new Date(),
        nextwdn = new Date();
        while(nextwdn.getDay() != 3) {
            var nextday = nextwdn.getDate()+1;
            nextwdn.setDate(nextday);
        }
        nextwdn.setHours(0);
        nextwdn.setMinutes(0);
        nextwdn.setSeconds(0);

        var distance = nextwdn - current;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        if (((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) == 0){
            var hours = 23;
        } else {
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ) - 1;
        }
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        message.channel.send("Next wednesday will be in " + days + "days " + hours + "hours " + minutes + "minutes and " + seconds + "seconds");
        if (message.content.toLowerCase() === "!dudette") {
            message.channel.send("UwU");
        }
    }
    if (message.content.toLowerCase() === '!sauce') {
        message.channel.send("```Type !sauce to get this message.\nType !dude to get excited for next wednesday.\nType !frog to choose the channel for Dude!```");
    }
    if (message.content.toLowerCase() === '!frog') {
        message.channel.send("Dude will inform you in this channel of every wednesday. Until he has to restart");
        setInterval(() => {
            var date = new Date();
            if((date.getDay() === 2) && (date.getSeconds() === 0) && (date.getMinutes() === 0) && (date.getHours() === 23)) {
                    message.channel.send("It's wednesday my dudes. AAAAAAAAAAAHHH.", {
                        files: ['https://cdn.discordapp.com/attachments/764604038271467553/809079104854425690/image0-1.jpg']
                    });
                    bot.user.setAvatar('https://pics.onsizzle.com/Instagram-It-is-time-my-dudes-481279.png');
            }
            if((date.getDay() === 3) && (date.getSeconds() === 0) && (date.getMinutes() === 0) && (date.getHours() === 23)) {
                bot.user.setAvatar('http://ih0.redbubble.net/image.94777491.1109/flat,1000x1000,075,f.u1.jpg');
            }
            if(date.getSeconds() == 0) {
                bot.user.setAvatar('https://res.cloudinary.com/teepublic/image/private/s--zaLrEa9G--/t_Preview/b_rgb:c62b29,c_limit,f_jpg,h_630,q_90,w_630/v1524539230/production/designs/2621939_0.jpg');
            }
            if(date.getSeconds() == 59) {
                bot.user.setAvatar('http://ih0.redbubble.net/image.94777491.1109/flat,1000x1000,075,f.u1.jpg');
            }
        }, 1000);
    }
});

bot.login(process.env.token);
