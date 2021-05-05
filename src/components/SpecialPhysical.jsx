/* eslint-disable react/prop-types */
import React from 'react'

const SpecialPhsyical = ({ pokemon }) => {
  const offense = {
    physical: 0,
    mixed: 0,
    special: 0
  }

  const defense = {
    physical: 0,
    mixed: 0,
    special: 0
  }

  pokemon.forEach((mon, i) => {
    if (mon !== null) {
      if ((mon.stats.attack / mon.stats.specialattack).toFixed(2) >= 0.9 && (mon.stats.attack / mon.stats.specialattack).toFixed(2) <= 1.1) {
        offense.mixed += 1
      } else if (mon.stats.attack < mon.stats.specialattack) {
        offense.special += 1
      } else if (mon.stats.attack > mon.stats.specialattack) {
        offense.physical += 1
      }

      if ((mon.stats.defense / mon.stats.specialdefense).toFixed(2) >= 0.9 && (mon.stats.defense / mon.stats.specialdefense).toFixed(2) <= 1.1) {
        defense.mixed += 1
      } else if (mon.stats.defense < mon.stats.specialdefense) {
        defense.special += 1
      } else if (mon.stats.defense > mon.stats.specialdefense) {
        defense.physical += 1
      }
    }
  })

  return (
    <>
    <div className="sp-wrapper">
      <div className='sp-labels sp-col'>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>Attack</div>
        <div>Defense</div>
      </div>

      <div className="sp-physical sp-col">
        <p className='sp-text'>Physical</p>
        <div>P</div>
        <div>{offense.physical}</div>
        <div>{defense.physical}</div>
      </div>

      <div className="sp-special sp-col">
      <p className='sp-text'>Special</p>
        <div>S</div>
        <div>{offense.special}</div>
        <div>{defense.special}</div>
      </div>

      <div className="sp-mixed sp-col">
        <p className='sp-text'>Mixed</p>
        <div>M</div>
        <div>{offense.mixed}</div>
        <div>{defense.mixed}</div>
      </div>

    </div>
    </>
  )
}

export default SpecialPhsyical
