import "./MemoryCard.css";
import ReactCardFlip from "react-card-flip";
import cardBack from "../../../images/concentration/Background-28.jpg";

export default function MemoryCard({ card, clickCard }) {
  return (
    <div className="memory-card">
      <ReactCardFlip isFlipped={card.faceDown} flipDirection="horizontal">
        <img
          className="faceUp"
          src={`${card.img}`}
          alt="face up"
          onClick={() => clickCard(card)}
        />
        <img
          className="faceDown"
          src={`${cardBack}`}
          alt="face down"
          onClick={() => clickCard(card)}
        />
      </ReactCardFlip>
    </div>
  );
}
