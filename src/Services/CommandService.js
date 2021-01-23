const FarewellService = require('../Services/FarewellService.js')


commands = {
    "!ping": (message) => message.channel.send('Pong.'),
    "!gg": (message) => message.channel.send('ez u suckers'),
    "!bye": (message) => message.channel.send(FarewellService(message)),
    "!rushb": (message) => message.channel.send("rush B blyat       no stop idiot!"),
    "!1337": (message) => message.channel.send("<a:partydinosaur:725999098930659329>")
}

const commandEntries = Object.entries(commands)

function handleMessage(message) {
    for (const [ command, action ] of commandEntries) {
        if(message.content.startsWith(command)) {
            action(message)
        }
    }
}


module.exports =  {
    handleMessage
}