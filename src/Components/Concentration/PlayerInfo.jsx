export default function PlayerInfo({ playersName }) {
  return (
    <div className="PlayerInfo">
      <div>Player Name:{playersName}</div>
      <div> Matches: </div>
      <div>Remaining Guesses:</div>
    </div>
  );
}
