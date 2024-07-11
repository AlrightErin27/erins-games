import "./TicTacToe.css";

export default function GameInfo({ player, winner }) {
  return (
    <div className="game-info">
      Player: {player}
      <br />
      Winner: {winner}
    </div>
  );
}
