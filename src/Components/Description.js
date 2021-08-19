import React from "react";
import Navbar from "./Navbar";
import "./description.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Description = (props) => {
  console.log(props.location);
  return (
    <>
      <Navbar />
      <div className="description-container">
        <div className="wrapper">
          <img
            src={props.location.aboutProps.image}
            alt={props.location.aboutProps.name}
            className="description-image"
          />
          <div>
            <div className="description-content">
              <h3>FRAMED ART PRINT</h3>
              <hr />
              <p>{props.location.aboutProps.description}</p>
              <h4>PRODUCT DETAILS</h4>
            </div>
            <div className="content-style-image">
              <img src={props.location.aboutProps.image} alt="" />
              <img src={props.location.aboutProps.image} alt="" />
            </div>
            <div className="content-style-option">
              <div>
                <p>STYLE</p>
                <select name="" id="">
                  <option value="">Classic</option>
                  <option value="">Modern</option>
                </select>
              </div>
              <div>
                <p>FRAME</p>
                <select name="" id="">
                  <option value="">Black</option>
                  <option value="">White</option>
                </select>
              </div>
              <div>
                <p>SIZE</p>
                <select name="" id="">
                  <option value="">8" X 10"</option>
                  <option value="">11" X 14"</option>
      
                </select>
              </div>
            </div>
            <hr />
            <div className="wholesale-login-btn">
              <p>Deny Designs is for wholesale customers only.</p>
              <Link to="/login">
                <button>WHOLESALE LOGIN</button>
              </Link>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Description;
