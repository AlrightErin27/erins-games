import "./Crossword.css";

export default function Box({ box, clickBox }) {
  return (
    <div className="box" onClick={() => clickBox(box.idx)}>
      <div className={box.black ? "box black" : "letter"}>
        <div className={box.corner !== "" ? "corner-num" : ""}>
          {box.corner}
        </div>
        {/* <div className="box txt">{box.letter}</div> */}
      </div>
    </div>
  );
}
