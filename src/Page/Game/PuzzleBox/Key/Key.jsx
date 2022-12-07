import React from "react";
import "./Key.css";
import Across from "./Across/Across";
import Down from "./Down/Down";

export default function Key() {
    return (
        <div className="key">
            <Across />
            <Down />
        </div>
    );
}