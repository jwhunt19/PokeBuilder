const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/pokeBirudo', { useNewUrlParser: true, useUnifiedTopology: true })

const typesSchema = new mongoose.Schema({
  type: String,
  relations: {}
})

const PokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  sprite: String,
  stats: {},
  types: []
})

const Types = mongoose.model('Types', typesSchema)
const Pokemon = mongoose.model('Pokemon', PokemonSchema)

module.exports = {
  Types, Pokemon
}
