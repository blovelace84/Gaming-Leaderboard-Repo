import { useState } from "react";
import { supabase } from "./supabaseClient";
import "./PlayerInputForm.css";

export default function PlayerInputForm({ onPlayerAdded }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !score) {
      alert("Please fill in both fields.");
      return;
    }

    const { error } = await supabase
      .from("players")
      .insert([{ name, score: parseInt(score) }]);

    if (error) {
      console.error("Error adding player:", error);
      alert("Error adding player. Please try again.");
    } else {
      alert("Player added successfully!");
      setName("");
      setScore("");
      if (onPlayerAdded) onPlayerAdded(); // Refresh the leaderboard
    }
  };

  return (
    <form className="player-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Player Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button type="submit">Add Player</button>
    </form>
  );
}
