import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
      <Row className="border p-3 m-3 mt-5">
        <Col className="text-end">
          {pokemon?.sprites && (
            <div className="mt-5" >
              <img className="imgG" src={pokemon.sprites.other.dream_world.front_default} alt={name} />
            </div>
          )}
        </Col>
        <Col>
          <h3>{name}</h3>
          <ul>
          {pokemon?.stats && pokemon.stats.map((stats, index) => (
            <li key={index}>
              {stats.stat.name}: {stats.base_stat}
            </li>
          ))}
          </ul>

        </Col>
      </Row>
    </Container>
  );
}
