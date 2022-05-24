import React from "react"; //pas obligatoire avec creat-react-app
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="left-content">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="right-content">
          <Pokeinfo />
        </div>
      </div>
    </>
  )
}

export default Main