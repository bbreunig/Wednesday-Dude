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
        if (((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) === 0){
            var hours = 23;
        } else {
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) ) - 1;
        }
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        const embed = new Discord.MessageEmbed()
            .setTitle("Countdown until next wednesday")
            .addFields(
                {
                    name: "Days",
                    value: days + " d",
                },
                {
                    name: "Hours",
                    value: hours + " h",
                },
                {
                    name: "Minutes",
                    value: minutes + " m",
                },
                {
                    name: "Seconds",
                    value: seconds + " s",
                }
            .setAuthor(message.author.username)
            .setColor('#E1D2B3');
        if (message.content.toLowerCase() === "!dudette") {
            embed.setImage("https://static.zerochan.net/Moriya.Suwako.full.1849648.jpg")
                .addField("UwU", "");
        }
        message.channel.send(embed);
    }
    if (message.content.toLowerCase() === '!sauce') {
        const embed = new Discord.MessageEmbed()
            .setTitle("Wednesday-Dude help")
            .addFields(
                {
                    name: "!sauce",
                    value: "Shows this message",
                },
                {
                    name: "!dude",
                    value: "Countdown to next wednesday",
                },
                {
                    name: "!frog",
                    value: "sets wedensday dude in channel",
                },
                {
                    name: "!emo",
                    value: "sad frog :(",
                }
            )
            .setAuthor(message.author.username)
            .setColor('#E1D2B3');
        message.channel.send(embed);
    }
    if (message.content.toLowerCase() === '!emo') {
        const embed = new Discord.MessageEmbed()
            .setTitle("Felt emo, might delete it later.")
            .setImage("https://i.kym-cdn.com/photos/images/original/001/091/410/474.jpg")
            .setColor('#E1D2B3');
        message.channel.send(embed);
    }
    if (message.content.toLowerCase() === '!frog') {
        const thunail = 'https://pics.onsizzle.com/Instagram-It-is-time-my-dudes-481279.png';
        const info = new Discord.MessageEmbed()
            .setTitle("My Dudes, be ready for next wednesday")
            .setThumbnail(thunail)
            .setColor('#E1D2B3');
        message.channel.send(info);
        setInterval(() => {
            var date = new Date();
            if((date.getDay() === 2) && (date.getMinutes() === 0) && (date.getSeconds() === 0) && (date.getHours() === 23)) {
                const logo = "https://pics.onsizzle.com/Instagram-It-is-time-my-dudes-481279.png";
                const embed = new Discord.MessageEmbed()
                    .setTitle("It's wednesday my dudes. AAAAAAAAAAAHHH.")
                    .setAuthor("Wednesday-Dude")
                    .setImage('https://cdn.discordapp.com/attachments/764604038271467553/809079104854425690/image0-1.jpg')
                    .setColor('#E1D2B3')
                    .setThumbnail(logo);
                message.channel.send(embed);
                bot.user.setAvatar('https://pics.onsizzle.com/Instagram-It-is-time-my-dudes-481279.png');
                bot.user.setStatus('It\'s wednesday my dudes!!!');
            }
            if((date.getDay() === 3) && (date.getSeconds() === 0) && (date.getMinutes() === 0) && (date.getHours() === 23)) {
                bot.user.setAvatar('http://ih0.redbubble.net/image.94777491.1109/flat,1000x1000,075,f.u1.jpg');
                bot.user.setStatus('Waiting for wednesday...');
            }
        }, 1000);
    }
});

bot.login(process.env.token);
