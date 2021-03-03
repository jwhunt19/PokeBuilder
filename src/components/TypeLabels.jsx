/* eslint-disable react/prop-types */
import React from 'react'

const TypeLabels = ({ types }) => {
  return (
    <div className='col type-labels'>
      <div className="cell">&nbsp;</div>
      {
        types.map((type, i) => (
          <div className={`cell type-label ${type.type} cell${i % 2}`} key={type._id}>{type.type.toUpperCase()}</div>
        ))
      }
    </div>
  )
}

export default TypeLabels
