import { useState } from "react";
import "./PlayerInputForm.css";

export default function PlayerInputForm({ addPlayer }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //only add the player if both fields are filled
    if (name && score) {
      addPlayer({ id: Date.now(), name, score: Number(score) });
      setName("");
      setScore("");
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Player Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="Enter player name"
        />
      </div>
      <div className="form-group">
        <label className="form-label">Score</label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="form-input"
          placeholder="Enter score"
        />
      </div>
      <button type="submit" className="form-button">Add Player</button>
    </form>
  );
}
