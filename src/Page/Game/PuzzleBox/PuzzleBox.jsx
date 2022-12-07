import React from "react";
import "./PuzzleBox.css";
import Puzzle from "./Puzzle/Puzzle";
import Key from "./Key/Key";

export default function PuzzleBox() {
    return (
        <div className="puzzlebox">
            <Puzzle />
            <Key />
        </div>
    );
}