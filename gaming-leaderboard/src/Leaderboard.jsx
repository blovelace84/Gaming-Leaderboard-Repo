import React from "react";

const Leaderboard = ({ players }) => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Leaderboard</h2>
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Rank</th>
              <th className="p-2">Player</th>
              <th className="p-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{player.name}</td>
                <td className="p-2">{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Leaderboard;