import { useState } from "react";

export default function Card({
  card,
  idx,
  em1,
  em2,
  setEm1,
  setEm2,
  setTwoCardsUp,
}) {
  const [faceUp, setFaceUp] = useState(false);

  const flipCard = () => {
    //card is equal to card's emoji
    if (em1 === "") {
      !faceUp ? setFaceUp(true) : setFaceUp(false);
      setEm1(card);
      console.log("em1 is now:", card);
    } else if (em2 === "") {
      !faceUp ? setFaceUp(true) : setFaceUp(false);
      setEm2(card);
      console.log("em2 is now:", card);
      setTwoCardsUp(true);
    } else {
      console.log("both em's full, can't flip card");
      console.log(em1, em2);
    }
  };

  return (
    <div className="Card" onClick={() => flipCard()}>
      {!faceUp ? <div className="card-back" /> : card}
    </div>
  );
}
