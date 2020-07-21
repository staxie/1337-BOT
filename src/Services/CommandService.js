const Discord = require('discord.js')
const _ = require('lodash')

const farewells = require('../assets/farewells.json')

commands = {
    "!ping": (message) => message.channel.send('Pong.'),
    "!gg": (message) => message.channel.send('ez u suckers'),
    "!bye": (message) => message.channel.send(handleFarewell(message))
}

const commandEntries = Object.entries(commands)

function handleMessage(message) {
    for (const [ command, action ] of commandEntries) {
        if(message.content.startsWith(command)) {
            action(message)
        }
    }
}

// TODO @Username       -- An Client.Users hängen alle User die auf dem Discord angemeldet sind mit username und Id --> ID wird zum @'en benötigt
function handleFarewell(message) {
    const userToFarewell = message.content.substr(5, message.content.length)
    const randomNumber = _.random(0, farewells.length)
    const farewell = farewells[randomNumber]
    const farewellWithName = farewell + ' ' + userToFarewell

    console.log(userToFarewell)
    return farewellWithName
}

module.exports =  {
    handleMessage
}