import "./MagicMatch.css";

export default function GameData({ turns, handleRestart }) {
  return (
    <div className="game-data">
      Turns: {turns}
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
}
