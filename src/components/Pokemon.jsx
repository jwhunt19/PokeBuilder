import React from 'react'
import TypeRelations from './TypeRelations'

const Pokemon = ({ pokemon, types, handleDefensiveTotals }) => {
  return pokemon.map((pokemon, i) => (
    <div className="col" key={Math.random()}>
      {
        pokemon === null
          ? <div className="cell" key={Math.random()}>&nbsp;</div>
          : <div className="cell" key={pokemon._id}>
              <img className="sprite" src={pokemon.sprite} />
            </div>
      }
      <TypeRelations
        key={Math.random()}
        pokemon={pokemon}
        types={types}
        handleDefensiveTotals={handleDefensiveTotals}
        i={i}
      />
    </div>
  ))
}

export default Pokemon
