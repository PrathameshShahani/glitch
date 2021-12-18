const { Client, Collection } = require('discord.js');
const { PREFIX } = require('./config');
const mySecret = process.env['Token'];

const bot = new Client({ disableMentions: 'everyone' });
const fs = require("fs");
const request = require("request");
const axios = require("axios");
const snekfetch = require("snekfetch");
const fetch = require("node-fetch");

const db = require('quick.db');

bot.on('ready', () => {
  console.log('Your Bot is now Online.')
  let activities = [`*help`],i = 0;
  setInterval(() => bot.user.setActivity(`${activities[i++ %  activities.length]}`,  {type:"WATCHING",url:"https://www.youtube.com/channel/UCojjqdGIsFdvpTkIhlaushA"  }), 5000)
})



//============================================================================================================================================================================================================


//====================================================================================COLLECTIONS REQUIRED ON READY===========================================================================================

bot.commands = new Collection();
bot.aliases = new Collection();

//============================================================================================================================================================================================================



//============================================================================================INITIALIZING====================================================================================================
["aliases", "commands"].forEach(x => bot[x] = new Collection());
["console", "command", "event"].forEach(x => require(`./handler/${x}`)(bot));

bot.categories = fs.readdirSync("./commands/");

["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot);
});

//============================================================================================================================================================================================================


//=========================================================================================MENTION SETTINGS===========================================================================================

bot.on('message', async message => {


    let prefix;
        try {
            let fetched = await db.fetch(`prefix_${message.guild.id}`);
            if (fetched == null) {
                prefix = PREFIX
            } else {
                prefix = fetched
            }
        
            } catch {
            prefix = PREFIX
    };
    try {
        if (message.mentions.has(bot.user.id) && !message.content.includes("@everyone") && !message.content.includes("@here")) {
          message.channel.send(`\n<@${message.author.id}> My prefix for\`${message.guild.name}\` is \`${prefix}\``);
          }
          
    } catch {
        return;
    };
    


});

require('http').createServer((req, res) => res.end('Bot is alive!')).listen(3000)


//============================================================================================================================================================================================================


bot.login(mySecret);

















