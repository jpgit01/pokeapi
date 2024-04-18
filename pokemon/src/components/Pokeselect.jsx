import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import React from "react";

import { useContext } from "react";
import { MiContexto } from "../context/myContext";

import { useNavigate } from 'react-router-dom';



const Pokeselect = () => {

  const pokemon = useContext(MiContexto);
  
  const navigate = useNavigate()

  const handleClik = ()=>{
    navigate('/details')
}
  return (
    <Container>
      <Row className="mt-5">
        <Form.Select aria-label="Default select example">
          <option>Selecciona un Pokémon</option>
          {pokemon?.pokemon &&
            pokemon.pokemon.results.map((poke, index) => (
              <option key={index} value={poke.name}>
                {poke.name}
              </option>
            ))}
        </Form.Select>
        <Button onClick={handleClik} variant="dark" type="submit" className="mt-3">
          Ver Detalle
        </Button>
      </Row>
    </Container>
  );
};
export default Pokeselect;
