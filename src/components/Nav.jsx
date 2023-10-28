import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

function Nav({ onSearch }) {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to='/home'>
        <button>HOME</button>
      </Link>

      <Link to='/favorites'>
        <button>Favorites</button>
      </Link>

      <Link to='/about'>
        <button>ABOUT</button>
      </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Nav;
