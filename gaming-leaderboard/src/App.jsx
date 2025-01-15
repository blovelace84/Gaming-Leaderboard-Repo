import Header from "./Header";
import Leaderboard from "./Leaderboard";
import PlayerInputForm from "./PlayerInputForm";
import Footer from "./Footer";
import { useState } from "react";
import Search from "./Search";

const App = () => {
    const [players, setPlayers] = useState([]);

    const addPlayer = (player) => {
        setPlayers((prev) => [...prev, player]);
    };

    return(
        <div>
            <Header />
            <main>
                <Search />
                <PlayerInputForm addPlayer={addPlayer}/>
            </main>
            <Footer />
        </div>
    );
}

export default App;