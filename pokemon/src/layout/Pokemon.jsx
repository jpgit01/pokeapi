
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

export default function Pokemon(){
    const [poke, setPoke] = useState()
    return(
        <>
        <Container>
        <h1>Pokemon</h1>
        </Container>
        </>
    )
}