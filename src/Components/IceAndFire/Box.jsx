import "./Box.css";
export default function Box({ box, clickBox }) {
  return (
    <div
      className={box.black ? "box black" : "box letter"}
      onClick={() => clickBox(box)}
    >
      {box.letter}
    </div>
  );
}
