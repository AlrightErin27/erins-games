const Square = ({ idx, val, chooseSquare }) => {
  return (
    <div className="Square" onClick={chooseSquare}>
      {val}
    </div>
  );
};

export default Square;
