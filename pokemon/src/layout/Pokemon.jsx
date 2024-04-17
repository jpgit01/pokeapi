import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Poke from "../components/Poke";

import { useContext } from "react";
import { MiContexto } from "../context/myContext";

export default function Pokemon() {
  const pokemon = useContext(MiContexto);

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Form.Select aria-label="Default select example">
            <option>Selecciona un Pokémon</option>
            {pokemon?.pokemon && pokemon.pokemon.results.map((poke, index) => (
                <option key={index} value={poke.name}>
                  {poke.name}
                </option>
              ))}
          </Form.Select>
          <Button variant="dark" type="submit" className="mt-3">
            Ver Detalle
          </Button>
        </Row>
        <Row>
            <Poke/>
        </Row>
      </Container>
    </>
  );
}
