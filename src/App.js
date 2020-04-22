import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MenuProvider } from "./state";
import Navbar from "./components/nav";
import About from "./About";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MenuProvider>
          <Navbar />
        </MenuProvider>
        <div style={{ height: "100vh" }}>Blabla</div>
        <div style={{ height: "100vh" }}>Blabla</div>
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
};

export default App;
