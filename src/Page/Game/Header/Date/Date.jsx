import React from "react";
import DateObject from "react-date-object";
import "./Date.css"

export default function Date() {
    let date = new DateObject();
    return (
        <div className="date">
            {date.format("MM/DD/YYYY")}
        </div>
    );
}