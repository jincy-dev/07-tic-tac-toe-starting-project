import React, { useState } from "react";

function Player({ initialName, symbol, isActive }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  function handlClick() {
    setIsEditing((editing) => !editing);
  }
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
  }
  function handleChange(event) {
    console.log(event);

    setPlayerName(event.target.value);
  }
  return (
    <>
      <li className={isActive ? "active" : undefined}>
        <span className="player">
          {editablePlayerName}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handlClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}

export default Player;
