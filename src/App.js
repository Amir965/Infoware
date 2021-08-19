import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Products from "./Components/Products";
import Collections from "./Components/Collections";
import OurStory from "./Components/OurStory";
import Art from "./Components/Art";
import WholeSale from "./Components/WholeSale";
import NavbarSignUp from "./Components/NavbarSignUp";
import Description from "./Components/Description";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Home />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signUp">
            <NavbarSignUp />
            <SignUp />
          </Route>
          <Route path="/products">
            <Navbar />
            <Products />
          </Route>
          <Route path="/collections" component={Collections} />
          <Route path="/story" component={OurStory} />
          <Route path="/art" component={Art} />
          <Route path="/wholesale" component={WholeSale} />
          <Route path="/description" component={Description} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
