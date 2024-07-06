import cardFront from "../../images/card-back.png";

export const Card = ({ emoji }) => {
  function handleCardClick() {
    console.log("click");
  }
  return (
    <button className="card-cont" onClick={handleCardClick}>
      <div className="front">
        <img src={cardFront} alt="card-front" className="card-front" />
      </div>
      <div className="back">{emoji}</div>
    </button>
  );
};
