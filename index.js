const axios = require('axios');
const starters = require('./starters.js')

console.log(starters);

function randomizer(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

    pkmnRand = randomizer(0, starters.length)
    console.log(pkmnRand);
    axios.get(`https://pokeapi.co/api/v2/pokemon/${starters[pkmnRand]}`)
    .then(pkmn => {
        console.log(`Tu pokémon aleatorio es: ${pkmn.data.name}`);
    })

