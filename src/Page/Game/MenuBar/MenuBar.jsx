import React from "react";
import "./MenuBar.css"
import Settings from "./Settings/Settings";
import Rebus from "./Rebus/Rebus";
import Reset from "./Reset/Reset";

export default function MenuBar() {
    return (
        <div className="menubar">
            <Settings />
            <Rebus />
            <Reset />
        </div>
    );
}