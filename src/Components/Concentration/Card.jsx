import "./Concentration.css";

export default function Card({
  card,
  handleSelect,
  faceUp,
  disabled,
  matched,
}) {
  const handleClick = () => {
    if (!disabled) {
      handleSelect(card);
    }
  };
  return (
    <div className="card">
      {faceUp ? (
        <div
          className={!matched ? "card-front" : "card-front-matched"}
          style={
            matched ? { backgroundColor: card.color } : { backgroundColor: "" }
          }
          alt="card front"
        >
          {card.emoji}
        </div>
      ) : (
        <div className="card-back" alt="card back" onClick={handleClick}></div>
      )}
    </div>
  );
}
