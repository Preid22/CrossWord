import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
  <div>
    Landing page
    <div>
        <Link to={'config'}>New Game</Link>
    </div>
    <div>
        <Link to={'game'}>Join Game</Link>
    </div>
  </div>
  )
}
