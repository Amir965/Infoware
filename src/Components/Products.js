import React from "react";
import "./Products.css";
import Product from "./product";
import img1 from "./../Images/img1.jpg";
import img2 from "./../Images/img2.jpg";
import img3 from "./../Images/img3.jpg";
import img4 from "./../Images/img4.jpg";
import img5 from "./../Images/img5.jpg";
import img6 from "./../Images/img6.jpg";
import img7 from "./../Images/img7.jpg";
import img8 from "./../Images/img8.jpg";
import Footer from "./Footer";

const Products = () => {
  return (
    <>
      <div className="products-container">
        <Product
          name="FLORES CYAN"
          image={img1}
          description=" Framed Art Print
          By SunshineCanteen"
        />
        <Product
          name="PLANT LADY1"
          image={img2}
          description=" Framed Art Print
          By Studio1514brooklyn"
        />
        <Product
          name="CLIMBING MONSTERA"
          image={img3}
          description=" Framed Art Print
          By Dash And Ash"
        />
        <Product
          name="MODERN CHIC PATTERN"
          image={img4}
          description=" Framed Art Print
          By Camilleallen"
        />
      </div>
      <div className="products-container">
        <Product
          name="CHRISTMAS MISTLETOE KISS"
          image={img5}
          description=" Framed Wall Art
By Leah Flores"
        />
        <Product
          name="DAY OFF"
          image={img6}
          description="Framed Wall Art
By Camilleallen78705-frwa01"
        />
        <Product
          name="SUSPEND"
          image={img7}
          description=" Framed Art Print
          By Sabrena Khadija"
        />
        <Product
          name="A PRIVATE PICNIC IN THE SPRING"
          image={img8}
          description=" Framed Art Print
          By Camilleallen"
        />
      </div>
      <Footer/>
    </>
  );
};

export default Products;
