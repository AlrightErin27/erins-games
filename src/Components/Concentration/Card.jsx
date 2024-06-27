import { useState } from "react";

export default function Card({ card, idx }) {
  const [faceUp, setFaceUp] = useState(false);

  const flipCard = () => {
    !faceUp ? setFaceUp(true) : setFaceUp(false);
  };
  return (
    <div className="Card" onClick={() => flipCard()}>
      {!faceUp ? <div className="card-back" /> : card}
    </div>
  );
}
