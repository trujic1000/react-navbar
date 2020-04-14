import React from "react";
import Navbar from "./components/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
