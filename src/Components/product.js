import React from "react";
import "./Products.css";

function product({ image, name, description }) {
    return (
      <>
    <div className="image">
      <img src={image} alt="1stImage" />
      <h6>{name}</h6>
      <p>{description}</p>
      </div>
      </>
  );
}

export default product;
