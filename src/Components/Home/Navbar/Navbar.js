import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../../images/Logo3.png'


const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div div className="container">
          <div className="nav-logo d-flex">
            <img src={Logo} alt="" />
            <span>QuickStay</span>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className=" collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ms-2">
                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" aria-current="page" to="/home">About</Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" aria-current="page" to="/users">Blogs</Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" aria-current="page" to="/services">List your Property</Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" aria-current="page" to="/login">Contact Us</Link>
              </li>
              <li className="nav-item ms-2">
                <Link className="nav-link" aria-current="page" to="/login">Sign in</Link>
              </li>
            </ul>
          </div>
        </div >
      </nav >
    </div >
  );
};

export default Navbar;