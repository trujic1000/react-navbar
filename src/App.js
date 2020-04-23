import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { MenuProvider, useThemeContext } from "./state";
import Navbar from "./components/nav";
import About from "./About";

const App = () => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
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
    </ThemeProvider>
  );
};

export default App;
