import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Include FontAwesome for icons

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">Pet Shop</h5>
            <p>We provide top-notch products and services for your pets. From food to accessories, find everything you need for your furry friends.</p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">Quick Links</h5>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Home</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Shop</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>About Us</a></p>
            <p><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Contact Us</a></p>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">Contact Info</h5>
            <p><i className="fas fa-home mr-3"></i> 123 Pet St, Petville, PA 12345</p>
            <p><i className="fas fa-envelope mr-3"></i> info@petshop.com</p>
            <p><i className="fas fa-phone mr-3"></i> +1 555-123-4567</p>
            <p><i className="fas fa-print mr-3"></i> +1 555-765-4321</p>
          </div>

          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-info">Follow Us</h5>
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f fa-lg mr-4"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter fa-lg mr-4"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-instagram fa-lg mr-4"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>
          
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
        <div className="col-md-12 text-center">
            <p className="mb-0">© 2024 Pet Shop. All Rights Reserved.</p>
          </div>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
