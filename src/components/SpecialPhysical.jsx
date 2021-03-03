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

  let offenseMessage = ''
  let defenseMessage = ''

  if ((offense.physical === 3 && offense.mixed > 1) || offense.physical > 3) {
    offenseMessage = `OFFENSE: Your team leans physical with ${offense.physical} physical attackers, ${offense.mixed} balanced attackers, and ${offense.special} special attackers`
  } else if ((offense.special === 3 && offense.mixed > 1) || offense.special > 3) {
    offenseMessage = `OFFENSE: Your team leans special with ${offense.special} special attackers, ${offense.mixed} balanced attackers, and ${offense.physical} physical attackers`
  } else {
    offenseMessage = `OFFENSE: Your team is balanced with ${offense.mixed} balanced attackers, ${offense.special} special attackers, and ${offense.physical} physical attackers`
  }

  if ((defense.physical === 3 && defense.mixed > 1) || defense.physical > 3) {
    defenseMessage = `DEFENSE: Your team leans physical with ${defense.physical} physical defenders, ${defense.mixed} balanced defenders, and ${defense.special} special defenders`
  } else if ((defense.special === 3 && defense.mixed > 1) || defense.special > 3) {
    defenseMessage = `DEFENSE: Your team leans special with ${defense.special} special defenders, ${defense.mixed} balanced defenders, and ${defense.physical} physical defenders`
  } else {
    defenseMessage = `DEFENSE: Your team is balanced with ${defense.mixed} balanced defenders, ${defense.special} special defenders, and ${defense.physical} physical defenders`
  }

  return (
    <>
    <br />
    <br />
      <div>{offenseMessage}</div>
    <br />
      <div>{defenseMessage}</div>
    </>
  )
}

export default SpecialPhsyical
