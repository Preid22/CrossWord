import React from "react";
import "./ClueBox.css";
import Clue from "./Clue";
import Number from "./Number";

export default function ClueBox() {
    return (
        <div className="cluebox">
            <Number />
            <Clue />
        </div>
    );
}