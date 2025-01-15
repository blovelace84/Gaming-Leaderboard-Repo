import React from "react";
import './Header.css';

const Header = () =>{
    return(
        <header className="header">
            <h1 className="header-title">Gaming Leaderboard</h1>
            <p className="header-subtitle">Track player scores and achievements!</p>
        </header>
    );
}

export default Header;