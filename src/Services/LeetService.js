const Discord = require('discord.js')
const Cron = require('cron')

console.log((Date.now() % 86400000 / 1000 / 60 / 60 -16) * 60)

function getCurrentTime() {
    let currentDate = new Date()
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()

    return time
}
