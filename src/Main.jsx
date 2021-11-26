import React, { useState } from "react";
import "./App.css";
import SignUp from "./components/SignUp";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";

//Theme
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import { orange } from "@material-ui/core/colors";
import { Button } from "@material-ui/core";

function Main() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? "#ff9800" : `#d3d3d3`;
  const mainSecondaryColor = darkState ? `#663399` : `#b0e0e6`;

  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
    },
    primary: {
      main: mainPrimaryColor,
    },
    secondary: {
      main: mainSecondaryColor,
    },
  });
  const handleThemeChange = () => {
    console.log("theme?!");
    setDarkState(!darkState);
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <Button>
          <Brightness6Icon checked={darkState} onClick={handleThemeChange} />
        </Button>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Redirect from="/" to="/signup" />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default Main;

/**https://medium.com/heuristics/react-dark-mode-switch-in-material-ui-dashboard-82fcf1cded66 */
