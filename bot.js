const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`Five Bc l FBc`,'https://www.twitch.tv/MeeRcY')

});

 


 

 

client.on('message', message => {
    var prefix = 'F'; // هنا تقدر تغير البرفكس
var command = message.content.split(" ")[0];
if(command == prefix + 'Bc') { // الكوماند !bc
    var args = message.content.split(' ').slice(1).join(' ');


        if(message.author.bot) return;

        if(!args) return message.channel.send(`** BC [ Message ] :envelope:  ** ${prefix} `).then(msg => msg.delete(5000));

        


        message.channel.send(`** Are you sure you want to send the message? :mailbox_with_mail: **`).then(msg => msg.delete(5000));
      
              let bcSure = new Discord.RichEmbed()

              
message.channel.send(bcSure).then(msg => {
msg.react('✅').then(() => msg.react('❎'));
message.delete();

            

           

       let yesEmoji = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;

            let noEmoji = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;

            

            let sendBC = msg.createReactionCollector(yesEmoji);

            let dontSendBC = msg.createReactionCollector(noEmoji);

            

            sendBC.on('collect', r => {

                message.guild.members.forEach(member => {

                    member.send(args.replace(`[user]`, member)).catch();

                    if(message.attachments.first()){

                        member.sendFile(message.attachments.first().url).catch();

                    }

                })

                message.channel.send(` **  Your message has been sent to me  [ ${msg.guild.memberCount} ]  Member of the server ✅ **`).then(msg => msg.delete(5000));

                msg.delete();

            })

            dontSendBC.on('collect', r => {

                msg.delete();

                message.reply('** :white_check_mark: Your message has been successfully canceled **').then(msg => msg.delete(5000));

            });

        })

    }

});








client.login(process.env.BOT_TOKEN);
