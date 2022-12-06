import React from "react";
import './Game.css';
import Header from "./Header/Header";
import MenuBar from "./MenuBar/MenuBar";

export default function Game() {
    return (
        <div className="game">
            <Header />
            <MenuBar />
        </div>
    );
}