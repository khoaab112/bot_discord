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
    client.on('messageCreate', (msg) => {
        if (msg.author.bot) return;
        console.log(msg);
        if (msg.content === 'Hello') {
            msg.reply(`Hello ${msg.author.username}`);
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