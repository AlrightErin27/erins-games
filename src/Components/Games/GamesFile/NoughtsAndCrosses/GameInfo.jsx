import "./NoughtsAndCrosses.css";

export default function GameInfo({ player, roundsPlayed, xWins, oWins }) {
  return (
    <div className="game-info">
      <div className="player-display">
        Player: <div className="letter-display">{player}</div>
      </div>
      <br />
      {roundsPlayed !== 0 ? (
        <div className="text-display">
          # Games: {roundsPlayed} | <div className="letter-display">X</div>
          wins: {xWins} | <div className="letter-display">O</div>
          wins: {oWins}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
