const messageWelcome = require('../assets/welcome.json')
const { listGR, guildId } = require('../assets/data')
const TOKEN = process.env.TOKEN;
const { Client, Events, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildBans,
    ],
    partials: [Partials.Channel],
});

function responseCode() {
    client.on('messageCreate', (message) => {
        const keys = Object.keys(listGR);
        let channelID = message.channelId;
        let resultGR = listGR[channelID];
        if (message.author.bot) return;
        const command = message.content.toLowerCase();
        if (command === 'hello') {
            message.reply("**" + messageWelcome[resultGR.id].welcome + "**");
        };
        if (command === 'menu') {
            message.reply(messageWelcome[resultGR.id].code);

        };
        if (command === 'lsgr' && channelID == keys[0]) {
            let content = "";
            keys.forEach((element, key) => {
                content += "<#" + element + ">\n\n"
            });
            message.reply(content);

        }
    });
    client.on('directMessageCreate', (message) => {
        // Xử lý tin nhắn riêng
        console.log(message);

    });
}
client.login(TOKEN);
module.exports = {
    responseCode,
}