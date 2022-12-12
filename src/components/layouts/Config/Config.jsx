import React from "react";
import { Link } from "react-router-dom"

export default function Config () {
  return (
        <div>
            Config Page
            <div>
                <Link to={'../game'}>New Game</Link>
            </div>
        </div>
    );
}
