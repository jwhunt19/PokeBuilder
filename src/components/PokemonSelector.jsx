/* eslint-disable react/prop-types */
import React, { useState } from 'react'

const PokemonSelector = ({ i, pokemonList, handleSelection, pokemon }) => {
  let selection = pokemon[i]
  if (selection === null) selection = ''
  const [input, setInput] = useState(selection.name)

  return (
    <>
      <input
        className="pokemon-selector"
        type="text"
        id={`pokemon-${i}`}
        list={`pokemon${i}`}
        value={input}
        onChange={(e) => {
          setInput(e.target.value)
          handleSelection(e.target.value, i)
        }}
      />
      <datalist id={`pokemon${i}`}>
        {
          pokemonList.map(pokemon => <option key={pokemon} value={pokemon}>{pokemon}</option>)
        }
      </datalist>
    </>
  )
}

export default PokemonSelector
