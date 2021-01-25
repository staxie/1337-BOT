const Discord = require('discord.js')
const { now } = require('lodash')
const cron = require('node-cron')

const config = require("./config")
const command = require("./src/Services/CommandService")

const client = new Discord.Client()

// Starts the Bot and Cron Job for sending a Leet Message
client.once("ready", () => {
    console.log("Hello World! It's me the almighty Discord Bot!")
    cron.schedule('0 37 13 * * *', () => {
        console.log('Logging at 13:37... *.*')
        client.channels.cache.get("734880218988150894").send("<a:partydinosaur:725999098930659329>")
    })
})

client.on('message', command.handleMessage) 

client.login(config.config.token)