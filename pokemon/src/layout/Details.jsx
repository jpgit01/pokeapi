import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pokeselect from "../components/Pokeselect";
import "./Details.css"

import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [pokemon, setPokemon] = useState()
  const { name } = useParams()


  const direccion = `https://pokeapi.co/api/v2/pokemon/${name}`

  const fetchData = async () => {
    const response = await fetch(direccion);
    const data = await response.json();
    setPokemon(data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(pokemon)
  return (
    <Container>
      <Row className="mt-5 text-center mb-5">
        <h1>{name}</h1>
        {pokemon?.sprites && (
            <div className="mt-5" >
              <img className="imgG" src={pokemon.sprites.other.dream_world.front_default} alt={name} /> 
            </div>
          )}
        <div className="text-center mt-5">
          <h3>Habilidades</h3>
          {pokemon?.abilities && pokemon.abilities.map((poke, index) => (
            <div key={index}>
              {poke.ability.name}
            </div>
          ))}

        </div>

      </Row>
    </Container>
  );
}
