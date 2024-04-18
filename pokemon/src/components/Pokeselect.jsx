import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

import React, { useState } from "react"

import { useContext } from "react"
import { MiContexto } from "../context/myContext"

import { useNavigate } from 'react-router-dom'

const Pokeselect = () => {

  //01 guardo el pokemon seleccionado
  const [selectedPokemon, setSelectedPokemon] = useState("")
  
  //traigo los datos del fecth
  const pokemon = useContext(MiContexto)
  
  const navigate = useNavigate()

  //01 selecciono del select el pokemon y lo guardo en el estado
  const handleSelectChange = (event) => {
    setSelectedPokemon(event.target.value)
  };

  //pego el pokemon a la url
  const handleClik = () => {
    if(selectedPokemon.trim() === '')return
    navigate(`/details/${selectedPokemon}`)
  };

  return (
    <Container>
      <Row className="mt-5">
        <Form.Select
          aria-label="Default select example"
          value={selectedPokemon}
          onChange={handleSelectChange}
        >
          <option value="">Selecciona un Pokémon</option>
          {pokemon?.pokemon &&
            pokemon.pokemon.results.map((poke, index) => (
              <option key={index} value={poke.name}>
                {poke.name}
              </option>
            ))}
        </Form.Select>
        <Button
          onClick={handleClik}
          variant="dark"
          type="submit"
          className="mt-3"
          disabled={!selectedPokemon}
        >
          Ver Detalle
        </Button>
      </Row>
    </Container>
  );
};

export default Pokeselect;
