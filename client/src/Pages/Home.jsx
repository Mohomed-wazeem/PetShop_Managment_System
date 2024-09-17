import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import petBg from '../images/petbg1.jpg';
import aboutImage from '../images/Aboutimg.jpg';
import visionIcon from '../images/vission.png';
import missionIcon from '../images/mission.jpg';
import { useInView } from 'react-intersection-observer'; // Import the hook from react-intersection-observer

const Home = () => {
  const [showContent, setShowContent] = useState('vision');

  // Create refs for the sections that you want to animate
  const { ref: visionRef, inView: visionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const { ref: missionRef, inView: missionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  const { ref: aboutRef, inView: aboutInView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  return (
    <div>
      <div className="hero-section" style={{ backgroundImage: `url(${petBg})` }}>
        <Container>
          <Row>
            <Col md={12} className="text-center hero-text">
              <h1>Welcome to Our Pet Shop</h1>
              <p>Your one-stop shop for all your pet needs!</p>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="my-5">
        <Row>
          <Col md={12} className="text-center mb-4">
            <Button className='custom-button ' onClick={() => setShowContent('vision')}>Our Vision</Button>
            <Button className='custom-button ' onClick={() => setShowContent('mission')}>Our Mission</Button>
          </Col>
        </Row>
        <Row ref={visionRef} className={`fade-in-section ${visionInView ? 'is-visible' : ''}`}>
          <Col md={6} className="text-center d-flex align-items-center justify-content-center">
            {showContent === 'vision' && <img src={visionIcon} alt="Vision Icon" className="img-fluid" />}
          </Col>
          <Col md={6} className="text-center d-flex align-items-center justify-content-center">
            {showContent === 'vision' && (
              <div>
                <h2 className='mb-5'>Our Vision</h2>
                <p>We aim to create a world where every pet is happy, healthy, and part of a loving family.</p>
              </div>
            )}
          </Col>
        </Row>
        <Row ref={missionRef} className={`fade-in-section ${missionInView ? 'is-visible' : ''}`}>
          <Col md={6} className="text-center d-flex align-items-center justify-content-center">
            {showContent === 'mission' && <img src={missionIcon} alt="Mission Icon" className="img-fluid" />}
          </Col>
          <Col md={6} className="text-center d-flex align-items-center justify-content-center">
            {showContent === 'mission' && (
              <div>
                <h2 className='mb-5'>Our Mission</h2>
                <p>To provide the best products and services for pets and pet owners, ensuring the well-being of pets and the happiness of their owners.</p>
              </div>
            )}
          </Col>
        </Row>
      </Container>
      <Container className="my-5">
        <Row ref={aboutRef} className={`fade-in-section ${aboutInView ? 'is-visible' : ''}`}>
          <Col md={6} className=" text-center d-flex align-items-center justify-content-center">
            <div>
              <h2 className='mb-5'>About Us</h2>
              <p>Our pet shop offers a wide range of products and services to cater to all your pet's needs. From nutritious food to fun toys, we have it all. Our team is passionate about pets and dedicated to providing excellent customer service.</p>
            </div>
          </Col>
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <img src={aboutImage} alt="About Us" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;