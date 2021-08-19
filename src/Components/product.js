import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function product({ image, name, description }) {
  return (
    <>
      <div className="image">
        <Link to={{
          pathname: "/description",
          aboutProps: {
            name,
            image,
            description
          }
        }}>
        <img src={image} alt="1stImage" />
        <h6>{name}</h6>
        <p>{description}</p>
        </Link>
      </div>
    </>
  );
}

export default product;
