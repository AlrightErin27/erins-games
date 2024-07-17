import "./Crossword.css";
import { useState, useEffect } from "react";

export default function Box({ box }) {
  return (
    <div className="box">
      <div className={box.black ? "box black" : "letter"}>
        <div className="idx">{box.idx}</div>
        <div className="txt">{box.letter}</div>
      </div>
    </div>
  );
}
