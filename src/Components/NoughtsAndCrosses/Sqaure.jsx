const Square = ({ col, row, val, chooseSquare }) => {
  return (
    <div
      onClick={() => {
        console.log("Value:", val);
      }}
      className="board-square"
    >
      VAL {val}
    </div>
  );
};

export default Square;
