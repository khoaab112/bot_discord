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
        let channelID = message.channelId;
        let resultGR = listGR[channelID];
        if (message.author.bot) return;
        const command = message.content.toLowerCase();
        if (command === 'hello') {
            message.reply();
        }
    });
    // client.on('messageCreate', async function(message) {
    //     console.log(message);
    //     // await message.reply('Pong!');
    // });
    client.on('directMessageCreate', (message) => {
        // Xử lý tin nhắn riêng
        console.log(message);

    });
}
client.login(TOKEN);
module.exports = {
    responseCode,
}