const _ = require('lodash')

const farewells = require('../assets/farewells.json')

// TODO @Username       -- An Client.Users hängen alle User die auf dem Discord angemeldet sind mit username und Id --> ID wird zum @'en benötigt
// Vielleicht starts with (<) und ends with (>)

function handleFarewell(message) {
    const userToFarewell = message.content.substr(5, message.content.length)
    const randomNumber = _.random(0, farewells.length - 1)
    const farewell = farewells[randomNumber]
    const farewellWithName = farewell + ' ' + userToFarewell

    console.log(userToFarewell)
    return farewellWithName
}

module.exports = handleFarewell