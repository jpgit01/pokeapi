import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";

export default function Home() {
  return (
    <Container>
      <Row className="text-center mt-5">
        <h1>Bienvenido maestro pokemón</h1>
      </Row>
      <Row>
        <Col className="text-center">
          <img
            className="pika mt-5"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
            alt="pikachu"
          />
        </Col>
      </Row>
    </Container>
  );
}
