import React from 'react'
import "./Footer.css"
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
const Footer = () => {
    return (
      <div>
        <hr />
        <div className="footer">
          <div className="company">
            <span>COMPANY</span>
            <p>Shipping</p>
            <p>Return Policy</p>
            <p>Work with Us</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="icon">
            <span>FOLLOW US OUT THERE</span>
            <p>
              <AiFillFacebook />
              Facebook
            </p>
            <p>
              <AiOutlineTwitter />
              Twitter
            </p>
            <p>
              <FaPinterest />
              Pinterest
            </p>
            <p>
              <AiOutlineInstagram />
              Instagram
            </p>
          </div>
          <div className="thank">
            <span>THANK YOU</span>
            <p>
              Thank you to the wonderful folks over <br />
              at Herbivore for letting us use their
              <br /> beautiful imagery in this demo. Head over <br />
              to their store to shop their full catalog of
              <br /> amazing products.
            </p>
          </div>
          <div className="newsletter">
            <span>NEWS LETTER</span>
            <div className="email">
              <input type="email" placeholder="your@email.com" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="copy">
          <p>
            Copyright © 2020 Grid Bright.
            <br />
            Powered by Shopify
          </p>
          <div className="box">CAD $ </div>
        </div>
      </div>
    );
}

export default Footer
