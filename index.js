// require third-party modules
const Discord = require('discord.js')

// import own files
const config = require("./config")
const command = require("./src/Services/CommandService")

// create a new Discord client
const client = new Discord.Client()

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!')
});

// triggers everytime a message is written in a channel
client.on('message', message => {
    console.log(message.content)
    
    if (message.content === command.commands.ping) {
        message.channel.send('Pong.')
    }

    if (message.content === command.commands.gg) {
        message.channel.send('ez u suckers')
    }
    
}); 

client.login(config.config.token)