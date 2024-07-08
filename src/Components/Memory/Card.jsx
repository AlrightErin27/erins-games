import "./Memory.css";

export const Card = ({ emoji, handleCardClick, matched, faceUp }) => {
  return (
    <button className="Card" onClick={handleCardClick}>
      <div className="face-up">{emoji}</div>
      {/* <div className="face-down">X</div> */}
    </button>
  );
};
