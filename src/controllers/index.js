const axios = require('axios')

const url = ('https://poke-builder.herokuapp.com' || 'http://localhost:3000') // dev

const getAllTypes = () => (
  axios.get(`${url}/api/types`)
    .then(({ data }) => data)
)

const getAllNames = () => (
  axios.get(`${url}/api/names`)
    .then(({ data }) => data)
)

const getPokemon = (pokemon) => (
  axios.get(`${url}/api/pokemon/${pokemon}`)
    .then(({ data }) => data[0])
)

module.exports = {
  getAllTypes, getAllNames, getPokemon
}
