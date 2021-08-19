import React from 'react'
import "./Login.css";
// import Footer from "./Footer";
import { Link } from "react-router-dom";
import banner from "./../Images/banner_wallpaper.jpg"
const Login= () => {
    return (
      <>
        <div className="wholesale-container" style={{background:`url(${banner})`}}>
          <div>
            <h1>DenyDesigns.</h1>
            <p>WHOLESALE LOGIN</p>
            <form action="submit">
              <label htmlFor="email">EMAIL</label>
              <br />
              <input type="email" placeholder="you@your-company.com" />
              <br />
              <label htmlFor="password">PASSWORD</label>
              <br />
              <input type="password" placeholder="" />
              <br />
              <h6>FORGOT PASSWORD?</h6>
              <div className="btn">
                <button>LET'S GO!</button>
                <p>Not a Wholesale Partner?</p>
                <div className="btn2">
                  <button>KEEP BROWSING</button>
                  <Link to="/signUp">
                    <button>APPLY HERE</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
}

export default Login;
