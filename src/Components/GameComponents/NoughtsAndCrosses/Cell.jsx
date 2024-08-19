import "./NoughtsAndCrosses.css";

export default function Cell({ cell, handleCellClick }) {
  const handleClick = () => {
    handleCellClick(cell);
  };

  function displayCellMark() {
    if (cell.mark === "X") {
      return <div className="X-cell">{cell.mark}</div>;
    } else if (cell.mark === "O") {
      return <div className="O-cell">{cell.mark}</div>;
    }
  }
  return (
    <div
      className={cell.mark === "" ? "cell-empty" : "cell-full"}
      onClick={handleClick}
    >
      {displayCellMark()}
    </div>
  );
}
