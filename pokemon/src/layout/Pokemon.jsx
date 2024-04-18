import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Pokeselect from "../components/Pokeselect";



export default function Pokemon() {

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Pokeselect />
        </Row>
        <Row>
          <p>pag pokemon</p>
        </Row>
      </Container>
    </>
  );
}
