import { useState } from "react";

const PlayerInputForm = ({ addPlayer }) => {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && score) {
      addPlayer({ name, score: Number(score) });
      setName("");
      setScore("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Player Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter player name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">Score</label>
        <input
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="border p-2 w-full"
          placeholder="Enter score"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Player
      </button>
    </form>
  );
}


export default PlayerInputForm;