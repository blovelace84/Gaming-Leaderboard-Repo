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
        <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    );
}

export default Search;