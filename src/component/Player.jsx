import { useState } from "react";

export default function Player({
  name,
  symbol,
  isActive,
  handlePlayerNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditClick() {
    setIsEditing((editing) => !editing); // latest state value
    if (isEditing) handlePlayerNameChange(symbol, playerName);
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            placeholder={name}
            value={playerName}
            onChange={(e) => {
              setPlayerName(e.target.value);
            }}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
