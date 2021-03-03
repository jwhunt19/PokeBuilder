/* eslint-disable react/prop-types */
import React from 'react'

const TypeWeaknesses = ({ typeTotals, types }) => (
  <div className='col'>
    <div className="cell" key={Math.random()}>&nbsp;</div>
    {
      types.map((type, i) => (
        typeTotals === undefined
          ? <div className={`cell cell${i % 2}w`} key={Math.random()}>&nbsp;</div>
          : (

            <div key={Math.random()} className={`cell type-totals weaknesses cell${i % 2}w w${typeTotals.weak[type.type].reduce((x, y) => x + y)}`}>
              {typeTotals.weak[type.type].reduce((x, y) => x + y)}
            </div>
            )
      ))
    }
  </div>
)

export default TypeWeaknesses
