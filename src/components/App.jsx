import React from 'react'
import _ from 'lodash'

import Pokemon from './Pokemon'
import PokemonSelector from './PokemonSelector'
import TypeLabels from './TypeLabels'
import TypeWeaknesses from './TypeWeaknesses'
import TypeResistances from './TypeResistances'
import SpecialPhsyical from './SpecialPhysical'
import getWeaknesses from '../../helpers/getWeaknesses'
const { getAllTypes, getAllNames, getPokemon } = require('../controllers/index')

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      types: [],
      pokemonList: [],
      pokemon: [null, null, null, null, null, null]
    }
  }

  componentDidMount () {
    this.getTypes()
    this.getNames()
  }

  componentDidUpdate () {
    this.buildTypeTotals(this.state.types)
    this.handleDefensiveTotals(this.state.pokemon, this.state.types)
  }

  buildTypeTotals (types) {
    if (this.state.typeTotals === undefined) {
      const totals = {
        weak: {},
        resistant: {}
      }

      types.forEach(type => {
        totals.weak[type.type] = [0, 0, 0, 0, 0, 0]
        totals.resistant[type.type] = [0, 0, 0, 0, 0, 0]
      })

      this.setState({ typeTotals: totals })
    }
  }

  async getTypes () {
    this.setState({ types: await getAllTypes() })
  }

  async getNames () {
    this.setState({ pokemonList: await getAllNames() })
  }

  async handleSelection (selection, i) {
    if (this.state.pokemonList.indexOf(selection) !== -1) {
      const pokemonSelection = await getPokemon(selection)
      const pokemon = this.state.pokemon
      pokemon[i] = pokemonSelection
      this.setState({ pokemon: pokemon })
    }
    document.getElementById(`pokemon-${i}`).focus()
  }

  handleDefensiveTotals (pokemon, types) {
    const typeTotals = _.cloneDeep(this.state.typeTotals)
    if (typeTotals) {
      pokemon.forEach((mon, i) => {
        if (mon !== null) {
          const weaknesses = getWeaknesses(mon, types)
          types.forEach(type => {
            if (weaknesses[type.type] === 1) {
              typeTotals.weak[type.type][i] = 0
              typeTotals.resistant[type.type][i] = 0
            }

            if (weaknesses[type.type] === 0 || weaknesses[type.type] === 0.25 || weaknesses[type.type] === 0.5) {
              if (typeTotals.weak[type.type][i] === 1) typeTotals.weak[type.type][i] = 0
              typeTotals.resistant[type.type][i] = 1
            }

            if (weaknesses[type.type] === 2 || weaknesses[type.type] === 4) {
              if (typeTotals.resistant[type.type][i] === 1) typeTotals.resistant[type.type][i] = 0
              typeTotals.weak[type.type][i] = 1
            }
          })
        }
      })
      if (JSON.stringify(typeTotals) !== JSON.stringify(this.state.typeTotals)) {
        this.setState({ typeTotals })
      }
    }
  }

  render () {
    return (
      <>
        <h1 className="title">PokéBuilder</h1>
        <div className="pokemon-selectors">
        {
          this.state.pokemon.map((pokemon, i) => (
            <PokemonSelector
              key={Math.random()}
              i={i}
              pokemonList={this.state.pokemonList}
              handleSelection={this.handleSelection.bind(this)}
              pokemon={this.state.pokemon}
            />
          ))
        }
        </div>
        <div className="type-chart">
          <TypeLabels types={this.state.types} />
          <Pokemon
            pokemon={this.state.pokemon}
            types={this.state.types}
            handleDefensiveTotals={this.handleDefensiveTotals.bind(this)}
          />
          <TypeWeaknesses typeTotals={this.state.typeTotals} types={this.state.types} />
          <TypeResistances typeTotals={this.state.typeTotals} types={this.state.types} />
        </div>
        <div>
          <SpecialPhsyical pokemon={this.state.pokemon}/>
        </div>
      </>
    )
  }
}

export default App
