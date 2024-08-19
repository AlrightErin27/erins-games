import "./Box.css";
import { useState, useEffect } from "react";

export default function Box({ box, clickBox }) {
  const [text, setText] = useState("");
  const [correct, setCorrect] = useState(false);

  useEffect(() => {
    if (text.length > 0) {
      if (text === box.char || text.toLowerCase() === box.char) {
        console.log("MATCH");
        setCorrect(true);
      }
    }
  }, [text]);

  const doubleClick = () => {
    setText(box.char);
    setCorrect(true);
    // console.log("cheater!");
  };

  return (
    <div
      className={box.black ? "box black" : "box letter"}
      onClick={() => clickBox(box)}
      style={
        box.highLight && !correct
          ? { backgroundColor: "yellow" }
          : { backgroundColor: "" }
      }
    >
      {!box.corner ? null : <div className="corner">{box.corner}</div>}
      {!box.black ? (
        <div className="input-cont">
          <input
            className={!correct ? "l-input" : "l-input off"}
            type="text"
            value={text}
            maxLength={1}
            onChange={(e) => setText(e.target.value)}
            // onKeyDownCapture={(e) => userBackSpace(e)}
            onDoubleClickCapture={() => doubleClick()}
          />
        </div>
      ) : null}
    </div>
  );
}
