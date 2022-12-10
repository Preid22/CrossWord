import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Game() {
  const [board, setBoard] = useState({});
  useState(() => {
    fetch(
      "https://raw.githubusercontent.com/doshea/nyt_crosswords/master/1987/07/25.json"
    ).then((data) => {
      if (data.status === 200) {
        data.json().then((data) => {
          console.log(data);
          setBoard(data);
        });
      }
    });
  }, []);

  return (
    <div>
      Game
      <div>
        <Link to="../">Home</Link>
      </div>
      <div>
        <span>Author: {board?.author ?? ""}</span>
        <span>Editor: {board?.editor ?? ""}</span>
      </div>
    </div>
  );
}
