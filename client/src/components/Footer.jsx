
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={4} className="text-center text-md-start">
                        <p>© 2024 Petshop Online Website.<br></br>All Rights Reserved</p>
                    </Col>
                    <Col md={4} className="text-center ">
                        <a href="/Home">Home</a>
                        <a href="/AboutUs">About</a> 
                        <a href="/AvailableItems">Products</a> 
                        <a href="/ContactUs">ContactUs</a> 
                        <a href="/AdminLogin">Admin</a> 
                    </Col>
                    <Col md={4} className="text-center text-md-end">
                        <p>Follow us on social media</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
