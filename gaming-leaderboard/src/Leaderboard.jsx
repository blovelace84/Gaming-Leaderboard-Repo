import { useState } from "react";
import './Leaderboard.css';
import PlayerInputForm from "./PlayerInputForm";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  // Function to add a new player
  const addPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  return (
    <div className="leaderboard-container">
      <h1 leaderboard-title>Leaderboard</h1>
      <PlayerInputForm addPlayer={addPlayer}/>
      <table className="leaderboard-table" border="1" style={{ width: "100%", textAlign: "left" }}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {players.length > 0 ? (
            players.map((player, index) => (
              <tr key={index} className="leaderboard-row">
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="no-players" colSpan="3" style={{ textAlign: "center" }}>
                No players added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;