const express = require('express')
const path = require('path')
const cors = require('cors')

const { Types, Pokemon } = require('../database/database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/api/types', (req, res) => {
  Types.find({}, (err, results) => {
    if (err) res.status(500).send(err)
    res.send(results)
  })
})

app.get('/api/names', (req, res) => {
  Pokemon.find({}).select('name -_id')
    .then(pokemon => {
      const names = []
      pokemon.forEach(pokemon => names.push(pokemon.name))
      res.send(names)
    })
})

app.get('/api/pokemon/:pokemon', (req, res) => {
  const { pokemon } = req.params
  Pokemon.find({ name: pokemon })
    .then(pokemon => {
      res.send(pokemon)
    })
})

module.exports = app
