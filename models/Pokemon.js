const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pokemonImage: {
        type: String,
        required: true,
        default: 'no-image'
    },
    pokemonId: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    }
})

module.exports = mongoose.model('Pokemon', pokemonSchema)