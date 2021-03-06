import React from "react";

const Card = ({ pokemon, loading }) => {
  console.log(pokemon)
  return (
    <>
      {loading ?
        <h1>Chargement...</h1>
       : (
        pokemon.map((item) => {
          return (
            <>
              <div className="card">
                <h2>{item.id}</h2>
                <img src={item.sprites.front_default} alt="" />
                <h2>Salamèche</h2>
              </div>
            </>
          )
        })
      )}
    </>
  )
}

export default Card