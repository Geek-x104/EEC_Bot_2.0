// Require Sequelize
const Sequelize = require('sequelize');
// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
    client.user.setActivity('to commands from the Battle Barge!', { type: ActivityType.Listening });
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;
	// ...
});

// Login to Discord with your client's token
client.login('your-token-goes-here');