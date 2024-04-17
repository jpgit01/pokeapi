import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import { useState } from "react";

import { useContext } from "react";
import { MiContexto } from "../context/myContext";


export default function Pokemon() {
  const [poke, setPoke] = useState();


  const contenidoContexto = useContext(MiContexto)


  return (
    <>
    <h1>{contenidoContexto.saludo}</h1>
      <Container>
        <Row className="mt-5">
        <Form.Select aria-label="Default select example">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <Button variant="dark" type="submit" className="mt-3">
        Ver Detalle
      </Button>
        </Row>
      </Container>
    </>
  );
}
