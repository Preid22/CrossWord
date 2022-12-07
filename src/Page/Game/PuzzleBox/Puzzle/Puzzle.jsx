import React from "react";
import "./Puzzle.css"
import ClueBox from "./ClueBox/ClueBox";
import Grid from "./Grid/Grid";

export default function Puzzle() {
    return (
        <div className="puzzle">
            <ClueBox />
            <Grid />
        </div>
    );
}