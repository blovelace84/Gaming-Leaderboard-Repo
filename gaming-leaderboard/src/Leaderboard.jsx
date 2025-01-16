import './Leaderboard.css';

const Leaderboard = ({ players }) => {
    return (
        <div className="leaderboard-container">
        <h2 className="leaderboard-title">Leaderboard</h2>
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id}>
                <td>{index + 1}</td>
                <td>{player.name}</td>
                <td>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

export default Leaderboard;