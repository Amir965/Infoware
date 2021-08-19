import React from "react";
import { Carousel } from "react-bootstrap";
import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
};

export default Home;
