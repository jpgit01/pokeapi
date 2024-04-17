import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
    const [poke, setPoke] = useState()
    const navigate = useNavigate()

const handleClik = ()=>{
    navigate('/juan')
}




    return (
        <Container>
            <h1>home</h1>
            <button onClick={handleClik}>click</button>
        </Container>

    )
}