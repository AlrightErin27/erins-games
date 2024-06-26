const Square = ({ squareId, val, chooseSquare }) => {
  return (
    <div onClick={() => chooseSquare()} className="Square">
      {val}
    </div>
  );
};

export default Square;
