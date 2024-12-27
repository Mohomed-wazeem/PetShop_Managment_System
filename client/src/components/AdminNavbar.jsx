import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import "./Topnav.css";
import logo from '../images/navlogo.png';

const AdminNavbar = () => {

  // const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn'); // Remove session
    navigate('/home');
  };

  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#home">
        <img 
            src={logo} 
            alt="nav logo" 
            width="250" 
            height="45" 
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navl">
            <Nav.Link href="/Products">Products</Nav.Link>
            <Nav.Link href="/Orders">Orders</Nav.Link>
            <Nav.Link href="/Account">Accounts</Nav.Link>
            <Nav.Link href="/Home" onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AdminNavbar
