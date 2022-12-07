import React from "react";
import './Game.css';
import Header from "./Header/Header";
import MenuBar from "./MenuBar/MenuBar";
import PuzzleBox from "./PuzzleBox/PuzzleBox";

export default function Game() {
    return (
        <div className="game">
            <Header />
            <MenuBar />
            <PuzzleBox />
        </div>
    );
}