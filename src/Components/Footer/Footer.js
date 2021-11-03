import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelopeSquare, } from '@fortawesome/free-solid-svg-icons'

import { faFacebook, faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <section className="background_footer">
      <footer className="page-footer font-small teal pt-4">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">QuickStay</h5>
              <p>
                Chitkara Innovation Incubator Foundation,
              </p>
              <p>Scetor 4, Mansa Devi Complex,</p>
              <p>Panchkula,Haryana</p>
              <h4> <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>+8801745421124</h4>
              <h4><FontAwesomeIcon icon={faEnvelopeSquare}></FontAwesomeIcon> mahabu998@gamil.com</h4>
              <h2 className="mt-5">Stay In Touch!</h2>

              <a href="https://www.facebook.com/">   <FontAwesomeIcon icon={faFacebook} className="" /></a>
              <a href=""> <FontAwesomeIcon icon={faInstagramSquare} className="ms-5" /></a>
              <a href=""> <FontAwesomeIcon icon={faTwitterSquare} className="ms-5" /></a>
              <a href="https://www.linkedin.com/in/mahbub-alams/">     <FontAwesomeIcon icon={faLinkedin} className="ms-5" /></a>

            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-md-6 mb-md-0 mb-3">
              <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
              <form action="">

                <input type="text" placeholder="Name" id="fname" name="fname" /><br></br><br></br>

                <input type="number" placeholder="Number" id="lname" name="lname" /><br></br><br></br>
                <input type="text" placeholder="Email" id="lname" name="lname" /><br></br><br></br>
                <input type="message" placeholder="Text" id="lname" name="lname" /><br></br><br></br>
                <button type="submit" className="btn btn-success" type="submit" value="Submit">Submit</button>

              </form>
              <fa-phone-volume />
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
