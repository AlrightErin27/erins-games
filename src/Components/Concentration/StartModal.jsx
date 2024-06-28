import { useState } from "react";

export default function StartModal({ setPlayersName, setInPlay }) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPlayersName(name);
    setInPlay(true);
  };

  return (
    <div className="StartModal">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            className="input-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
