import React, {  useState  } from "react";
import './Search.css';

const Search = ({onSearch}) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); //Notify parent about the search query
    };

    

    return(
        <div className="search-container">
            <input 
                type="text"
                value={query}
                onChange={handleSearch}
               
                className="search-input"
                placeholder="Search players by name..."
                />
            <button className="search-button" onClick={handleSearch}>
                Search Player
            </button>
        </div>
    );
}

export default Search;