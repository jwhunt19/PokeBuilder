const getWeaknesses = (pokemon, types) => {
  const weaknesses = {}
  if (pokemon.types.length === 2) {
    let type1, type2

    types.forEach(type => {
      if (type.type === pokemon.types[0]) type1 = type
      if (type.type === pokemon.types[1]) type2 = type
    })

    types.forEach(type => {
      if (type1.relations[type.type] === undefined) type1.relations[type.type] = 1
      if (type2.relations[type.type] === undefined) type2.relations[type.type] = 1

      weaknesses[type.type] = type1.relations[type.type] * type2.relations[type.type]
    })
  }

  if (pokemon.types.length === 1) {
    let type1

    types.forEach(type => {
      if (type.type === pokemon.types[0]) type1 = type
    })

    types.forEach(type => {
      if (type1.relations[type.type] === undefined) type1.relations[type.type] = 1

      weaknesses[type.type] = type1.relations[type.type]
    })
  }
  return weaknesses
}

export default getWeaknesses
