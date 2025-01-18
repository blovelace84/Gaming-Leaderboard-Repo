import { useEffect, useState } from "react";
import './Leaderboard.css';
import { supabase } from "./supabaseClient";
import PlayerInputForm from "./PlayerInputForm";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);

  const fetchPlayers = async () => {
    const { data, error } = await supabase
      .from("players")
      .select("*")
      .order("score", { ascending: false });

      if(error) {
        console.error("Error fetching players:", error);
      }else{
        setPlayers(data)
      }
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  // Function to add a new player
  const addPlayer = (newPlayer) => {
    setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
  };

  const clearPlayers = () => {
    setPlayers([]);
  };

  return (
    <div className="leaderboard-container">
      <h1 className="leader-board-title">Leaderboard</h1>
      
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
      <div className="leaderboard-buttons">
      <button className="clear-button"
              onClick={clearPlayers}
              disabled={players.length === 0}>
                Clear Leaderboard
      </button>
      </div>
    </div>
  );
}

export default Leaderboard;