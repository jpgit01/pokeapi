import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pokeselect from "../components/Pokeselect";

import { useParams } from "react-router-dom";

export default function Details() {

const {name} = useParams()


  return (
    <>
      <Container>
        <Row>
          <h1>Detalles, el pokemon se llama: {name}</h1>
        </Row>
      </Container>
    </>
  );
}
