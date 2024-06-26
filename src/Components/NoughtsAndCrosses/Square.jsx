const Square = ({ idx, val, chooseSquare, state }) => {
  return (
    <>
      {state === "in-play" ? (
        <div className="Square" onClick={chooseSquare}>
          {val}
        </div>
      ) : (
        <div className="square-inactive">{val}</div>
      )}
    </>
  );
};

export default Square;
