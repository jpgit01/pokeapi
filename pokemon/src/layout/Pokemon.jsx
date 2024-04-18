import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Poke from "../components/Poke";
import Pokeselect from "../components/Pokeselect";

export default function Pokemon() {



  return (
    <>
      <Container>
        <Row className="mt-5">
          <Pokeselect />
        </Row>
        <Row>
          <Poke />
        </Row>
      </Container>
    </>
  );
}
