const Discord = require('discord.js')
const Cron = require('node-cron')

const client = new Discord.Client()

commands = {
    ping: "ping",
    gg: "gg",
    bye: "bye"  
}

const commandEntries = Object.entries(commands)

async function checkingForCommand(message) {
    client.on("message", message => {
        console.log(message)
        console.log(commandEntries)
        const result = ''
    })
    return
}

async function respondingToCommand(message) {

    return
}


module.exports =  {
    commands: this.commands,
    checkingForCommand: checkingForCommand
}
