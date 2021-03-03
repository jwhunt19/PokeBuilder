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
                  className={`cell type-weakness ${weaknesses[type.type]} cell${i % 2}`}
                  key={Math.random()}>
                    {
                      weaknesses[type.type] !== 1 && `${weaknesses[type.type]}x`
                    }
                </div>
              )
        ))
      }
    </>
  )
}

export default TypeRelations
