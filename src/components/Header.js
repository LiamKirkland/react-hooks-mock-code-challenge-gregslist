import React from "react";
import Search from "./Search";

function Header({alphaSort, setAlphaSort}) {
  function handleCheck() {
    setAlphaSort(!alphaSort)
  }

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search />
      <label>Alphabetic Sort: </label>
      <input type="checkbox" onChange={handleCheck} checked={alphaSort}></input>
    </header>
  );
}

export default Header;
