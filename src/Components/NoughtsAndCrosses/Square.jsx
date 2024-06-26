const Square = ({ idx, val, key, chooseSquare }) => {
  return (
    <div className="Square" onClick={chooseSquare}>
      {val}
    </div>
  );
};

export default Square;
