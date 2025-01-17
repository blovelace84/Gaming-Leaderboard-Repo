import Header from "./Header";
import Leaderboard from "./Leaderboard";
import './App.css';

const App = () => {
    
    return(
        <div className="app-container">
            <header className="app-header">
                <Header />
            </header>
            <main className="app-main">
                <Leaderboard />
            </main>
           <footer className="app-footer">
                <p>&copy; 2025 Leaderboard App. All rights reserved.</p>
            </footer> 
        </div>
    );
}

export default App;