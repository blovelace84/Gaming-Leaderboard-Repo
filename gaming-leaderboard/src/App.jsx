import Header from "./Header";
import Leaderboard from "./Leaderboard";
import PlayerInputForm from "./PlayerInputForm";
import Footer from "./Footer";
import { useState } from "react";
import Search from "./Search";

const App = () => {
    const [players, setPlayers] = useState([]);

    const addPlayer = (newPlayer) => {
        setPlayers((prev) => [...prev, newPlayer]);
    };

    return(
        <div>
            <Header />
            <PlayerInputForm addPlayer={addPlayer}/>
            <Leaderboard players={players} />
        </div>
    );
}

export default App;