import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import './Menu.css'
import * as Icon from 'react-bootstrap-icons';
import pika from '../public/25.png'



function Menu() {
const handleMenu = ({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link'

    return (
      <Navbar expand="lg"  bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/"><Icon.VinylFill size={50}/>
          <img className='imgPika' src={pika}/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className={handleMenu} to='/'><h5>Home</h5></NavLink>
              <NavLink className={handleMenu} to='/pokemon'><h5>Pokemones</h5></NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default Menu;