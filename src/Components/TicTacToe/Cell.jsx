import "./TicTacToe.css";

export default function Cell({ cell, handleCellClick }) {
  const handleClick = () => {
    handleCellClick(cell);
  };
  return (
    <div
      className={cell.mark === "" ? "cell-empty" : "cell-full"}
      onClick={handleClick}
    >
      {cell.mark}
      {/* {cell.local - 1} */}
    </div>
  );
}
