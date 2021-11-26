import React, { useState } from "react";
import "./App.css";
import Main from "./Main";
import SignUp from "./components/SignUp";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Main />
      </Switch>
    </div>
  );
}

export default App;
