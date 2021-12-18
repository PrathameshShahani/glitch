var Discord = require('discord.js')
const fs = require("fs")
const { PREFIX } = require("../../config")
const db = require('quick.db')
const { stripIndents } = require("common-tags");

module.exports = {
config: {
    name: "help",
    description: "Help Menu",
    usage: "1) m/help \n2) m/help [module name]\n3) m/help [command (name or alias)]",
    example: "1) m/help\n2) m/help utility\n3) m/help ban",
    aliases: ['h']
},
run: async (bot, message, args) => {
    let prefix;
    if (message.author.bot || message.channel.type === "dm") return;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        } catch (e) {
            console.log(e)
    };

if(message.content.toLowerCase() === `${prefix}help`){
    var log = new Discord.MessageEmbed()
    .setColor(`#dbbbff`)
    .setTitle(" 😁😁 \` Welcome to My Help Menu \ Code Was made by Pmesh Gaming#0198` 😁😁")
    .addField('Prefix Information', `Prefix: \`*\`\nYou can also mention \`Aiko\` to get prefix info.`)
    .setDescription(
    `Use \`!help\` followed by a command name to get more additional information on a command. For example: \`*help play\`.`
                )

    
    .addField(`**⚙️ ❯ MODERATION **`,"`Ban`,`Kick`,`vcmove`,`smove`,`voicekick`,`lock`,`unlock`,`Unban`,`Mute`,`Purge`,`Hackban`,`role`,`roleadd`,`roledel`,`rolecreate`,`deleterole`,`createvc`,`createchat`,`delchannel`,`embed`,`announce`,`imageannounce`,`membercount`,`yt`,`steal`,`define`,`sourcebin`,`docs`,`weather`,`qr`,`github`,`applestore`,`anime`,`linkshorten`,`playstore`,`country`,`ascii`,`emojiid`,`vaportext`")
    .addField(`**🛡️ ❯ SETUP & INFO'S **`,"`setmodlog`,`setmute`,`setnick`,`slowmode`,`help`,`uptime`,`av`,`av2`,`stats`,`channelinfo`,`roleinfo`,`whois`" )
    .addField(`**🎵 ❯ MUSIC **`,"`addrelated`,`autoplay`,`playlist`,`clearqueue`,`custom`,`forward`,`grab`,`join`,`jump`,`loop`,`lyrics`,`moveme`,`mycustom`,`nowplaying`,`pause`,`play`,`playsc`,`playskip`,`queue`,`radio`,`removetrack`,`replay`,`resume`,`rewind`,`search`,`searchrelated`,`searchsc`,`seek`,`shuffle`,`skip`,`status`,`stop`,`volume`" )
    .addField(`**🎶 ❯ MUSIC FILTER **`,"`8d`,`bassboost`,`clear`,`earrape`,`echo`,`flanger`,`gate`,`haas`,`heavybass`,`karaoke`,`lightbass`,`mcompand`,`nightcore`,`phaser`,`pulsator`,`purebass`,`reverse`,`subboost`,`surrounding`,`treble`,`tremolo`,`vaporwave`,`vibrato`" )
    .addField(`**🌀 ❯ MUSIC SETUP & INFO **`,"`24/7`,`adddj`,`removedj`,`reset`,`setup`,`ping`,`uptime`")
    .addField(` **🤣 ❯ FUN **`,"`kiss`,`hug`,`pat`,`zaglo`,`slap`,`smug`,`tickle`,`poke`,`binary`,`calculate`,`lovecal`,`meme`,`advice`,`scroll`")
    .addField(` **🌺 ❯ IMAGE **`,"`triggered`,`delete`,`rip`,`jail`,`captcha`,`wideavatar`,`toilet`,`wa`,`clyde`,`wasted`,`effect`,`tweet`,`minecraft`,`blur`,`beautiful`,`catsay`,`cowsay`,`fliptext`")
    .addField(` **❯ LINKS **`,`   [Invite Me](https://discord.com/api/oauth2/authorize?client_id=912619779838312478&permissions=140122640374&scope=bot`+` - `+`[Support Server](https://discord.gg/narDCTRrP8)`)
    .setFooter("CWS")
    .setTimestamp()

message.channel.send(log);
}
}
}
