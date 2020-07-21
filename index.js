const Discord = require('discord.js')

const config = require("./config")
const command = require("./src/Services/CommandService")

const client = new Discord.Client()


client.once('ready', () => {
    console.log('Ready!')
    console.log(client.users)
})

client.on('message', command.handleMessage) 

client.login(config.config.token)