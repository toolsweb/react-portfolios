import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
