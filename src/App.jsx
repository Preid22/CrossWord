import React from "react";
import "./App.css";
import Page from "./Page/Page";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Page />
    </div>
  );
}

export default App;
