import "./TicTacToe.css";

export default function GameInfo({ player, roundsPlayed, xWins, oWins }) {
  return (
    <div className="game-info">
      Player: {player}
      <br />
      {roundsPlayed !== 0
        ? `# Games: ${roundsPlayed} | "X" points: ${xWins} | "O" points: ${oWins}`
        : ""}
    </div>
  );
}
