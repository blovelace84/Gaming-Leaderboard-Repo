import React, { useState } from "react";
import Header from "./Header";
import Leaderboard from "./Leaderboard";
import './App.css';
import PlayerInputForm from "./PlayerInputForm";

const App = () => {
    const [refresh, setRefresh] = useState(false);

    const handlePlayerAdded = () => {
        setRefresh((prev) => !prev); //refresh triggered
    };

    return(
        <div className="app-container">
            <header className="app-header">
                <Header />
            </header>
            <main className="app-main">
                <PlayerInputForm onPlayerAdded={handlePlayerAdded} />
                <Leaderboard key={refresh}/>
            </main>
           <footer className="app-footer">
                <p>&copy; 2025 Leaderboard App. All rights reserved.</p>
            </footer> 
        </div>
    );
}

export default App;