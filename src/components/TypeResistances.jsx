/* eslint-disable react/prop-types */
import React from 'react'

const TypeResistances = ({ typeTotals, types }) => (
  <div className='col'>
    <div className="cell" key={Math.random()}>&nbsp;</div>
    {
      types.map((type, i) => (
        typeTotals === undefined
          ? <div className={`cell cell${i % 2}r`} key={Math.random()}>&nbsp;</div>
          : (

            <div key={Math.random()} className={`cell type-totals resistant cell${i % 2}r r${typeTotals.resistant[type.type].reduce((x, y) => x + y)}`}>
              {typeTotals.resistant[type.type].reduce((x, y) => x + y)}
            </div>
            )
      ))
    }
  </div>
)

export default TypeResistances
