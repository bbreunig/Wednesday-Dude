require("dotenv").config();
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on("guildCreate", message => {
    message.send("Hello my dudes. To stay informed of wednesdays, please type !frog into the desired channel for more info type !sauce");
});

bot.on("ready", () => {
    console.log("Bot activated. Ready to scream");
});

bot.on('message', message => {
    if (message.content.toLowerCase() === '!dude') {
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
                    inline: true,
                },
                {
                    name: "Hours",
                    value: hours + " h",
                    inline: true,
                },
                {
                    name: "Minutes",
                    value: minutes + " m",
                    inline: true,
                },
                {
                    name: "Seconds",
                    value: seconds + " s",
                    inline: true,
                }
            )
            .setAuthor(message.author.username)
            .setColor('#E1D2B3');
        message.channel.send(embed);
    }
    if (message.content.toLowerCase() === '!dudette' && message.author.id === "268001523588399104") {
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
                    inline: true,
                },
                {
                    name: "Hours",
                    value: hours + " h",
                    inline: true,
                },
                {
                    name: "Minutes",
                    value: minutes + " m",
                    inline: true,
                },
                {
                    name: "Seconds",
                    value: seconds + " s",
                    inline: true,
                },
                {
                    name: "*blushes*",
                    value: "UwU",
                }
            )
            .setImage("https://static.zerochan.net/Moriya.Suwako.full.1849648.jpg")
            .setAuthor(message.author.username)
            .setColor('#E1D2B3');
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
            .setColor('#E1D2B3')
            .setThumbnail("https://cdn.discordapp.com/attachments/452589510069452800/812055487276253254/emo.png");
        message.channel.send(embed);
    }
    if (message.content.toLowerCase() === '!frog') {
        const thunail = 'http://ih0.redbubble.net/image.94777491.1109/flat,1000x1000,075,f.u1.jpg';
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
                bot.user.setAvatar(thunail);
                bot.user.setStatus('Waiting for wednesday...');
            }
        }, 1000);
    }

    if(message.author.id === "452587188463468569") {
        const embed = new Discord.MessageEmbed()
            .setTitle("The Dude approves this message and will side with " + message.author.username + "!")
            .setTimestamp()
            .setFooter("I love you " + message.author.username);
        message.channel.send(embed);
    }
});

bot.login(process.env.token);
