/* eslint-disable react/prop-types */
import React from 'react'
import getWeaknesses from '../../helpers/getWeaknesses'

const TypeRelations = ({ pokemon, types, handleDefensiveTotals, i }) => {
  let weaknesses = {}

  if (pokemon !== null) {
    weaknesses = getWeaknesses(pokemon, types)
  }

  return (
    <>
      {
        types.map((type, i) => (
          pokemon === null
            ? <div className={`cell cell${i % 2}`} key={Math.random()}>&nbsp;</div>
            : (
                <div
                  className={`cell type-weakness cell${i % 2} ${weaknesses[type.type]}`}
                  key={Math.random()}>
                    {
                      // weaknesses[type.type] !== 1 && `${weaknesses[type.type]}`
                      weaknesses[type.type] === 0.25 ? '1/4' : weaknesses[type.type] === 0.5 ? '1/2' : weaknesses[type.type] === 2 ? '2x' : weaknesses[type.type] === 4 ? '4x' : weaknesses[type.type] === 0 ? '0' : ''
                    }
                </div>
              )
        ))
      }
    </>
  )
}

export default TypeRelations
