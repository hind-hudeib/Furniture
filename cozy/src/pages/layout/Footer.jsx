import React from "react";
import "../styles files/footer.css";
import {
  AiOutlineCopyrightCircle,
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiFillTwitterCircle,
} from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="card bg-white p-5">
          <div className="row mb-4">
            <div className="col-lg-4 col-sm-4 col-xs-4">
              <div className="footer-text footerUl">
                <div className="d-flex">
                  <h1 className="font-weight-bold mr-2 px-3"> COZY </h1>
                </div>
                <p className="card-text">
                A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like
                </p>
                <div className="social mt-2 mb-3 ">
                  <a href="" className="m-1">
                    <AiOutlineInstagram />
                  </a>
                  <a href="" className="m-1">
                    <AiOutlineFacebook />
                  </a>
                  <a href="" className="m-1">
                    {" "}
                    <AiFillTwitterCircle />
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2"></div>

            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="headingText">Services</h6>
              <ul className="card-text footerUl m-0 p-0">
                <li>IT Consulting</li>
                <li>Development</li>
                <li>Cloud</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="headingText">Industries</h6>
              <ul className="card-text footerUl m-0 p-0">
                <li>Finance</li>
                <li>Public Sector</li>
                <li>Smart Office</li>
                <li>Retail</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h6 className="heading">Company</h6>
              <ul className="card-text footerUl m-0 p-0">
                <li>About Us</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Join Us</li>
              </ul>
            </div>
          </div>
          <div className="divider mb-2"> </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-left">
                <p>
                  <AiOutlineCopyrightCircle /> 2023 Cozy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
