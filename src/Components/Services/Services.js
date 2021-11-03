import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-4 mt-5 ">
          <h1 className="background mt-5 ms-5">Get the QuickStay App</h1>
          <div className="ms-5 mt-5">
            <h4>Download the QuickStay App</h4>
            <p>and get everything done!from booking online to getting </p>
            <p>every update make your life easier</p>
          </div>
        </div>
        <div className="col-md-4  mt-5 ">
          <img
            src="https://i.ibb.co/HPZ6dfn/en-badge-web-generic.png"
            alt="Girl in a jacket"
            width="500"
            height="200"
          ></img>
          <img
            src="https://i.ibb.co/K5RY3z2/download-on-app-store-png-download-1272.png"
            alt="Girl in a jacket"
            width="500"
            height="200"
          ></img>
        </div>
        <div className="col-md-4  mt-5 ">
          {/* <img
            src="https://i.ibb.co/VSXfXYh/Smartphone-mockup-Mobile-phone-screen-blank-Black-cellphone-isolated-on-white-background-Vector-illu.jpg"
            alt="Girl in a jacket"
            width="500"
            height="500"
          ></img> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
