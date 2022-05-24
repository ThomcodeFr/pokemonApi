import React from 'react'

const Pokeinfo = () => {
  return (
    <>
      <h1>Salamèche</h1>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg"
        alt="Charmander Pokemon"
      />
      <div className="abilities">
        <div className="group">
          <h2>flamme</h2>
        </div>
        <div className="group">
          <h2>énergie solaire</h2>
        </div>
      </div>
      <div className="base-stat">
        <h3>Hp:30</h3>
        <h3>attaque:52</h3>
        <h3>defense:43</h3>
        <h3>attaque-speciale:50</h3>
        <h3>vitesse</h3>
      </div>
    </>
  )
}

export default Pokeinfo
