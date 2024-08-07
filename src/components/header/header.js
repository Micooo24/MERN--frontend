import { Navbar, Container, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <header>
         <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand as = {Link} to = "/" >App</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link as = {Link} to = "/" className="nav-link">Dashboard</Nav.Link>
                <Nav.Link  as = {Link} to = "/user" className="nav-link" >Post User</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </header>
    );
    }

export default Header;