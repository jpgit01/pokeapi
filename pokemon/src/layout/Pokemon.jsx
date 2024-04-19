import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Pokeselect from "../components/Pokeselect";



export default function Pokemon() {

  return (
    <>
      <Container>
        <Row className="mt-5 text-center">

          <h2>Selecciona un Pokemón</h2>
        </Row>
        <Row>
        <Pokeselect />
        </Row>
      </Container>
    </>
  );
}
