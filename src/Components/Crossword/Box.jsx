import "./Crossword.css";
import { useState, useEffect } from "react";
import { emulateTab } from "emulate-tab";

export default function Box({ box, clickBox }) {
  const [userText, setUserText] = useState("");

  const [boxCorrect, setBoxCorrect] = useState(false);
  const [cheat, setCheat] = useState(null);

  const doubleClick = () => {
    // console.log("DOUBLE CLICK", box.idx);
    setCheat(true);
    setUserText(box.letter);
    setBoxCorrect(true);
    console.log("cheater!", cheat);
  };

  const userBackSpace = (e) => {
    console.log(e);
    if (e.code === "Backspace") {
      // console.log("FOUND BACKSPACE");
      emulateTab.backwards();
      console.log(emulateTab);
    }
  };

  useEffect(() => {
    if (userText !== "") {
      // console.log(userText);
      if (userText === box.letter || userText.toLowerCase() === box.letter) {
        setBoxCorrect(true);
      }
      emulateTab();
    }
  }, [userText, box.letter, setUserText]);

  return (
    <div
      className="box"
      onClick={() => clickBox(box.idx, box.black, box.letter)}
    >
      <div className={box.black ? "box black" : "letter"}>
        <div className="upper-box">
          <div className={box.corner !== "" ? "corner-num" : ""}>
            {box.corner}
          </div>
        </div>
        {!box.black ? (
          <input
            type="text"
            value={userText}
            maxLength={1}
            onChange={(e) => setUserText(e.target.value)}
            onKeyDownCapture={(e) => userBackSpace(e)}
            onDoubleClickCapture={() => doubleClick()}
            className={!boxCorrect ? "lower-box" : "correct-lower-box"}
          />
        ) : null}
      </div>
    </div>
  );
}
