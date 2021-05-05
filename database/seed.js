const axios = require('axios')
const { Types, Pokemon } = require('./database')

const seedTypes = async () => {
  for (let i = 1; i < 19; i++) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/type/${i}/`)
    const relations = {}

    data.damage_relations.double_damage_from.forEach(type => { relations[type.name] = 2 })
    data.damage_relations.half_damage_from.forEach(type => { relations[type.name] = 0.5 })
    data.damage_relations.no_damage_from.forEach(type => { relations[type.name] = 0 })

    Types.create({ type: data.name, relations: relations })
  }
}

const seedPokemon = async () => {
  for (let i = 1; i <= 898; i++) {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const stats = {}
    const types = []

    data.stats.forEach(stat => {
      let s = stat.stat.name
      if (s.includes('-')) s = (s.split('-')).join('')
      stats[s] = stat.base_stat
    })

    data.types.forEach(type => {
      types.push(type.type.name)
    })

    await Pokemon.create({
      id: data.id,
      name: data.name,
      shiny: data.sprites.front_shiny,
      sprite: data.sprites.front_default,
      // sprite: data.sprites.versions['generation-ii'].gold.front_default,
      stats: stats,
      types: types
    })
  }
}

seedTypes()
seedPokemon()
