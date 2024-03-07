const TOKEN = process.env.TOKEN;
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
    ]
});

function responseCode() {
    // client.on('ready', () => {
    //     console.log(`Logged in as ${client.user.tag}!`);
    // });

    // client.on('interactionCreate', async interaction => {
    //     console.log(`Logged in as ${client.user.tag}`);
    //     if (!interaction.isChatInputCommand()) return;

    //     if (interaction.commandName === 'ping') {
    //         await interaction.reply('Pong!');
    //     }
    // });

    client.on('messageCreate', async function(message) {
        console.log(message);
        // await message.reply('Pong!');
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