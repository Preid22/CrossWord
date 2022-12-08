import React from "react";
import "./Page.css";
import Game from "./Game/Game";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function Page() {
  return (
    <div className="page">
      <Game />
    </div>
  );
}
