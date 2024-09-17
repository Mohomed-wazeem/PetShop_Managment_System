import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import "./Topnav.css";
import { Link } from 'React-router-dom';
import logo from '../images/petzone.png';

const Topnav = () => {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <img 
            src={logo} // Replace with the path to your image
            alt="Petzone logo" // Provide an alt text for accessibility
            width="100" // Adjust the width as needed
            height="30" // Adjust the height as needed
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navl">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/AboutUs">AboutUS</Nav.Link>
            <Nav.Link href="/AvailableItems">Available</Nav.Link>
            <Nav.Link href="/ContactUs">Contact</Nav.Link>
            <Link to="/AdminLogin" className='btn btn-danger mb-3'>Admin</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Topnav

