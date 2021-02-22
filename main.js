require("dotenv").config();
const Discord = require('discord.js');
const got = require("got");
const bot = new Discord.Client();

bot.on("guildCreate", guild => {
    var joinChannel;

    guild.channels.cache.forEach(channel => {
        if (
            channel.type === "text" &&
            !joinChannel &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        )
        joinChannel = channel;
    });
    if(!joinChannel) return;
    
    joinChannel.send(
        new Discord.MessageEmbed()
        .setAuthor(guild.name, guild.iconURL({dynamic: true}))
        .setDescription("Hello my dudes. I will listen to some commands. Type !sauce to see what I can do. Until next wednesday")
        .setColor('#E1D2B3')
        .setTimestamp()
    )
});

bot.on("ready", () => {
    console.log("Bot activated. Ready to scream");
});

bot.on('message', message => {

    //countdown to wednesday
    if (message.content.toLowerCase().startsWith("!dude")) {
        message.delete();
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
            .setTimestamp()
            .setColor('#E1D2B3');
            if(message.content.toLowerCase() === '!dudette'/* && message.author.id === "268001523588399104"*/) {
                embed.addField("*blushes*", "UwU");
                embed.setImage("https://static.zerochan.net/Moriya.Suwako.full.1849648.jpg");
            }
        message.channel.send(embed);
    }
    //help message
    if (message.content.toLowerCase() === '!sauce') {
        message.delete();
        message.channel.send(
            new Discord.MessageEmbed()
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
                },
                {
                    name: "!pic",
                    value: "a nice wednesday meme :)"
                }
            )
            .setAuthor(message.author.username)
            .setColor('#E1D2B3')
        );
    }
    //emo message
    if (message.content.toLowerCase() === '!emo') {
        message.delete();
        message.channel.send(
            new Discord.MessageEmbed()
            .setTitle("Felt emo, might delete it later.")
            .setImage("https://i.kym-cdn.com/photos/images/original/001/091/410/474.jpg")
            .setColor('#E1D2B3')
            .setThumbnail("https://cdn.discordapp.com/attachments/452589510069452800/812055487276253254/emo.png")
        );
    }
    //set Dude
    if (message.content.toLowerCase() === '!frog') {
        message.delete();
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
                got("https://www.reddit.com/r/ItIsWednesday/random/.json").then(response => {
                    let content = JSON.parse(response.body);
                    let permalink = content[0].data.children[0].data.permalink;
                    let memeUrl = `https://reddit.com${permalink}`;
                    let memeImage = content[0].data.children[0].data.url;
                    embed.setTitle("It's wednesday my dudes. AAAAAAAAAAAHHH.");
                    embed.setAuthor("Wednesday-Dude");
                    embed.setImage(memeImage);
                    embed.setColor('#E1D2B3');
                    embed.setThumbnail(logo);
                    message.channel.send(embed);
                });
                bot.user.setAvatar('https://pics.onsizzle.com/Instagram-It-is-time-my-dudes-481279.png');
                bot.user.setStatus('It\'s wednesday my dudes!!!');
            }
            if((date.getDay() === 3) && (date.getSeconds() === 0) && (date.getMinutes() === 0) && (date.getHours() === 23)) {
                bot.user.setAvatar(thunail);
                bot.user.setStatus('Waiting for wednesday...');
            }
        }, 1000);
    }
    //reddit picture message
    if(message.content.toLowerCase() === "!pic") {
        // message.delete();
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/ItIsWednesday/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeSrc = content[0].data.children[0].data.src;
            let memeAuthor = content[0].data.children[0].data.author;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeComNumber = content[0].data.children[0].data.num_comments;
            let memeVideo = content[0].data.children[0].data.is_video;
            let memeType = content[0].data.children[0].data.type;

            if(memeVideo === false && memeType == undefined) {
                embed.setTitle(`${memeTitle}`);
                embed.setAuthor(`${memeAuthor}`);
                embed.setURL(`${memeUrl}`);
                embed.setImage(memeImage);
                embed.setColor('#E1D2B3');
                embed.setThumbnail("http://ih0.redbubble.net/image.94777491.1109/flat,1000x1000,075,f.u1.jpg");
                embed.setFooter(`↑${memeUpvotes} ↓${memeDownvotes}  💬${memeComNumber}`);
                message.channel.send(embed);
            } else {
                var attach = new Discord.MessageAttachment(memeUrl)
                embed.setTitle("Found a video");
                embed.setDescription("Unfortunately I can't play videos for now. Try again I will do my best to find pictures for you");
                embed.setColor('#E1D2B3');
                embed.setThumbnail("http://ih0.redbubble.net/image.94777491.1109/flat,1000x1000,075,f.u1.jpg");
                embed.setTimestamp();
                embed.setFooter("Maybe one day Discord will add Videos to embed messages...");
                message.channel.send(embed, attach);
            }
        });
    }
    //specific message
    if(message.author.id === "452587188463468569") {
        message.delete();
        message.channel.send(
            new Discord.MessageEmbed()
            .setAuthor(message.author.username)
            .setDescription("The Dude approves this message and will side with " + message.author.username + "!")
            .setTimestamp()
            .setColor('#E1D2B3')
            .setFooter("I love you " + message.author.username)
        );
    }
});

bot.login(process.env.token);
